FIX IT ABBY WEBSITE
===================

Files
  index.html      Home page
  repairs.html    Every iPhone model with its repairs
  quote.html      Free quote form (with damage photo upload)
  assets/         styles.css, data.js (shop details, models, repairs), site.js
  api/quote.js    Small server function that emails quote requests WITH photos (runs on Vercel)

1. Shop details
   assets/data.js, top of the file: name, email, phone, area, hours, and the four sticky notes. Delete any note you don't want to promise.

2. Quote requests and photos
   Requests (with up to 3 photos) are emailed by api/quote.js through Fix It Abby's own
   Resend account. The settings live in Vercel > fixitabby > Settings > Environment Variables:
     RESEND_API_KEY  the Fix It Abby Resend key
     QUOTE_TO        the inbox that gets quote requests
     QUOTE_FROM      "Fix It Abby <onboarding@resend.dev>" for now. Once fixitabby.ca is
                     verified in Resend, change it to something like quotes@fixitabby.ca.
   Until a domain is verified, Resend only delivers to the email the Resend account was made with,
   so QUOTE_TO must be that address.
   Backup: if that ever fails, Web3Forms sends the request text and the customer is asked to text photos.

3. Reviews
   Paste real Google reviews into REVIEWS in assets/data.js and a reviews section appears.

4. Check before going live
   Placeholder phone number and email, "Same day" claim, the four sticky notes
   (warranty, price match, UFV discount, walk-ins), and the "small shop" text.
