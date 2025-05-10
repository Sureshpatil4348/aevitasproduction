import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay, FaExternalLinkAlt, FaInstagram, FaYoutube } from 'react-icons/fa';

// Portfolio categories and data
const portfolioData = {
  shortForm: {
    title: "Short Form",
    description: "Eye-catching reels and shorts that capture attention instantly",
    samples: [
      {
        title: "Sample 1",
        url: "https://www.youtube.com/shorts/Nsp7ckHvUYk",
        thumbnail: "/images/portfolio/short-form-1.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 2",
        url: "https://www.youtube.com/shorts/WV6RuqHSYfA",
        thumbnail: "/images/portfolio/short-form-2.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 3",
        url: "https://www.youtube.com/shorts/ETmdsPtNH_8",
        thumbnail: "/images/portfolio/short-form-3.jpg",
        platform: "youtube"
      },
    ],
    creators: [
      {
        name: "Clevin Prakash",
        url: "https://www.instagram.com/clevinprakash/",
        platform: "instagram"
      },
      {
        name: "Jagruk Sthan",
        url: "https://www.instagram.com/jagruksthan/",
        platform: "instagram"
      },
      {
        name: "AlgoFX Live",
        url: "https://www.youtube.com/@algofxlive/",
        platform: "youtube"
      }
    ]
  },
  longForm: {
    title: "Long Form",
    description: "In-depth content that builds authority and provides real value",
    samples: [
      {
        title: "Sample 1",
        url: "https://www.youtube.com/watch?v=eI3roS07haw",
        thumbnail: "/images/portfolio/long-form-1.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 2",
        url: "https://www.youtube.com/watch?v=7fKo9EZP5ME",
        thumbnail: "/images/portfolio/long-form-2.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 3",
        url: "https://www.youtube.com/watch?v=0w646hCWtY0",
        thumbnail: "/images/portfolio/long-form-3.jpg",
        platform: "youtube"
      },
    ],
    creators: [
      {
        name: "Interview Kickstart",
        url: "https://www.youtube.com/@Interviewkickstart",
        platform: "youtube"
      },
      {
        name: "Jagruk Sthan",
        url: "https://www.youtube.com/@JagrukSthan",
        platform: "youtube"
      },
      {
        name: "Angel Investments",
        url: "https://www.youtube.com/@angelinvestments_",
        platform: "youtube"
      }
    ]
  },
  documentaries: {
    title: "Documentaries",
    description: "Compelling stories told through captivating visual narratives",
    samples: [
      {
        title: "Sample 1",
        url: "https://www.youtube.com/watch?v=5hvvV_k1cHk",
        thumbnail: "/images/portfolio/doc-1.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 2",
        url: "https://www.youtube.com/watch?v=fLzMNq--1g8",
        thumbnail: "/images/portfolio/doc-2.jpg",
        platform: "youtube"
      },
      {
        title: "Sample 3",
        url: "https://www.youtube.com/watch?v=4JC7weXtpqY",
        thumbnail: "/images/portfolio/doc-3.jpg",
        platform: "youtube"
      },
    ],
    creators: [
      {
        name: "Jagruk Sthan",
        url: "https://www.youtube.com/@JagrukSthan",
        platform: "youtube"
      },
      {
        name: "Insight Fusion",
        url: "https://www.youtube.com/@Insight_Fusion_Official",
        platform: "youtube"
      }
    ]
  }
};

const ChannelShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<'shortForm' | 'longForm' | 'documentaries'>('longForm');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get the selected category data
  const selectedCategory = portfolioData[activeCategory];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <FaInstagram className="mr-1.5 text-base" />;
      case 'youtube':
        return <FaYoutube className="mr-1.5 text-base" />;
      default:
        return <FaExternalLinkAlt className="mr-1.5 text-base" />;
    }
  };

  // Function to get video ID from URL for thumbnails
  const getYoutubeVideoId = (url: string): string => {
    // Handle YouTube Shorts URLs
    if (url.includes('/shorts/')) {
      const shortsMatch = url.match(/\/shorts\/([^\/?&]+)/);
      if (shortsMatch && shortsMatch[1]) {
        return shortsMatch[1];
      }
    }
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const getVideoPlatform = (url: string): string => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    } else if (url.includes('instagram.com')) {
      return 'instagram';
    } else {
      return 'unknown';
    }
  };

  const getVideoThumbnail = (video: any): string => {
    const platform = getVideoPlatform(video.url);
    if (platform === 'youtube') {
      const videoId = getYoutubeVideoId(video.url);
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    // For demo purposes, return a placeholder for Instagram
    return `/images/placeholder-${activeCategory}-${Math.floor(Math.random() * 3) + 1}.jpg`;
  };

  return (
    <section className="section bg-gray-950 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden" id="portfolio">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2/3 h-1/2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -top-1/4 -right-1/4"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl -bottom-1/4 -left-1/4"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Experience the difference we make.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12">
          From founder-led shows to creator-driven channels, we craft cinematic content and automate workflows with AI — Helping you scale faster, grow stronger, and stand out with style.
          </p>
        </motion.div>

        {/* Category Selection Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          {Object.entries(portfolioData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as 'shortForm' | 'longForm' | 'documentaries')}
              className={`py-2 sm:py-3 px-4 sm:px-5 rounded-full text-sm sm:text-base font-medium transition-all duration-300
                ${activeCategory === key 
                ? 'bg-primary text-white shadow-lg shadow-primary/25 transform scale-105' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Featured Videos Section */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white text-center">{selectedCategory.title} <span className="text-primary">Highlights</span></h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {selectedCategory.samples.slice(0, 3).map((video, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/9] overflow-hidden cursor-pointer min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    
                    {/* Use actual thumbnail from YouTube if possible */}
                    <div className="relative h-full w-full">
                      <img 
                        src={getVideoThumbnail(video)}
                        alt={`${video.title} thumbnail`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Platform badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
                      <div className={`flex items-center rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold ${video.platform === 'youtube' ? 'bg-red-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
                        {getPlatformIcon(video.platform)}
                        <span>{video.platform === 'youtube' ? 'YouTube' : 'Instagram'}</span>
                      </div>
                    </div>
                  </div>
                </a>
                
                <div className="p-3 sm:p-4">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                  >
                    Watch Video
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Collaborators Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">Creators We've Collaborated With</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {selectedCategory.creators.map((creator, index) => (
              <a 
                key={index}
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm text-white flex items-center transition-all duration-300"
              >
                {getPlatformIcon(creator.platform)}
                <span className="truncate max-w-[120px] sm:max-w-none">{creator.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/portfolio" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all inline-flex items-center shadow-lg shadow-primary/20 text-sm sm:text-base"
          >
            View Our Complete Portfolio
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelShowcase;