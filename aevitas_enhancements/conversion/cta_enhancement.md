# Call-to-Action Enhancement Plan for Aevitas Website

## Current CTA Analysis

The existing CTAs on the Aevitas website have the following characteristics:

1. Generic text ("Get Started", "Learn More")
2. Limited visual hierarchy to guide user attention
3. Lack of specific value propositions
4. No sense of urgency or FOMO (Fear of Missing Out)
5. Insufficient differentiation between primary and secondary actions
6. Minimal A/B testing or optimization

## CTA Enhancement Strategy

### 1. Primary CTA Button Improvements

#### Hero Section CTA

**Current:**
```tsx
<Link 
  href="#pricing" 
  className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-medium py-3 px-6 rounded-lg transition-all"
>
  Get Started Today
</Link>
```

**Enhanced:**
```tsx
<Link 
  href="#pricing" 
  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1"
>
  <span className="relative z-10 flex items-center">
    Create Your AI Channel
    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
    </svg>
  </span>
  <span className="absolute bottom-0 left-0 h-1 bg-white/20 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</Link>
```

#### Services Section CTA

**Current:**
```tsx
<Link href="/services" className="btn btn-primary btn-lg">
  Explore All Services
</Link>
```

**Enhanced:**
```tsx
<Link 
  href="/services" 
  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
>
  <span className="mr-2">See Service Details & Pricing</span>
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
  </span>
</Link>
```

#### Pricing Section CTA

**Current:**
```tsx
<Link
  href={`/contact?plan=${pkg.id}`}
  className={`flex items-center justify-center w-full rounded-md px-6 py-3 text-center font-medium transition-all text-white ${
    pkg.isPopular
      ? 'bg-primary hover:bg-primary/90'
      : pkg.id === 'enterprise'
        ? 'bg-purple-700 hover:bg-purple-800'
        : 'bg-gray-700 hover:bg-gray-600'
  }`}
>
  <span>{pkg.ctaText}</span>
</Link>
```

**Enhanced:**
```tsx
<Link
  href={`/contact?plan=${pkg.id}`}
  className={`group relative flex items-center justify-center w-full rounded-md px-6 py-4 text-center font-bold transition-all text-white ${
    pkg.isPopular
      ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
      : pkg.id === 'enterprise'
        ? 'bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/30'
        : 'bg-gray-700 hover:bg-gray-600'
  }`}
>
  <span className="flex items-center">
    {pkg.isPopular ? 'Start Your 10x Growth Today' : pkg.ctaText}
    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
    </svg>
  </span>
  
  {pkg.isPopular && (
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs py-1 px-3 rounded-full font-bold shadow-lg">
      MOST POPULAR CHOICE
    </div>
  )}
</Link>
```

### 2. Secondary CTA Improvements

#### Learn More Links

**Current:**
```tsx
<button className="flex items-center text-primary hover:underline">
  Learn more
  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
</button>
```

**Enhanced:**
```tsx
<button 
  className="group flex items-center text-primary hover:text-primary-dark focus:outline-none transition-colors"
  aria-label={`Learn more about ${title}`}
>
  <span className="relative">
    See How It Works
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </span>
  <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
</button>
```

#### Form Submit Buttons

**Current:**
```tsx
<button
  type="submit"
  className="btn btn-primary w-full"
>
  Send Message
</button>
```

**Enhanced:**
```tsx
<button
  type="submit"
  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center"
>
  <span className="mr-2">Get Your Custom Strategy</span>
  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
  </svg>
</button>
```

### 3. Create Floating CTA 

Add a sticky CTA button that appears when users scroll down:

```tsx
// src/components/UI/FloatingCTA.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 transition-transform duration-300 transform hover:scale-105">
      <Link 
        href="/contact"
        className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <span>Schedule Discovery Call</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default FloatingCTA;
```

### 4. Exit Intent Popup

Implement an exit intent popup for visitor retention:

```tsx
// src/components/UI/ExitIntentPopup.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !localStorage.getItem('exitPopupShown') && 
        !hasShown
      ) {
        setIsVisible(true);
        setHasShown(true);
        // Set a cookie or localStorage to prevent showing again in this session
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle email submission
    console.log('Email submitted:', emailInput);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.25 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl z-50 max-w-md w-full"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <div className="inline-block bg-primary/20 p-3 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Before You Go...</h3>
              <p className="text-gray-300">Get our free guide to scaling YouTube channels with AI and save 20% on your first month!</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Get Free Guide & 20% Discount
              </button>
              
              <p className="text-gray-400 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
```

### 5. Social Proof CTAs

Enhance CTAs with social proof elements:

```tsx
<Link 
  href="/contact" 
  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1"
>
  <span className="relative z-10">
    Get Started Today
  </span>
  <span className="absolute bottom-0 left-0 h-1 bg-white/20 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  
  <div className="absolute -bottom-1 left-0 right-0 bg-black/20 text-xs text-white text-center py-1 rounded-b-lg">
    <span>Joined by 200+ businesses this month</span>
  </div>
</Link>
```

### 6. Two-Step CTAs

Implement two-step CTAs for higher engagement:

