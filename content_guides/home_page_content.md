# Home Page Content Guide (`src/pages/index.tsx`)

This guide details where to find and modify the text and links for each section of the Home page.

**Note:** Some content is pulled from data files located in the `src/utils/` directory.

---

## 1. Hero Section

*   **Component:** `src/components/Home/HeroSection.tsx`
*   **Content Location:** All text (headlines, paragraph, button text) and links (`#pricing`, `#how-it-works`) are directly within this file.
*   **Image:** The main background image is `/images/demo-thumbnail.jpg`.

---

## 2. Services Overview Section

*   **Component:** `src/components/Home/ServicesOverview.tsx`
*   **Content Location:**
    *   **Main Heading & Subheading:** Directly in `ServicesOverview.tsx`.
    *   **Individual Service Details (Title, Description):** Modify the `servicesData` array in `src/utils/servicesData.ts`.
    *   **Platform Section Heading:** Directly in `ServicesOverview.tsx`.
    *   **Platform Names (Tooltips):** Directly in `ServicesOverview.tsx`.
    *   **Final Call-to-Action Text:** Directly in `ServicesOverview.tsx`.
    *   **"Explore All Services" Link:** Points to `/services`, hardcoded in `ServicesOverview.tsx`.
    *   **"See benefits" Link:** Toggles content within the component, hardcoded in `ServicesOverview.tsx`.

---

## 3. Platforms Section

*   **Component:** `src/components/Home/PlatformsSection.tsx`
*   **Content Location:** All text (heading, subheading, platform names/descriptions, stats, performance metrics, client metrics, case study text) is directly within this file.
*   **Links:** No external links in this section.

---

## 4. Channel Showcase Section

*   **Component:** `src/components/Home/ChannelShowcase.tsx`
*   **Content Location:**
    *   **Main Heading & Subheading:** Directly in `ChannelShowcase.tsx`.
    *   **Individual Channel Details (Name, Tagline, Description, Video URL):** Modify the `channelData` array in `src/utils/channelData.ts`.
    *   **Button Text ("Watch Videos", "Learn More", "View All Channels"):** Directly in `ChannelShowcase.tsx`.
    *   **"Watch Videos" Link:** Uses `videoUrl` from `channelData.ts`.
    *   **"Learn More" Link:** Points to `/channels#[channel_id]`, using `id` from `channelData.ts`.
    *   **"View All Channels" Link:** Points to `/channels`, hardcoded in `ChannelShowcase.tsx`.

---

## 5. Pricing Packages Section

*   **Component:** `src/components/Home/PricingPackages.tsx`
*   **Content Location:**
    *   **Main Heading & Subheading:** Directly in `PricingPackages.tsx`.
    *   **Individual Package Details (Name, Description, Price, Features, CTA Text):** Modify the `pricingData` array in `src/utils/pricingData.ts`.
    *   **"Best Value" Tag Text:** Directly in `PricingPackages.tsx`.
    *   **Bottom Text ("Need a custom solution?"):** Directly in `PricingPackages.tsx`.
    *   **Package CTA Links:** Point to `/contact?plan=[package_id]`, using `id` from `pricingData.ts`.
    *   **"Contact us" Link:** Points to `/contact`, hardcoded in `PricingPackages.tsx`.

---

## 6. Global Team / Testimonials Section

*   **Component:** `src/components/Home/GlobalTeam.tsx`
*   **Content Location:**
    *   **Main Heading & Subheading:** Directly in `GlobalTeam.tsx`.
    *   **Location Names on Map ("USA", "India", "PH"):** Directly in `GlobalTeam.tsx`.
    *   **Team Description Paragraph:** Directly in `GlobalTeam.tsx`.
    *   **"What Our Clients Say" Heading:** Directly in `GlobalTeam.tsx`.
    *   **Individual Testimonial Details (Quote, Name, Position, Company, Image Source):** Modify the `testimonialData` array in `src/utils/testimonialData.ts`.
*   **Links:** No external links in this section.

---

## 7. How It Works Section

*   **Component:** `src/components/Home/HowItWorks.tsx`
*   **Content Location:**
    *   **Main Heading & Subheading:** Directly in `HowItWorks.tsx`.
    *   **Individual Process Step Details (Number, Title, Description, Icon Name):** Modify the `processSteps` array in `src/utils/processData.ts`.
    *   **Bottom Call-to-Action Text:** Directly in `HowItWorks.tsx`.
    *   **Button/Link Text ("Learn more", "Schedule a Discovery Call"):** Directly in `HowItWorks.tsx`.
    *   **"Schedule a Discovery Call" Link:** Points to `#contact` on the current page, hardcoded in `HowItWorks.tsx`.

---

## 8. Contact Section

*   **Component:** `src/components/Home/ContactSection.tsx`
*   **Content Location:** All visible text (heading, subheading, form labels/placeholders, success message, contact info details, "Schedule a Call" text, "Fast Response" text, button text) is directly within this file.
*   **Links:** The "Book a Call" link currently does not navigate anywhere. The form submission logic is also within this file (currently simulated).

---

*Remember to update this guide if you add, remove, or significantly restructure sections on the Home page.*
