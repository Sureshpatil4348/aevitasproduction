# Google Analytics 4 Setup Guide for Aevitas Website

## Prerequisites
- Google account with admin access
- Access to website codebase
- Ability to deploy website updates

## Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account
2. Click on "Admin" in the bottom left corner
3. In the Account column, click "Create Account"
4. Enter account name "Aevitas AI Video Production"
5. Configure data sharing settings as needed
6. Click "Next"
7. Choose "Web" as the platform
8. Enter website details:
   - Website name: Aevitas
   - Website URL: Your production URL
   - Industry category: Business & Industrial > Marketing
9. Click "Create"

## Step 2: Install Google Analytics Tag

### Option 1: Manual Installation (gtag.js)

Add the following code to the `<Head>` section of `_document.tsx`:

```tsx
<Head>
  {/* Existing head content */}
  
  {/* Google Analytics */}
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
          page_path: window.location.pathname,
        });
      `,
    }}
  />
</Head>
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### Option 2: Using next-ga Package

1. Install the next-ga package:
```bash
npm install next-ga
```

2. Modify `_app.tsx`:
```tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '../lib/ga';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Send pageview with initial page load
    ga.pageview(window.location.pathname);

    // Send pageview when route changes
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
```

3. Create a file `lib/ga.js`:
```javascript
// lib/ga.js
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA ID

// Page view tracking
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Event tracking
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

## Step 3: Configure Event Tracking

### Key Events to Track

1. **CTA Button Clicks**
   ```javascript
   // Add to button onClick handlers
   const handleButtonClick = () => {
     ga.event({
       action: 'click',
       category: 'CTA',
       label: 'Get Started Button', // Use descriptive labels for each button
     });
     // Rest of your click handler
   };
   ```

2. **Form Submissions**
   ```javascript
   const handleFormSubmit = (event) => {
     event.preventDefault();
     ga.event({
       action: 'submit',
       category: 'Form',
       label: 'Contact Form', // Use descriptive labels for each form
     });
     // Rest of your form submission handler
   };
   ```

3. **Service Card Interactions**
   ```javascript
   const handleServiceCardClick = (serviceName) => {
     ga.event({
       action: 'view',
       category: 'Service',
       label: serviceName,
     });
     // Rest of your handler
   };
   ```

4. **Pricing Package Views**
   ```javascript
   const handlePricingPackageView = (packageName) => {
     ga.event({
       action: 'view',
       category: 'Pricing',
       label: packageName,
     });
     // Rest of your handler
   };
   ```

## Step 4: Create Custom Dimensions

In Google Analytics:

1. Go to Admin > Custom Definitions > Custom Dimensions
2. Click "Create custom dimension"
3. Create the following:
   - User Type (lead, customer, returning visitor)
   - Lead Source (direct, social, search, referral)
   - Service Interest (based on page views)
   - Pricing Package (viewed or selected)

## Step 5: Set Up Conversion Goals

In Google Analytics:

1. Go to Admin > Events > Conversions
2. Click "New conversion event"
3. Create the following conversion events:
   - `form_submission` for lead form completions
   - `demo_booking` for demo call bookings
   - `pricing_click` for clicks on pricing packages
   - `service_inquiry` for service-specific inquiries

## Step 6: Create Custom Dashboard

1. Go to Customization > Dashboards
2. Click "Create dashboard"
3. Add the following reports:
   - User acquisition overview
   - Top landing pages
   - Conversion paths
   - Event tracking summary
   - User engagement by source

## Step 7: Testing Analytics Implementation

1. Enable GA Debug mode by adding `?debug=1` to your website URL
2. Install Google Analytics Debugger browser extension
3. Verify that pageview events are firing on navigation
4. Test all custom events by interacting with your website
5. Verify conversion tracking is properly configured

## Step 8: Compliance and Privacy

1. Update your Privacy Policy to include information about Google Analytics usage
2. Ensure cookie consent banner is in place if required by your jurisdiction
3. Configure Google Analytics for proper data retention settings
4. Consider implementing IP anonymization for GDPR compliance

## Next Steps

1. Set up regular reporting schedule
2. Configure email reports for key stakeholders
3. Plan for A/B testing integration
4. Set up enhanced e-commerce tracking if applicable 