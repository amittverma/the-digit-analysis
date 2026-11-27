# Digit Decode – Order Page Preview

This is a front-end design prototype only.

## Included
- Separate `order-reports.html` page linked from the existing homepage navigation.
- Seven report options with the exact weightages in the project brief.
- Optional ₹1,500 consultation add-on.
- Customer information form and preferred delivery selection.
- Conditional compatibility placeholders for Love, Business and Marriage reports.
- Review step, consent checkbox and supplied Numerology disclaimer.
- Responsive styling matching the existing site's purple, light and gold palette.

## Intentionally not connected
- Report prices: values are `null` in `order-reports.js` until supplied.
- Compatibility questions: exact fields are pending from Amitt.
- Privacy Policy and Terms: final URLs/content are pending.
- Google Sheets, backend, payment gateway, order IDs, email/WhatsApp delivery and admin dashboard.

No customer data is transmitted or stored by this prototype. The final button only displays a preview notice.

## Preview
Open `order-reports.html` in a browser. Keep the existing `assets` folder, `styles.css`, and other homepage files in the same directory.


## Update 2 – Report prices, order and consultation options
- Reordered seven reports as requested; Advanced DOB is preselected, locked and mandatory.
- Added the supplied prices and live total calculation.
- Added report-specific icons.
- Consultation is an optional prominent checkbox; when enabled, Audio Call is preselected at ₹1,500 or Video Call can be selected at ₹2,300. Both are described as 30–40 minute sessions with multiple questions.
- Still a front-end preview only; no customer data is sent and no payment is processed.


## Update 3 – Conditional report details from supplied screenshots
- Child Personality: Child Name*; Date of Birth*; Birth Time; Nick Name; Father's DOB; Mother's DOB.
- Love Compatibility: Full Name (A)*; Date of Birth (A)*; Gender (A); Full Name (B)*; Date of Birth (B)*; Gender (B); Relationship Stage.
- Business Partner Compatibility: Full Name (A)*; Date of Birth (A)*; Birth Time (A); Role in Business (A, default Founder); Full Name (B)*; Date of Birth (B); Birth Time (B); Role in Business (B, default Co-Founder); Proposed Business Name; Legal Entity (default None); Industry / Field; Planned Launch Month.
- Marriage Compatibility / Match Making: Full Name (A)*; Date of Birth (A)*; Birth Time (A); Place of Birth (A); Mobile (A); Gender (A, default Male); Full Name (B)*; Date of Birth (B)*; Birth Time (B); Place of Birth (B); Mobile (B); Gender (B, default Female).
- The report-specific sections are displayed only when their matching report is selected. Required markers follow the supplied screenshots. These details are included in the order review.
- Relationship Stage, Legal Entity and role/gender controls are text inputs because the screenshots do not provide complete dropdown option lists.


## Update 4 – Customer-facing clarity and offer
- Reduced the large hero area and moved the report selection much closer to the top; removed the oversized marketing headline.
- Added a concise delivery statement: reports are personally prepared and delivered to Email inbox or WhatsApp within 0–2 days after payment.
- Added 25% off when more than one report is selected; discount applies to the entire order subtotal including the optional consultation.
- Added persistent sticky order action and live total while scrolling; CTA labels adapt by step. Payment remains a prototype alert, not a live payment action.
- Updated consultation icon to a crown and expanded the informational consultation topics list as supplied. These are discussion topics, not selectable products.
- Improved footer contrast for readability.


## Update 5 – Header, layout and offer copy
- Removed purple contact strip and Back to website link.
- Replaced AV monogram in the header with Amitt's portrait asset already included in the website package.
- Removed the stepper and order-estimate panel from the selection page.
- Removed weightage labels from report cards.
- Updated the multi-report offer wording to 25% off when selecting 2 or more reports; the consultation is included in the offer.
- Updated consultation booking note to: after payment, booking link sent separately within 0–2 days, subject to slot availability.
- Moved the personally picked report delivery promise to the bottom of the page: Inbox or WhatsApp within 0–2 days after payment.
- Added Instagram and Facebook icons with links in the footer; improved contrast.
- Changed totals to a simpler sans-serif price style matching report card prices.


## Update 6 – Final copy and field label polish
- Removed the 'DIGIT DECODE · PERSONAL REPORTS' eyebrow above the page title.
- Moved the personally picked delivery statement to immediately below the consultation topics accordion and removed it from the footer.
- Changed the first action button to 'Fill the Details' and the review action button to 'Get the Reports'. Sticky button labels follow these updates.
- Required asterisks are now grouped inline with field labels in both standard and conditional fields.


## Update 7 – Language/gender options and acknowledgement
- Preferred Language options limited to English, Hindi and Punjabi; removed Other.
- Gender options limited to Male and Female; removed Other and Prefer not to say.
- Translation helper updated to say reports in languages other than English are translated through Google Translate.
- Replaced the mandatory confirmation checkbox with a highlighted acknowledgement that by proceeding the customer agrees to the understanding of Numerology analysis; Privacy Policy and Terms links remain visible.
- Updated offer wording to 'Select 1+ reports to save 25%' and discount calculation to apply when at least one report is selected (including the default Advanced DOB report). Consultation is included in the discount.


