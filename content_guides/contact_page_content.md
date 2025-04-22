# Contact Page Content Guide (`src/pages/contact.tsx`)

This guide details where to find and modify the text and links for each section of the Contact page.

**Note:** All content for the Contact page is directly located within the `src/pages/contact.tsx` file.

---

## 1. Hero Section

*   **Component:** `src/pages/contact.tsx` (within the first `<section>`)
*   **Content Location:**
    *   Badge Text ("CONTACT US")
    *   Headline ("Let's Create Something Amazing")
    *   Introductory Paragraph ("Ready to transform...")
    *   Button Text ("Get Started")
    *   Phone Number ("(555) 123-4567")
    *   Side Box Titles ("Global Service", "Call Us", "Email Us", "Visit Us")
    *   Side Box Content (Support availability, Phone number, Email address, Physical address)
    *   Side Box Highlights ("Available 9am-6pm PST", "24-hour response time", "By appointment only")
    *   All the above are directly within the `src/pages/contact.tsx` file.
*   **Links:**
    *   "Get Started" button links to the `#contact-form` section on the same page.
    *   Phone number links via `tel:(555) 123-4567`.

---

## 2. Contact Form Section (`#contact-form`)

*   **Component:** `src/pages/contact.tsx` (within the second `<section>`)
*   **Content Location:**
    *   **Section Header:** Headline ("Get in Touch") and paragraph ("Fill out the form...") are directly within `src/pages/contact.tsx`.
    *   **Form:**
        *   Labels/Placeholders ("Full Name *", "Email Address *", "Company Name", "Phone Number", "Select a service...", "Subject *", "Tell us about your project... *") are directly within `src/pages/contact.tsx`.
        *   Service Dropdown Options ("YouTube Channel Creation", "Video Content Production", etc.) are defined as `<option>` tags directly within `src/pages/contact.tsx`.
        *   Button Text ("Send Message" / "Sending...") is directly within `src/pages/contact.tsx`.
        *   Success Message Content ("Message Sent!", "Thank you for contacting us...", "Send another message") is directly within `src/pages/contact.tsx`.
    *   **Side Information:**
        *   **Business Hours Card:** Title ("Business Hours"), days, and times are directly within `src/pages/contact.tsx`.
        *   **Connect with Us Card:** Title ("Connect with Us"), social media names ("LinkedIn", "Twitter", "Instagram"), and social media links (`https://linkedin.com`, `https://twitter.com`, `https://instagram.com`) are directly within `src/pages/contact.tsx`.
        *   **Demo Card:** Title ("Ready for a Demo?"), paragraph, and button text ("Schedule a Demo") are directly within `src/pages/contact.tsx`.
*   **Links:**
    *   The "Schedule a Demo" button links to `/services`.
    *   Social media links point to their respective external sites.

---

## 3. Map Section

*   **Component:** `src/pages/contact.tsx` (within the final `<section>`)
*   **Content Location:**
    *   **Section Header:** Headline ("Visit Our Office") and paragraph ("We're located in...") are directly within `src/pages/contact.tsx`.
    *   **Map Placeholder Text:** Address ("123 Innovation Way", "San Francisco, CA 94103") and placeholder note ("Interactive map would be embedded here") are directly within `src/pages/contact.tsx`.
    *   **Map Overlay Text:** Title ("Our Headquarters") and address are directly within `src/pages/contact.tsx`.
*   **Links:** No interactive links in this section (map is a placeholder).

---

*Remember to update this guide if you add, remove, or significantly restructure sections on the Contact page.*
