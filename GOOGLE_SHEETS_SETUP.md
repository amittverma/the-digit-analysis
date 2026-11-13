# Connect website enquiries to Google Sheets

## Part A — Create the sheet
1. Sign in to the Google account where you want to own the leads.
2. Create a blank Google Sheet and name it `The Digit Analysis - Enquiries`.
3. Rename the first tab to `Enquiries`.
4. Keep this sheet private. Share it only with people who should see customer details.

## Part B — Add the Apps Script
1. In the sheet, open **Extensions → Apps Script**.
2. Remove the sample code and paste the contents of `google-apps-script.gs`.
3. Click **Save** and name the project `The Digit Analysis Lead Capture`.
4. Select **Deploy → New deployment**.
5. Select the gear icon / deployment type **Web app**.
6. Set **Execute as: Me**.
7. Set **Who has access: Anyone** (the website needs to submit enquiries without asking visitors to sign in). This makes the endpoint public, so add spam protection before a high-traffic launch.
8. Click **Deploy**, approve Google's authorisation prompts, and copy the Web app URL ending in `/exec`.

## Part C — Connect the website
1. Open `script.js`.
2. Find `const GOOGLE_SCRIPT_URL = '';`.
3. Paste the Web app `/exec` URL between the quotes.
4. Save and publish the updated website.
5. Submit a test enquiry using your own details.
6. Check that a new row appears in the `Enquiries` sheet.

## Important
- Do not share the spreadsheet publicly. Only the Apps Script web app endpoint is public.
- Anyone who obtains the endpoint could attempt to submit rows. Add CAPTCHA or another spam-control step before promoting the site widely.
- The simple starter endpoint stores the fields submitted by the form. It does not send an email notification.
- If you edit the Apps Script later, use **Deploy → Manage deployments → Edit → New version → Deploy**.
- Treat submitted names, email addresses and phone numbers as personal data. Add a privacy notice and collect only details you need.
