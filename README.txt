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

2. Getting quote requests with photos (free, no account)
   a. In assets/data.js, set formsubmitTo to the shop's email address.
   b. Send one test quote from the live website.
   c. FormSubmit emails that address an "Activate form" link. Click it once.
   d. Done. Every request now arrives by email with the customer's photos attached.
   e. Optional: FormSubmit's activation email also gives a random code. Put that in
      formsubmitTo instead of the email address so the address is hidden from the code.
   If FormSubmit is ever down, requests still come through Web3Forms (text only).
   (api/quote.js is an optional Resend-based alternative. You can ignore it.)

3. Reviews
   Paste real Google reviews into REVIEWS in assets/data.js and a reviews section appears.

4. Check before going live
   Placeholder phone number and email, "Same day" claim, the four sticky notes
   (warranty, price match, UFV discount, walk-ins), and the "small shop" text.
