import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import {
  Hero,
  TabNavigation,
  MetricsStrip,
  PortfolioGrid,
  CreatorPartners,
  AutomationPipeline,
  Testimonials
} from '@/components/Portfolio';
import { TabType, ChipType } from '@/components/Portfolio/TabNavigation';
import { PortfolioItemType } from '@/components/Portfolio/PortfolioCard';

const PortfolioPage = () => {
  // State for tab and chip filters
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [activeChips, setActiveChips] = useState<ChipType[]>([]);

  // Mock portfolio items data
  const portfolioItems: PortfolioItemType[] = [
    // Short-form content
    {
      id: 'sf1',
      title: 'How the US banking crisis affects India',
      type: 'short-form',
      thumbnail: 'https://i.ytimg.com/vi/v8QueWzM7Bs/maxresdefault.jpg',
      videoUrl: 'https://youtube.com/shorts/v8QueWzM7Bs',
      duration: '0:58',
      platform: 'yt',
      categories: ['finance', 'education'],
      goal: 'Explain complex international financial concepts to an Indian audience in under 60 seconds',
      deliverables: ['Vertical format short', 'Subtitles in English', 'Motion graphics package'],
      techStack: ['Adobe Premiere Pro', 'Adobe After Effects', 'ChatGPT', 'Custom Python'],
      outcomes: [
        { label: 'Views', value: '147K+' },
        { label: 'Engagement', value: '12.8%' }
      ]
    },
    {
      id: 'sf2',
      title: 'Signs you need therapy',
      type: 'short-form',
      thumbnail: 'https://i.ytimg.com/vi/Nsp7ckHvUYk/maxresdefault.jpg',
      videoUrl: 'https://youtube.com/shorts/Nsp7ckHvUYk',
      duration: '0:29',
      platform: 'yt',
      categories: ['health', 'lifestyle'],
      goal: 'Create awareness about mental health symptoms in a short, shareable format',
      deliverables: ['YouTube Short', 'TikTok Version', 'IG Reel'],
      techStack: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Custom Thumbnail'],
      outcomes: [
        { label: 'Views', value: '1.2M+' },
        { label: 'Comments', value: '2.3K+' }
      ]
    },
    {
      id: 'sf3',
      title: 'Investing strategies during inflation',
      type: 'short-form',
      thumbnail: 'https://i.ytimg.com/vi/sQCMk6xUS_w/maxresdefault.jpg',
      videoUrl: 'https://youtube.com/shorts/sQCMk6xUS_w',
      duration: '0:45',
      platform: 'yt',
      categories: ['finance', 'education'],
      goal: 'Provide actionable investment advice during inflationary periods',
      deliverables: ['YouTube Short', 'LinkedIn Cut', 'Custom Graphics'],
      techStack: ['Adobe Premiere Pro', 'AE', 'Illustrator'],
      outcomes: [
        { label: 'Views', value: '52K+' },
        { label: 'Saves', value: '1.1K+' }
      ]
    },

    // Long-form content
    {
      id: 'lf1',
      title: 'INFOSYS - Full Company Analysis 2023',
      type: 'long-form',
      thumbnail: 'https://i.ytimg.com/vi/eI3roS07haw/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=eI3roS07haw',
      duration: '11:24',
      platform: 'yt',
      categories: ['finance', 'education'],
      goal: 'Provide detailed stock analysis of Infosys for Indian investors',
      deliverables: ['Full YT video', 'Custom thumbnails', '3 supporting shorts'],
      techStack: ['Adobe Premiere Pro', 'After Effects', 'Financial data API integration'],
      outcomes: [
        { label: 'Views', value: '118K+' },
        { label: 'Watch time', value: '9.2 mins avg' }
      ]
    },
    {
      id: 'lf2',
      title: 'Top DSA Interview Questions in 2023',
      type: 'long-form',
      thumbnail: 'https://i.ytimg.com/vi/7fKo9EZP5ME/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=7fKo9EZP5ME',
      duration: '19:35',
      platform: 'yt',
      categories: ['technology', 'education'],
      goal: 'Help software engineers prepare for technical interviews',
      deliverables: ['Full tutorial', 'Code snippets', 'Problem breakdown animations'],
      techStack: ['Adobe Premiere Pro', 'VS Code integration', 'Custom animation package'],
      outcomes: [
        { label: 'Views', value: '47K+' },
        { label: 'Comments', value: '280+' }
      ]
    },
    {
      id: 'lf3',
      title: 'How I Hit 10 Lakhs Monthly Income As A Developer',
      type: 'long-form',
      thumbnail: 'https://i.ytimg.com/vi/0w646hCWtY0/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=0w646hCWtY0',
      duration: '15:38',
      platform: 'yt',
      categories: ['technology', 'finance', 'lifestyle'],
      goal: 'Share personal journey and inspire tech professionals to increase their income',
      deliverables: ['Story-driven video', 'Income breakdown graphics', 'Resource list'],
      techStack: ['Adobe Premiere Pro', 'After Effects', 'Podcast format adaptation'],
      outcomes: [
        { label: 'Views', value: '205K+' },
        { label: 'New subs', value: '12K+' }
      ]
    },
    {
      id: 'lf4',
      title: 'Guide to Foreign Language Learning for Jobs',
      type: 'long-form',
      thumbnail: 'https://i.ytimg.com/vi/pbQwrZnjbXs/maxresdefault.jpg',
      videoUrl: 'http://youtube.com/watch?v=pbQwrZnjbXs',
      duration: '14:22',
      platform: 'yt',
      categories: ['education', 'lifestyle'],
      goal: 'Provide comprehensive guide to learning languages for career advancement',
      deliverables: ['YT long-form', 'Resource PDF', '5 supporting shorts'],
      techStack: ['Adobe Premiere Pro', 'After Effects', 'Language learning platform integration'],
      outcomes: [
        { label: 'Views', value: '38K+' },
        { label: 'PDF downloads', value: '3.2K+' }
      ]
    },
    {
      id: 'lf5',
      title: 'PGDM vs MBA - Which is Better?',
      type: 'long-form',
      thumbnail: 'https://i.ytimg.com/vi/R9duFuc3iE8/maxresdefault.jpg',
      videoUrl: 'https://youtu.be/R9duFuc3iE8',
      duration: '16:08',
      platform: 'yt',
      categories: ['education', 'finance'],
      goal: 'Help students make informed decisions about their management education',
      deliverables: ['YT long-form', 'Comparison graphics', 'ROI calculator'],
      techStack: ['Adobe Premiere Pro', 'Excel data visualization', 'AI script assistance'],
      outcomes: [
        { label: 'Views', value: '72K+' },
        { label: 'Engagement', value: '8.7%' }
      ]
    },

    // Documentary content
    {
      id: 'doc1',
      title: 'Story of Adani & Adani Group',
      type: 'documentaries',
      thumbnail: 'https://i.ytimg.com/vi/5hvvV_k1cHk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=5hvvV_k1cHk',
      duration: '28:47',
      platform: 'yt',
      categories: ['finance', 'education'],
      description: 'A deep dive into the rise of Gautam Adani and the Adani Group conglomerate.',
      goal: 'Create comprehensive documentary on one of India\'s most prominent business groups',
      deliverables: ['Full documentary', 'Timeline graphics', 'Research document'],
      techStack: ['Adobe Premiere Pro', 'After Effects', 'Cinema 4D', 'Professional VO'],
      outcomes: [
        { label: 'Views', value: '1.4M+' },
        { label: 'Watch time', value: '14.2 mins avg' }
      ]
    },
    {
      id: 'doc2',
      title: 'Building a Business from Scratch (Hindi)',
      type: 'documentaries',
      thumbnail: 'https://i.ytimg.com/vi/fLzMNq--1g8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=fLzMNq--1g8',
      duration: '31:22',
      platform: 'yt',
      categories: ['finance', 'education', 'lifestyle'],
      description: 'Follow the journey of three entrepreneurs building businesses from zero.',
      goal: 'Document the challenges of entrepreneurship in the Indian market',
      deliverables: ['Hindi documentary', 'Founder interviews', 'Business model visualizations'],
      techStack: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Two-camera setup'],
      outcomes: [
        { label: 'Views', value: '542K+' },
        { label: 'Shares', value: '12.7K+' }
      ]
    },
    {
      id: 'doc3',
      title: 'Zero to Crore: The Agri-Tech Revolution',
      type: 'documentaries',
      thumbnail: 'https://i.ytimg.com/vi/4JC7weXtpqY/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=4JC7weXtpqY',
      duration: '42:18',
      platform: 'yt',
      categories: ['technology', 'education', 'finance'],
      description: 'Exploring how technology is transforming agriculture in rural India.',
      goal: 'Showcase the intersection of technology and agriculture in emerging markets',
      deliverables: ['Feature documentary', 'Rural filming', 'Expert interviews', 'Data visualizations'],
      techStack: ['Adobe Premiere Pro', 'Drone footage', 'Field recording kit'],
      outcomes: [
        { label: 'Views', value: '387K+' },
        { label: 'Watch time', value: '21.4 mins avg' }
      ]
    }
  ];

  // Creator partners data
  const shortFormCreators = [
    {
      id: 'creator1',
      name: 'Clevin Prakash',
      handle: '@clevinprakash',
      avatar: '/images/clevinprakash.png',
      platform: 'instagram',
      url: 'https://www.instagram.com/clevinprakash/',
      stats: {
        followersGained: '83K+',
        viewIncrease: '165%'
      }
    },
    {
      id: 'creator2',
      name: 'Jagruk Sthan',
      handle: '@jagruksthan',
      avatar: '/images/jagruksthan.png',
      platform: 'instagram',
      url: 'https://www.instagram.com/jagruksthan/',
      stats: {
        followersGained: '144K+',
        viewIncrease: '210%'
      }
    },
    {
      id: 'creator3',
      name: 'AlgoFX Live',
      handle: '@algofxlive',
      avatar: '/images/algofxlive.png',
      platform: 'youtube',
      url: 'https://www.youtube.com/@algofxlive/',
      stats: {
        followersGained: '56K+',
        viewIncrease: '128%'
      }
    }
  ];

  const longFormCreators = [
    {
      id: 'creator4',
      name: 'Interview Kickstart',
      handle: '@interviewkickstart',
      avatar: '/images/interviewkickstart.png',
      platform: 'youtube',
      url: 'https://www.youtube.com/@InterviewKickstart',
      stats: {
        followersGained: '29K+',
        viewIncrease: '87%'
      }
    },
    {
      id: 'creator5',
      name: 'Jagruk Sthan',
      handle: '@jagruksthan',
      avatar: '/images/jagruksthan.png',
      platform: 'youtube',
      url: 'https://www.youtube.com/@JagrukSthan',
      stats: {
        followersGained: '144K+',
        viewIncrease: '93%'
      }
    },
    {
      id: 'creator6',
      name: 'Angel Investments',
      handle: '@angelinvesting',
      avatar: '/images/angelinvesting.jpeg',
      platform: 'youtube',
      url: 'https://www.youtube.com/@angelinvestments',
      stats: {
        followersGained: '18K+',
        viewIncrease: '145%'
      }
    },
    {
      id: 'creator7',
      name: 'The Chirag Anand',
      handle: '@thechiraganand',
      avatar: '/images/The Chirag Anand.jpg',
      platform: 'youtube',
      url: 'https://www.youtube.com/@thechiraganand',
      stats: {
        followersGained: '210K+',
        viewIncrease: '176%'
      }
    }
  ];

  const documentaryCreators = [
    {
      id: 'creator8',
      name: 'Jagruk Sthan',
      handle: '@jagruksthan',
      avatar: '/images/jagruksthan.png',
      platform: 'youtube',
      url: 'https://www.youtube.com/@JagrukSthan',
      stats: {
        followersGained: '144K+',
        viewIncrease: '132%'
      }
    },
    {
      id: 'creator9',
      name: 'Insight Fusion Official',
      handle: '@insightfusionofficial',
      avatar: '/images/Sarah Chen.png',
      platform: 'youtube',
      url: 'https://www.youtube.com/@InsightFusionOfficial',
      stats: {
        followersGained: '62K+',
        viewIncrease: '184%'
      }
    }
  ];

  // Function to determine which creator partners to show based on active tab
  const getCreatorPartners = () => {
    // Always ensure we return exactly 4 creators for consistent display
    switch (activeTab) {
      case 'short-form':
        // Pad with creators from other categories if needed
        return shortFormCreators.length >= 4 
          ? shortFormCreators.slice(0, 4) 
          : [...shortFormCreators, ...longFormCreators].slice(0, 4);
      case 'long-form':
        return longFormCreators.length >= 4 
          ? longFormCreators.slice(0, 4) 
          : [...longFormCreators, ...shortFormCreators].slice(0, 4);
      case 'documentaries':
        return documentaryCreators.length >= 4 
          ? documentaryCreators.slice(0, 4) 
          : [...documentaryCreators, ...shortFormCreators, ...longFormCreators].slice(0, 4);
      default:
        // For 'all' tab, show a mix of creators from all categories
        return [...shortFormCreators, ...longFormCreators, ...documentaryCreators].slice(0, 4);
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio - Aevitas | AI-Powered Video Content Automation</title>
        <meta name="description" content="Explore our portfolio of AI-powered video content creation across Short-form, Long-form, and Documentary formats. See how we help creators scale content production." />
        <meta property="og:title" content="Portfolio - Aevitas | AI-Powered Video Content" />
        <meta property="og:description" content="Explore our portfolio of AI-powered video content creation for creators and businesses. See our work across Short-form, Long-form and Documentary formats." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-portfolio.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* Tab Navigation */}
        <TabNavigation 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
        />

        {/* Metrics Strip - Hidden */}
        {/* <MetricsStrip /> */}

        {/* Portfolio Grid */}
        <PortfolioGrid 
          items={portfolioItems}
          activeTab={activeTab}
          activeChips={activeChips}
        />

        {/* Creator Partners */}
        <CreatorPartners 
          title={`${activeTab === 'all' ? 'Featured' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Creator Partners`}
          creators={getCreatorPartners()}
        />

        {/* Automation Pipeline - Hidden */}
        {/* <AutomationPipeline /> */}

        {/* Testimonials & Case Studies */}
        <Testimonials />


      </Layout>
    </>
  );
};

export default PortfolioPage;