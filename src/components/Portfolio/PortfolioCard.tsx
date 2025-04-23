import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export type PortfolioItemType = {
  id: string;
  title: string;
  type: 'short-form' | 'long-form' | 'documentaries';
  thumbnail: string;
  videoUrl: string;
  duration: string;
  platform: 'ig' | 'yt' | 'tt' | 'li'; // Instagram, YouTube, TikTok, LinkedIn
  categories: string[];
  description?: string;
  goal?: string;
  deliverables?: string[];
  techStack?: string[];
  outcomes?: {
    label: string;
    value: string;
  }[];
};

interface PortfolioCardProps {
  item: PortfolioItemType;
  openModal: (item: PortfolioItemType) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, openModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle hover for video preview
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Platform badges
  const platformIcons = {
    ig: (
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full p-1.5 text-xs font-medium flex items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
        </svg>
        Reel
      </div>
    ),
    yt: (
      <div className="bg-red-600 text-white rounded-full p-1.5 text-xs font-medium flex items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        {item.type === 'short-form' ? 'Short' : 'Video'}
      </div>
    ),
    tt: (
      <div className="bg-black text-white rounded-full p-1.5 text-xs font-medium flex items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.28 0 .55.05.81.14V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
        TikTok
      </div>
    ),
    li: (
      <div className="bg-blue-600 text-white rounded-full p-1.5 text-xs font-medium flex items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
        Video
      </div>
    ),
  };

  // Use standard horizontal YouTube format (16:9 aspect ratio) for all videos
  const aspectRatio = 'aspect-video';

  return (
    <motion.div 
      className="group cursor-pointer h-full flex flex-col justify-stretch"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => openModal(item)}
    >
      <div className={`relative aspect-video w-full h-full min-h-[200px] bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20`}>
        {/* Thumbnail/Video */}
        <div className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center">
          <img 
            src={item.thumbnail} 
            alt={item.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <video 
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            src={item.videoUrl} 
            muted 
            playsInline
            loop
          />
        </div>

        {/* Overlay with info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-between">
          {/* Top section - Platform badge and duration */}
          <div className="flex justify-between items-start">
            {platformIcons[item.platform]}
            <span className="bg-black/70 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
              {item.duration}
            </span>
          </div>

          {/* Bottom section - Title and arrow */}
          <div className="mt-auto">
            {/* Optional logline for documentaries */}
            {item.type === 'documentaries' && item.description && (
              <p className="text-sm text-gray-300 mb-2 line-clamp-2">{item.description}</p>
            )}
            
            <div className="flex justify-between items-end">
              <h3 className="text-white font-medium text-lg pr-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <motion.div 
                className="text-accent"
                animate={isHovered ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard; 