```tsx
// src/components/UI/TwoStepCTA.tsx
import React, { useState } from 'react';

type TwoStepCTAProps = {
  initialQuestion: string;
  options: {
    text: string;
    value: string;
  }[];
  finalCTAText: string;
  onComplete: (selectedOption: string) => void;
};

const TwoStepCTA = ({ initialQuestion, options, finalCTAText, onComplete }: TwoStepCTAProps) => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    setStep(2);
  };

  const handleFinalClick = () => {
    onComplete(selectedOption);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
      {step === 1 ? (
        <>
          <h3 className="text-xl font-bold text-white mb-4">{initialQuestion}</h3>
          <div className="grid gap-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className="text-left bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 transition-colors"
              >
                <span className="text-white font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold text-white mb-4">Great choice!</h3>
          <p className="text-gray-300 mb-4">We'll tailor our solution to your specific needs.</p>
          <button
            onClick={handleFinalClick}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            {finalCTAText}
          </button>
        </>
      )}
    </div>
  );
};

export default TwoStepCTA;
```

Usage example:

```tsx
<TwoStepCTA
  initialQuestion="What type of video content do you need?"
  options={[
    { text: "YouTube long-form videos", value: "youtube" },
    { text: "Short-form content (TikTok, Reels, Shorts)", value: "short-form" },
    { text: "Multi-platform strategy", value: "multi-platform" }
  ]}
  finalCTAText="Get Your Custom Strategy"
  onComplete={(selectedOption) => {
    router.push(`/contact?interest=${selectedOption}`);
  }}
/>
```

### 7. CTAs with Countdown Timers (Limited Time Offers)

```tsx
// src/components/UI/CountdownCTA.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type CountdownCTAProps = {
  endDate: Date;
  ctaText: string;
  ctaLink: string;
  offerText: string;
};

const CountdownCTA = ({ endDate, ctaText, ctaLink, offerText }: CountdownCTAProps) => {
  const calculateTimeLeft = () => {
    const difference = endDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (timeLeft.expired) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 shadow-lg">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer!</h3>
        <p className="text-gray-300">{offerText}</p>
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg">{timeLeft.days}</div>
          <span className="text-xs text-gray-300 mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg">{timeLeft.hours}</div>
          <span className="text-xs text-gray-300 mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg">{timeLeft.minutes}</div>
          <span className="text-xs text-gray-300 mt-1">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg">{timeLeft.seconds}</div>
          <span className="text-xs text-gray-300 mt-1">Seconds</span>
        </div>
      </div>
      
      <Link 
        href={ctaLink} 
        className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default CountdownCTA;
```

Usage example:

```tsx
// Set end date to 7 days from now
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

<CountdownCTA
  endDate={endDate}
  ctaText="Claim 25% Discount Now"
  ctaLink="/contact?promo=launch25"
  offerText="Get 25% off your first 3 months when you sign up before the timer ends!"
/>
```

## Implementation Strategy

### Priority Order

1. Primary Button CTAs (Hero, Services, Pricing sections)
2. Form Submit Buttons
3. Floating CTA
4. Secondary CTAs & Learn More links
5. Exit Intent Popup
6. Social Proof CTAs
7. Two-Step CTAs
8. Countdown Timer CTAs

### Component Organization

Create a UI components folder structure:

```
src/
└── components/
    └── UI/
        ├── Buttons/
        │   ├── PrimaryButton.tsx
        │   ├── SecondaryButton.tsx
        │   └── SubmitButton.tsx
        ├── CTA/
        │   ├── FloatingCTA.tsx
        │   ├── ExitIntentPopup.tsx
        │   ├── TwoStepCTA.tsx
        │   └── CountdownCTA.tsx
```

### A/B Testing Setup

1. Install an A/B testing library:
```bash
npm install react-ab-test
```

2. Create A/B test variants:
```tsx
import React from 'react';
import { Experiment, Variant } from 'react-ab-test';

const PricingCTA = () => {
  const handleConversion = (experimentName, variantName) => {
    // Track conversion in analytics
    console.log(`Conversion: ${experimentName} - ${variantName}`);
  };

  return (
    <Experiment name="pricing_cta" onChoice={handleConversion}>
      <Variant name="original">
        <Link 
          href="/contact" 
          className="btn btn-primary"
        >
          Get Started
        </Link>
      </Variant>
      
      <Variant name="specific">
        <Link 
          href="/contact" 
          className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center">
            Start Creating Videos Today
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </Link>
      </Variant>
    </Experiment>
  );
};
```

## Success Metrics

Track the following metrics to measure CTA effectiveness:

1. **Click-Through Rate (CTR)**
   - Measure percentage of users who click on CTAs
   - Compare CTR across different CTA designs and placements

2. **Conversion Rate**
   - Track form submissions and completed goals
   - Measure impact of CTA changes on final conversions

3. **Time to Convert**
   - Analyze how quickly users convert after interacting with CTAs
   - Identify if certain CTAs lead to faster decision making

4. **Engagement Rate**
   - Measure user interactions with two-step CTAs
   - Track completion rates for multi-step processes

5. **Bounce Rate Impact**
   - Monitor how CTA changes affect bounce rates
   - Identify if exit intent popups successfully retain visitors

## Implementation Timeline

### Week 1: Core CTA Updates

- [ ] Redesign primary CTAs on homepage
- [ ] Update form submit buttons
- [ ] Implement floating CTA

### Week 2: Enhanced CTAs

- [ ] Develop and implement secondary CTAs
- [ ] Create exit intent popup
- [ ] Add social proof elements to CTAs

### Week 3: Advanced CTA Features

- [ ] Build two-step CTAs
- [ ] Implement countdown timers for limited offers
- [ ] Set up A/B testing framework

### Week 4: Testing & Optimization

- [ ] Configure analytics tracking for CTAs
- [ ] Begin A/B testing of various CTA designs
- [ ] Analyze initial results and make refinements 