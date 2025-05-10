import { IconType } from 'react-icons';

export type Service = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
  benefits?: string[];
};

export const servicesData: Service[] = [
  {
    id: 'scripting',
    title: 'Smart Scripting',
    description: 'Our generative AI writes high-converting scripts tailored to your brand voice, niche, and platform — in seconds.',
    iconName: 'pen',
    colorClass: 'text-primary',
    benefits: [
      'Save 90% of time spent on content creation',
      'SEO-optimized scripts for maximum discoverability',
      'Scripts tailored for different audience segments',
      'Format-specific content for each platform'
    ]
  },
  {
    id: 'avatars',
    title: 'AI Avatars & Voiceovers',
    description: 'Professional AI avatars and natural-sounding voiceovers create consistent, high-quality video content that scales with your business needs.',
    iconName: 'robot',
    colorClass: 'text-secondary',
    benefits: [
      'No need for expensive filming equipment',
      'Multiple languages and accent options',
      'Consistent brand representation',
      'Create content 24/7 without scheduling issues'
    ]
  },
  {
    id: 'editing',
    title: 'Global Editing Team',
    description: 'Our editing professionals in the Philippines and India work around the clock to transform raw content into polished, engaging videos that convert.',
    iconName: 'edit',
    colorClass: 'text-accent',
    benefits: [
      'Fast 24-48 hour turnaround times',
      'Professional transitions and effects',
      'Custom branded elements and templates',
      'Both long-form and short-form content creation'
    ]
  },
  {
    id: 'distribution',
    title: 'Multi-Platform Distribution',
    description: 'We handle posting and management across YouTube, YouTube Shorts, TikTok, Instagram, LinkedIn, Twitter, and Facebook to maximize your reach.',
    iconName: 'share',
    colorClass: 'text-green-500',
    benefits: [
      'Content optimized for each platform',
      'Strategic posting schedules for maximum engagement',
      'Cross-platform promotion strategy',
      'Consistent posting frequency that algorithms love'
    ]
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'Detailed performance metrics across all platforms help optimize your content strategy for maximum engagement, growth, and conversions.',
    iconName: 'chart',
    colorClass: 'text-blue-500',
    benefits: [
      'Track ROI on your content investment',
      'Identify top-performing content themes',
      'Audience growth and engagement tracking',
      'Data-driven content optimization'
    ]
  },
  {
    id: 'growth',
    title: 'Business Growth Strategy',
    description: 'Our AI-powered content strategy helps you 10x your brand visibility, audience engagement, and business growth without extra effort.',
    iconName: 'tags',
    colorClass: 'text-purple-500',
    benefits: [
      'Scale your content without scaling your team',
      'Build authority in your industry',
      'Generate leads on autopilot',
      'Convert viewers into customers'
    ]
  }
]; 