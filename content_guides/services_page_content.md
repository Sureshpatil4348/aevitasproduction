# Services Page Content Guide (`src/pages/services.tsx`)

This guide details where to find and modify the text and links for each section of the Services page.

**Note:** Content comes from a mix of direct embedding in the file, an external data file (`src/utils/servicesData.ts`), a helper function within the file, and local arrays within the component.

---

## 1. Hero Section

*   **Component:** `src/pages/services.tsx` (within the first `<section>`)
*   **Content Location:**
    *   Headlines ("Redefine Your Content")
    *   Paragraph ("Our AI-powered approach...")
    *   Button Text ("Get Started", "Explore Services")
    *   All the above are directly within the `src/pages/services.tsx` file.
*   **Links:**
    *   "Get Started" button links to `/contact`.
    *   "Explore Services" button scrolls down to the `#service-showcase` section.

---

## 2. Services Showcase Section (`#service-showcase`)

*   **Component:** `src/pages/services.tsx` (within the second `<section>`)
*   **Content Location:**
    *   **Section Header:** Headline ("End-to-End Video Solutions"), paragraph, and tab button text ("Our Services", "Results") are directly within `src/pages/services.tsx`.
    *   **"Our Services" Tab:**
        *   **Service Card Titles & Descriptions:** Modify the `servicesData` array in `src/utils/servicesData.ts`.
        *   **Service Feature Bullet Points:** Modify the `generateServiceFeatures` function located at the bottom of the `src/pages/services.tsx` file.
    *   **"Results" Tab:** All text content (Key metrics, Platform Performance stats, Client Success Metrics, Case Study preview text) is directly within `src/pages/services.tsx`.
    *   **Bottom Link Text ("View All Services"):** Directly within `src/pages/services.tsx`. Links to `/services`.

---

## 3. Process Section

*   **Component:** `src/pages/services.tsx` (within the third `<section>`)
*   **Content Location:**
    *   **Section Header:** Headline ("Our Creative Process") and paragraph are directly within `src/pages/services.tsx`.
    *   **Process Steps:** Details for each step (Step Number "01"-"05", Title, Description, Icon) are defined in an array directly within the component code in `src/pages/services.tsx`.

---

## 4. Testimonials Section

*   **Component:** `src/pages/services.tsx` (within the fourth `<section>`)
*   **Content Location:**
    *   **Section Header:** Headline ("What Our Clients Say") and paragraph are directly within `src/pages/services.tsx`.
    *   **Testimonials:** Details for each testimonial (Quote, Author, Role) are defined in an array directly within the component code in `src/pages/services.tsx`.
    *   **Testimonial Images:** Placeholder image paths (`/images/testimonial1.jpg`, etc.) are hardcoded in the same array (though currently rendered as placeholder divs).

---

## 5. Call to Action (CTA) Section

*   **Component:** `src/pages/services.tsx` (within the final `<section>`)
*   **Content Location:**
    *   Headline ("Ready to Transform Your Video Strategy?")
    *   Paragraph ("Join successful brands...")
    *   Button Text ("Get Started Today")
    *   All the above are directly within the `src/pages/services.tsx` file.
*   **Links:** Button links to `/contact`.

---

*Remember to update this guide if you add, remove, or significantly restructure sections on the Services page.*
