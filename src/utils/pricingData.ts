export type PricingFeature = {
  name: string;
  included: boolean;
  info?: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular: boolean;
  features: PricingFeature[];
  ctaText: string;
};

export const pricingData: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses looking to establish video presence',
    price: '$1,499',
    isPopular: false,
    features: [
      { name: '2 videos per month (up to 5 mins each)', included: true },
      { name: 'AI Script Generation', included: true },
      { name: 'AI Voice Creation', included: true },
      { name: '1 AI Avatar', included: true },
      { name: 'Professional Editing', included: true },
      { name: '2 Short-form Video Clips', included: true },
      { name: 'YouTube Publishing', included: true },
      { name: 'Basic Thumbnail Design', included: true },
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'RECOMMENDED - Ideal for growing brands wanting consistent video marketing',
    price: '$2,999',
    isPopular: true,
    features: [
      { name: '4 videos per month (up to 10 mins each)', included: true },
      { name: 'AI Script Generation', included: true },
      { name: 'AI Voice Creation', included: true },
      { name: '2 AI Avatars', included: true },
      { name: 'Professional Editing', included: true },
      { name: '3-5 Short-form Video Clips', included: true },
      { name: 'Multi-platform Publishing', included: true },
      { name: 'Premium Thumbnail Design', included: true },
      { name: 'Basic SEO Optimization', included: true },
      { name: 'Monthly Performance Report', included: true },
    ],
    ctaText: 'Get Started Today',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution for brands committed to video dominance',
    price: '$4,999',
    isPopular: false,
    features: [
      { name: '8 videos per month (up to 15 mins each)', included: true },
      { name: 'Custom AI Script Generation', included: true },
      { name: 'Premium AI Voice Creation', included: true },
      { name: 'Multiple AI Avatars', included: true },
      { name: 'Advanced Editing with Graphics', included: true },
      { name: '5+ Short-form Video Clips per Video', included: true },
      { name: 'Full Platform Publishing & Management', included: true },
      { name: 'Advanced Thumbnail Design', included: true },
      { name: 'Advanced SEO Optimization', included: true },
      { name: 'Weekly Performance Reports', included: true },
      { name: 'Dedicated Account Manager', included: true },
    ],
    ctaText: 'Get Started',
  },
]; 