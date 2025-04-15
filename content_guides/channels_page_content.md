# Channels Page Content Guide (`src/pages/channels.tsx`)

This guide details where to find and modify the text and links for each section of the Channels page.

**Note:** Core channel information is pulled from `src/utils/channelData.ts`.

---

## 1. Channels Grid Section

*   **Component:** `src/pages/channels.tsx` (within the first `<section>`)
*   **Content Location:**
    *   **Section Header:** Badge text ("YOUTUBE SHOWCASE"), headline ("Our Automated Channels"), and introductory paragraph are directly within `src/pages/channels.tsx`.
    *   **Channel Cards:**
        *   **Details (Name, Tagline, Description, Logo Source `logoSrc`, Video URL `videoUrl`):** Modify the `channelData` array in `src/utils/channelData.ts`.
        *   **"Watch Videos" Button Text:** Directly within `src/pages/channels.tsx`.
*   **Links:**
    *   The "Watch Videos" button on each card links to the `videoUrl` specified for that channel in `src/utils/channelData.ts`.

---

## 2. Featured Videos Section

*   **Component:** `src/pages/channels.tsx` (within the second `<section>`)
*   **Content Location:**
    *   **Section Header:** Badge text ("HIGHLIGHTED CONTENT"), headline ("Featured Videos"), and introductory paragraph are directly within `src/pages/channels.tsx`.
    *   **Featured Video Cards:** Displays the first 3 channels from `src/utils/channelData.ts`.
        *   **Video URL, Channel Name, Tagline:** Pulled from `src/utils/channelData.ts`.
        *   **"Watch Video" Button Text:** Directly within `src/pages/channels.tsx` (Note: This is a `<button>`, not an `<a>` tag, and doesn't navigate).
    *   **Bottom Link Text ("View all our YouTube content"):** Directly within `src/pages/channels.tsx`.
*   **Links:**
    *   The main link at the bottom points to `https://www.youtube.com`.

---

## 3. Call to Action (CTA) Section

*   **Component:** `src/pages/channels.tsx` (within the final `<section>`)
*   **Content Location:**
    *   Headline ("Want a Channel Like These?")
    *   Paragraph ("We can create and automate...")
    *   Button Text ("Get Started", "See Our Services")
    *   All the above are directly within the `src/pages/channels.tsx` file.
*   **Links:**
    *   "Get Started" button links to `/contact`.
    *   "See Our Services" button links to `/services`.

---

*Remember to update this guide if you add, remove, or significantly restructure sections on the Channels page, or if you modify the `src/utils/channelData.ts` file.*