## Update 8 – Remove unpublished policy links and correct offer eligibility
- Removed Privacy Policy and Terms links from the acknowledgement because these pages do not exist yet.
- Discount eligibility restored to more than one selected report (2+ reports). The mandatory Advanced DOB report alone does not qualify; the customer must select at least one additional report.
- Offer and sticky/review messaging updated to say 25% off on 2+ reports. Consultation remains included in the discounted order total when the report-count condition is met.


## Update 9 – One-page checkout redesign
- Replaced the three-step navigation flow with one continuous page: report selection, optional consultation, customer details, conditional compatibility/child details, delivery preference, disclaimer and order summary.
- Removed step indicators, Back/Next navigation and separate review-page transition.
- Added a live itemised order summary at the bottom; details remain editable above.
- Sticky bottom action now says 'Pay Now' and validates required fields before scrolling to the summary. It shows a prototype notice because backend/payment is not connected.
- Corrected offer logic: discount applies only when more than one report is selected (mandatory DOB alone does not qualify); consultation is included in the discounted subtotal when eligible.


## Update 10 – Compact selection and payment confirmation
- Reduced report card padding, height, icon size and text spacing for faster report selection.
- Added delivery preference 'Any' and made it the default; Email, WhatsApp and Both remain available.
- Replaced text-symbol Instagram/Facebook marks with inline SVG brand-style icons.
- Added a payment confirmation modal before the payment action. For more than one selected report, it explains 25% off reports and 1-to-1 consultation; for one selected report, it explains that adding another report unlocks the offer.
- Modal buttons: 'Continue with payment' and 'I want to select reports'.
- Removed the prototype-only payment gateway sentence.
- Payment is still not integrated; continuing from the modal shows a preview notice only.


## Update 11 – Shorter form and expandable report-specific details
- Main required customer fields are Full Name, Mobile Number, Date of Birth, Place of Birth and Gender.
- Preferred Language defaults to English and cannot be cleared; customers can change it to Hindi or Punjabi.
- Email is optional unless Email or Both delivery is selected; a provided email is format-validated. Time of Birth is optional.
- Mobile accepts any number of digits, including international prefixes and common separators; no fixed 10-digit length is enforced.
- Removed Delivery Preference from the order summary; the preference remains collected in the form.
- When Love, Business, Match Making or Child Personality is selected, a short note tells customers additional details are needed. Each report-specific detail section is shown as a compact collapsed accordion.
- Person A / child fields are prefilled from the customer's basic details where applicable and remain editable. Person B name and DOB are required for Love, Business and Match Making.
- Conditional fields are preserved if the customer changes report selections; validation automatically opens a collapsed section when a required field needs attention.


## Update 12 – Compact report labels with checkbox indicators
- Expandable additional-information sections now show only the selected report label, a checked checkbox indicator and 'View details' while collapsed.
- Expanding a row reveals the relevant additional fields. The checkbox is an indicator of the report already selected in the report picker; report selection itself remains controlled by the report cards at the top.


## Update 13 – Linear report picker
- Replaced two-column descriptive report cards with compact single-line rows.
- Each row contains only checkbox, icon, report name and price; the mandatory DOB row also retains a small Required indicator.
- Report descriptions are hidden in this compact picker to make selection faster.


## Update 14 – Disclaimer heading
- Changed the disclaimer section heading from 'About Numerology' to 'Numerology Analysis'. The disclaimer text remains unchanged.


## Update 15 – Rebrand to Amitt Verma Digit Decode
- Updated the order page title, metadata, header brand and footer brand to 'Amitt Verma Digit Decode'.
- Made the header brand logo/name a link to the website homepage (index.html).
- Updated the website homepage metadata and title to the new brand name.
- Replaced the favicon with a circular crop of the existing Amitt Verma portrait, with a subtle gold outline; the same favicon is referenced by the order page and homepage.
- Added a WhatsApp SVG icon to the WhatsApp delivery option.


## Update 16 – Refined icons and language options
- Removed Punjabi from the Preferred Language dropdown; English remains the default and Hindi is the only alternative.
- Replaced delivery preference text glyphs with clearer coloured vector icons for Any, Email, WhatsApp and Both.
- Replaced homepage Email, WhatsApp and Instagram text glyphs with coloured SVG icons and added a Facebook link/icon using the existing Facebook page URL.
- Added matching icons to homepage footer contact/social links.
- Retained the updated Amitt Verma Digit Decode brand identity.


## Update 17 – Homepage footer icon sizing fix
- Fixed the homepage footer Email, WhatsApp, Instagram and Facebook SVG icons. Explicitly constrained them to 16×16px and aligned them inline with their labels, preventing oversized SVG rendering.


## Update 17 – Meaningful report and video consultation icons
- Replaced generic glyphs with purpose-specific inline SVG icons: calendar for DOB, phone for mobile, pen for name, office/building for business compatibility, heart for love compatibility, rings for match making, and child face for child personality.
- Applied subtle category-specific colours and matching pale icon backgrounds.
- Replaced the video-call glyph with a proper video camera SVG icon.
