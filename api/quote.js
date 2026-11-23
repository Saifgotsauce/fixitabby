/* Vercel serverless function: emails a quote request, with the customer's damage photos attached.
   Setup on Vercel (Project > Settings > Environment Variables):
     RESEND_API_KEY  your key from resend.com (free plan is enough)
     QUOTE_TO        the inbox that should receive quote requests
     QUOTE_FROM      optional. Until you verify your own domain on Resend, use "Cellunet <onboarding@resend.dev>":
                     that sender only delivers to the email the Resend account was made with. */

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 2.5 * 1024 * 1024;

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Use POST." });

  const key = process.env.RESEND_API_KEY, to = process.env.QUOTE_TO;
  if (!key || !to) return res.status(503).json({ success: false, message: "Quote email isn't set up yet." });

  const { fields = {}, replyTo = null, photos = [] } = req.body || {};
  if (!fields["iPhone model"] || !fields["Name"]) return res.status(400).json({ success: false, message: "Missing model or name." });

  const attachments = (Array.isArray(photos) ? photos : []).slice(0, MAX_PHOTOS)
    .filter(p => p && typeof p.data === "string" && p.data.length * 0.75 <= MAX_PHOTO_BYTES)
    .map((p, i) => ({ filename: `damage-${i + 1}.jpg`, content: p.data }));

  const rows = Object.entries(fields).map(([k, v]) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#5D6361;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`).join("");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM || "Cellunet <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo || undefined,
      subject: `Free quote request: ${fields["iPhone model"]}${attachments.length ? ` (${attachments.length} photo${attachments.length > 1 ? "s" : ""})` : ""}`,
      html: `<h2 style="font-family:Arial,sans-serif">New quote request</h2><table style="font-family:Arial,sans-serif;font-size:15px">${rows}</table>
             <p style="font-family:Arial,sans-serif;color:#5D6361">${attachments.length ? `${attachments.length} damage photo(s) attached.` : "No photos."}</p>`,
      attachments
    })
  });

  if (!r.ok) {
    let detail = "";
    try { detail = (await r.json()).message || ""; } catch (e) {}
    return res.status(502).json({ success: false, message: "Email service refused the request.", detail });
  }
  return res.status(200).json({ success: true });
}
