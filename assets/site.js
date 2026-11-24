/* Shared behaviour for every page. */
(function () {
  const S = window.SHOP;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const LOGO = `<img src="assets/logo-white.png" alt="" width="78" height="96">`;

  /* ---------- Header + footer ---------- */
  function header(active) {
    const link = (href, label, key) => `<a href="${href}" ${active === key ? 'aria-current="page"' : ""}>${label}</a>`;
    return `
    <header class="site-head">
      <div class="wrap">
        <a class="logo" href="index.html" aria-label="${S.name}, iPhone repair in Abbotsford, home">${LOGO}<span>${S.name}</span></a>
        <nav class="nav" id="nav" aria-label="Main">
          ${link("index.html#repairs", "Repairs", "fixes")}
          ${link("repairs.html", "Find your iPhone", "repairs")}
          ${link("index.html#how", "How it works", "how")}
          ${link("index.html#faq", "Questions", "faq")}
          <a class="nav-cta" href="quote.html">Get a free quote</a>
        </nav>
        <a class="btn" href="quote.html">Get a free quote</a>
        <button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>
      </div>
    </header>`;
  }

  function footer() {
    return `
    <footer class="site-foot">
      <div class="wrap">
        <div class="cols">
          <div>
            <h4>Visit or call</h4>
            <ul>
              <li>${S.address || S.area}</li>
              <li>${S.quoteHours}</li>
              <li>${S.hours}</li>
              <li><a href="tel:${S.phoneHref}">${S.phone}</a></li>
            </ul>
          </div>
          <div>
            <h4>Popular repairs</h4>
            <ul>
              <li><a href="quote.html#any--screen">Screen replacement</a></li>
              <li><a href="quote.html#any--battery">Battery replacement</a></li>
              <li><a href="quote.html#any--backglass">Back glass</a></li>
              <li><a href="quote.html#any--port">Charging port</a></li>
              <li><a href="quote.html#any--water">Water damage</a></li>
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li><a href="quote.html">Get a free quote</a></li>
              <li><a href="repairs.html">Find your iPhone</a></li>
              <li><a href="index.html#faq">Questions</a></li>
            </ul>
          </div>
        </div>
        <div class="bigmark" aria-hidden="true">Cellunet<span>.</span></div>
        <div class="legal">
          <span>&copy; ${new Date().getFullYear()} ${S.name}. iPhone repair in Abbotsford, BC.</span>
          <span>Independent repair shop, not affiliated with Apple. iPhone is a trademark of Apple Inc.</span>
        </div>
      </div>
    </footer>`;
  }

  const hSlot = $("[data-header]"), fSlot = $("[data-footer]");
  if (hSlot) hSlot.outerHTML = header(hSlot.dataset.header);
  if (fSlot) fSlot.outerHTML = footer();
  const menuBtn = $(".menu-btn"), nav = $("#nav");
  if (menuBtn) menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.textContent = open ? "Close" : "Menu";
  });

  /* ---------- Text-a-photo links, phone bar, open sign ---------- */
  const smsHref = body => `sms:${S.phoneHref}?&body=${encodeURIComponent(body)}`;
  const smsPhoto = smsHref(S.smsMessage);
  $$("[data-sms]").forEach(a => a.href = smsPhoto);
  const ic = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  document.body.insertAdjacentHTML("beforeend", `
    <nav class="phonebar" aria-label="Quick contact">
      <a href="tel:${S.phoneHref}">${ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>')}Call</a>
      <a href="${smsPhoto}">${ic('<path d="M4 5h16v11H9l-5 4z"/>')}Text</a>
      <a class="go" href="quote.html">Free quote</a>
    </nav>`);

  const dh = $("#door-hours");
  if (dh && S.hoursList) dh.innerHTML = S.hoursList.map(([d, h]) => `<dt>${d}</dt><dd>${h}</dd>`).join("");
  S.addressLine = S.address || `${S.area}. Exact address coming soon.`;
  $$("[data-directions]").forEach(a => {
    a.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S.address || S.name + " " + S.area)}`;
    a.target = "_blank"; a.rel = "noopener";
  });

  const notes = $("#notes");
  if (notes && S.notes) notes.innerHTML = S.notes.map(n => `<li class="note ${n.color}"><h3>${n.title}</h3><p>${n.body}</p></li>`).join("");

  const rv = $("#reviews");
  if (rv && window.REVIEWS && REVIEWS.length) {
    $("#review-list").innerHTML = REVIEWS.map(r => `<figure class="review" style="margin:0"><div class="stars" aria-label="${r.stars} out of 5 stars">${"★".repeat(r.stars)}</div><p>${r.text}</p><b>${r.name}</b></figure>`).join("");
    rv.hidden = false;
  }

  /* ---------- Helpers ---------- */
  function fillModelSelect(sel, placeholder, withNotSure = true) {
    sel.innerHTML = (placeholder ? `<option value="">${placeholder}</option>` : "") +
      GENERATIONS.map(g => `<optgroup label="${g.label}">${g.models.map(m => `<option value="${m.id}">${m.name}</option>`).join("")}</optgroup>`).join("") +
      (withNotSure ? `<optgroup label="Other"><option value="not-sure">I'm not sure</option></optgroup>` : "");
  }
  /* Links carry the choice in the hash: quote.html#iphone-15-pro--screen */
  const quoteURL = (model, repair) =>
    !model && !repair ? "quote.html" : `quote.html#${model || "any"}--${repair || "any"}`;
  const bioName = m => m.bio === "faceid" ? "Face ID" : m.bio === "touchid" ? "Touch ID" : "Home button";
  const repairTitle = (r, m) =>
    r.id === "port" ? `${m.port} charging port`
    : r.id === "frontcam" ? (m.bio === "faceid" ? "Face ID & front camera" : "Home button & front camera")
    : r.id === "backglass" && m.back !== "glass" ? "Back housing" : r.name;

  /* ---------- Home: the tag in the hero ---------- */
  const heroTag = $("#hero-tag");
  if (heroTag) {
    fillModelSelect($("#t-model"), "Pick one");
    $("#t-issue").innerHTML = `<option value="">Pick one</option>` + REPAIRS.map(r => `<option value="${r.id}">${r.short}</option>`).join("");
    heroTag.addEventListener("submit", e => {
      e.preventDefault();
      location.href = quoteURL($("#t-model").value, $("#t-issue").value);
    });
  }

  /* ---------- Home: letterboard ---------- */
  const board = $("#board-rows");
  if (board) {
    board.innerHTML = REPAIRS.map(r => `
      <a href="${quoteURL("", r.id)}"><span class="nm">${r.short}</span><span class="dots"></span><span class="free">Free quote</span></a>`).join("");
  }

  /* ---------- Home: phones on the mat ---------- */
  const gens = $("#gens"), shelf = $("#shelf");
  if (gens && shelf) {
    gens.innerHTML = GENERATIONS.map((g, i) => `<button role="tab" aria-selected="${i === 1}" data-gen="${g.id}">${g.label}</button>`).join("");
    const show = id => {
      const g = GENERATIONS.find(x => x.id === id);
      $$("button", gens).forEach(b => b.setAttribute("aria-selected", b.dataset.gen === id));
      shelf.innerHTML = g.models.map(m => `
        <a class="phone-slot" href="repairs.html#${m.id}" title="See repairs for ${m.name}">
          ${phoneBack(m)}
          <span class="dymo">${m.name.replace("iPhone ", "")}</span>
        </a>`).join("");
    };
    gens.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.gen); });
    show(GENERATIONS[1].id);
  }

  /* Drawn phones in place of a photo that can't load */
  $$(".shop-photo").forEach(box => {
    const f = box.querySelector(".fallback .pair");
    if (f) f.innerHTML = phoneBack(findModel("iphone-16")) + phoneBack(findModel("iphone-17-pro"));
  });

  /* ---------- Repairs by model ---------- */
  const finder = $("#finder");
  if (finder) {
    const listEl = $("#finder-groups"), search = $("#finder-search"), panel = $("#finder-panel"), msel = $("#m-model");
    const all = GENERATIONS.flatMap(g => g.models.map(m => ({ ...m, gen: g })));
    let current = null;
    const mark = () => $$("button[data-id]", listEl).forEach(b => b.setAttribute("aria-current", b.dataset.id === current));
    const drawList = (term = "") => {
      const t = term.trim().toLowerCase().replace(/^iphone\s*/, "");
      const html = GENERATIONS.map(g => {
        const ms = g.models.filter(m => !t || m.name.toLowerCase().includes(t));
        return ms.length ? `<div class="finder-gen"><h3>${g.label}</h3>${ms.map(m => `<button data-id="${m.id}">${m.name}</button>`).join("")}</div>` : "";
      }).join("");
      listEl.innerHTML = html || `<p class="finder-empty">No iPhone matches "${term}". Try just the number, like 13 or 15 Pro.</p>`;
      mark();
    };
    const show = id => {
      const m = all.find(x => x.id === id) || all[0];
      current = m.id; msel.value = m.id;
      const back = m.back === "glass" ? "Glass back" : m.back === "plastic" ? "Plastic back" : "Aluminum back";
      panel.innerHTML = `
        <div class="fp-head">
          <div class="fp-mat">${phoneBack(m)}<span class="dymo">${m.name.replace("iPhone ", "")}</span></div>
          <div>
            <h2>${m.name}</h2>
            <ul class="specs"><li>${m.gen.year}</li><li>${m.port}</li><li>${bioName(m)}</li><li>${back}</li>${m.fold ? "<li>Foldable</li>" : ""}</ul>
            <a class="btn" href="${quoteURL(m.id, "")}">Get a free quote for this iPhone</a>
          </div>
        </div>
        <div class="fp-list">
          ${REPAIRS.map(r => `
            <a class="fp-row" href="${quoteURL(m.id, r.id)}">
              <h3>${repairTitle(r, m)}</h3><p>${r.forModel(m)}</p><span class="free">Free quote</span>
            </a>`).join("")}
        </div>`;
      mark();
      if (location.hash.slice(1) !== m.id) history.replaceState(null, "", "#" + m.id);
    };
    fillModelSelect(msel, "", false);
    msel.addEventListener("change", () => show(msel.value));
    listEl.addEventListener("click", e => {
      const b = e.target.closest("button[data-id]");
      if (b) { show(b.dataset.id); if (innerWidth > 900) scrollTo({ top: finder.offsetTop - 80, behavior: "smooth" }); }
    });
    search.addEventListener("input", () => drawList(search.value));
    drawList();
    show(location.hash.slice(1) || all[0].id);
    addEventListener("hashchange", () => show(location.hash.slice(1)));
  }

  /* ---------- Quote page ---------- */
  const form = $("#quote-form");
  if (form) {
    const msel = $("#f-model");
    fillModelSelect(msel, "Pick your iPhone");
    $("#f-issues").innerHTML = REPAIRS.map(r => `
      <label class="chip"><input type="checkbox" name="issues" value="${r.name}" data-id="${r.id}" data-short="${r.short}"><span>${r.short}</span></label>`).join("");

    const params = new URLSearchParams(location.search);
    const [hm, hr] = location.hash.slice(1).split("--");
    const pm = params.get("model") || hm, pr = params.get("repair") || hr;
    if (pm && (findModel(pm) || pm === "not-sure")) msel.value = pm;
    if (pr) { const c = $(`#f-issues input[data-id="${pr}"]`); if (c) c.checked = true; }

    /* The tag on the side fills in as they type */
    const live = () => {
      const set = (id, val, empty) => { const el = $(id); el.textContent = val || empty; el.classList.toggle("empty", !val); };
      const m = msel.value === "not-sure" ? "Not sure" : (findModel(msel.value) || {}).name;
      set("#lt-model", m, "your iPhone");
      set("#lt-issue", $$('input[name="issues"]:checked', form).map(c => c.dataset.short).join(", "), "what's wrong");
      set("#lt-name", form.name.value.trim().split(" ")[0], "your name");
      set("#lt-reply", form.phone.value.trim() || form.email.value.trim(), "phone or email");
      const iss = $$('input[name="issues"]:checked', form).map(c => c.dataset.short).join(", ");
      const nm = form.name.value.trim();
      $("#text-instead").href = smsHref(`Hi Cellunet! I'd like a free quote.\nMy iPhone: ${m || ""}\nWhat's wrong: ${iss}${nm ? `\nName: ${nm}` : ""}\n(Photo attached)`);
    };
    form.addEventListener("input", live); form.addEventListener("change", live); live();

    /* Damage photos: shrink on the phone before sending, show as polaroids */
    const photos = [];
    const MAX = 3;
    const shrink = file => new Promise((res, rej) => {
      const url = URL.createObjectURL(file), img = new Image();
      img.onload = () => {
        const k = Math.min(1, 1600 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        res(c.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("unreadable")); };
      img.src = url;
    });
    const drawPhotos = () => {
      $("#thumbs").innerHTML = photos.map((p, i) => `<div class="thumb"><img src="${p.data}" alt="Damage photo ${i + 1}"><button type="button" data-rm="${i}" aria-label="Remove photo ${i + 1}">&times;</button></div>`).join("");
      $("#tag-photos").innerHTML = photos.map(p => `<div class="pol"><img src="${p.data}" alt=""></div>`).join("");
      $("#drop b").textContent = photos.length ? (photos.length < MAX ? "Add another photo" : "3 photos added") : "Add photos";
    };
    const addFiles = async files => {
      for (const f of [...files]) {
        if (photos.length >= MAX) { fail(`You can add up to ${MAX} photos. Remove one to add another.`); break; }
        if (!f.type.startsWith("image/")) { fail(`${f.name} isn't a photo. Choose a JPG, PNG or HEIC image.`); continue; }
        try { photos.push({ name: f.name.replace(/\.[^.]+$/, "") + ".jpg", data: await shrink(f) }); }
        catch (x) { fail(`We couldn't open ${f.name}. Try taking the photo again, or text it to us instead.`); }
      }
      drawPhotos();
    };
    const fileIn = $("#f-photos"), drop = $("#drop");
    fileIn.addEventListener("change", () => { addFiles(fileIn.files); fileIn.value = ""; });
    ["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("over"); }));
    ["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("over"); }));
    drop.addEventListener("drop", e => addFiles(e.dataTransfer.files));
    $("#thumbs").addEventListener("click", e => { const b = e.target.closest("[data-rm]"); if (b) { photos.splice(+b.dataset.rm, 1); drawPhotos(); } });

    const err = $("#form-error");
    const fail = (msg, el) => {
      err.textContent = msg; err.classList.add("show");
      if (el) { el.closest(".field")?.classList.add("bad"); el.focus(); }
    };
    $$("input,select,textarea", form).forEach(el => el.addEventListener("input", () => { el.closest(".field")?.classList.remove("bad"); err.classList.remove("show"); }));

    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (form.website.value) return; // bot trap
      const name = form.name.value.trim(), phone = form.phone.value.trim(), email = form.email.value.trim();
      const issues = $$('input[name="issues"]:checked', form).map(c => c.value);
      const details = form.details.value.trim();
      if (!msel.value) return fail("Pick your iPhone. If you're not sure which one it is, choose \"I'm not sure\" at the bottom of the list.", msel);
      if (!issues.length && !details) return fail("Tap at least one problem, or describe what's happening in the box.", form.details);
      if (!name) return fail("Add your name so we know who the quote is for.", form.name);
      if (!phone && !email) return fail("Add a phone number or an email so we can send your quote.", form.phone);
      if (email && !/^\S+@\S+\.\S+$/.test(email)) return fail("That email looks incomplete. Fix it, or leave it blank and use your phone number.", form.email);

      const model = msel.value === "not-sure" ? "Not sure" : findModel(msel.value).name;
      const reply = form.reply.value;
      const data = {
        "iPhone model": model, "Problem": issues.join(", ") || "Not selected", "Details": details || "None",
        "Name": name, "Phone": phone || "Not given", "Email": email || "Not given", "Reply by": reply
      };
      const btn = $("#send"); btn.disabled = true; btn.textContent = "Sending...";

      const finish = (title, msg) => {
        $("#done-title").textContent = title;
        $("#done-msg").innerHTML = msg;
        form.hidden = true; $("#done").classList.add("show");
        $(".qside").classList.add("stamped");
        scrollTo({ top: 0, behavior: "smooth" });
      };
      const how = reply === "Email" ? "an email" : reply === "Call" ? "a call" : "a text";

      const first = name.split(" ")[0], phoneModel = model === "Not sure" ? "iPhone" : model;
      const okMsg = extra => finish(`Thanks, ${first}. We've got your tag.`, `We're checking parts for your ${phoneModel} now. Expect ${how} from us with your price and quote code.${extra || ""}`);

      /* Every request gets a time limit, so the button can never hang */
      const timedFetch = (url, opts, ms) => {
        const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), ms);
        return fetch(url, { ...opts, signal: ctl.signal }).finally(() => clearTimeout(t));
      };
      const viaWeb3 = async () => {
        const res = await timedFetch("https://api.web3forms.com/submit", {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: S.web3formsKey, subject: `Free quote request: ${model}`, from_name: S.name, replyto: email || undefined, ...data,
            "Photos": photos.length ? `${photos.length} photo(s) chosen but not attached` : "None" })
        }, 15000);
        const out = await res.json();
        if (!out.success) throw new Error(out.message);
      };
      const viaApi = async () => {
        const res = await timedFetch(S.apiEndpoint, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields: data, replyTo: email || null, photos: photos.map(p => ({ name: p.name, data: p.data.split(",")[1] })) })
        }, 45000);
        const out = await res.json();
        if (!res.ok || !out.success) throw new Error(out.detail || out.message);
      };
      const textPhotos = `<a href="${smsHref(`Photos for my ${phoneModel} quote (${first})`)}">text them to us</a>`;

      /* 1. Our own server function: one email with the request and the photos */
      if (S.apiEndpoint) {
        try { await viaApi(); return okMsg(); } catch (x) { console.warn("Quote email route failed:", x.message); }
      }
      /* 2. Backup: Web3Forms, text only */
      if (S.web3formsKey) {
        try {
          await viaWeb3();
          return okMsg(photos.length ? ` Your photos couldn't come through, so please ${textPhotos} and we'll add them to your quote.` : "");
        } catch (x) {}
        btn.disabled = false; btn.textContent = "Send my free quote request";
        return fail(`Your request didn't send. Check your connection and try again, or call us at ${S.phone}.`);
      } else {
        const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
        const mail = `mailto:${S.email}?subject=${encodeURIComponent("Free quote request: " + model)}&body=${encodeURIComponent(body)}`;
        finish("Almost done.", `Your email app should open with your request filled in. Press send there and we'll reply with your free quote. If nothing opened, email <b>${S.email}</b> or call <b>${S.phone}</b>.`);
        const a = $("#done-mail"); a.href = mail; a.hidden = false;
        try { location.href = mail; } catch (x) {}
      }
    });
  }

  $$("[data-shop]").forEach(el => {
    const k = el.dataset.shop;
    if (k === "phone") { el.textContent = S.phone; el.href = "tel:" + S.phoneHref; }
    else if (k === "email") { el.textContent = S.email; el.href = "mailto:" + S.email; }
    else el.textContent = S[k];
  });
})();
