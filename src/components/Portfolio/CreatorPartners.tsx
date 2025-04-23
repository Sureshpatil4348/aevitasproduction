import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type CreatorType = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  platform: string;
  url: string;
  stats: {
    followersGained: string;
    viewIncrease: string;
  };
};

interface CreatorPartnersProps {
  title: string;
  creators: CreatorType[];
}

const CreatorPartners: React.FC<CreatorPartnersProps> = ({ title, creators }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We partner with leading creators across platforms to maximize their content output and audience growth.
          </p>
        </div>

        <div 
          ref={ref}
          className="overflow-x-auto pb-8 hide-scrollbar"
        >
          <motion.div 
            className="flex gap-6 min-w-max px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {creators.map((creator) => (
              <motion.div
                key={creator.id}
                variants={itemVariants}
                className="flex-shrink-0 w-72 bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-5">
                  {/* Creator Logo - Updated to use full width logos */}
                  <div className="flex flex-col items-center mb-5">
                    <div className="relative flex justify-center">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-700 mb-3 bg-white p-2 flex items-center justify-center">
                        <img 
                          src={creator.avatar} 
                          alt={creator.name} 
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="absolute bottom-3 right-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-800">
                        {creator.platform === 'youtube' && (
                          <div className="bg-red-600 w-full h-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </div>
                        )}
                        {creator.platform === 'instagram' && (
                          <div className="bg-gradient-to-tr from-purple-600 to-pink-600 w-full h-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                              <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-medium">{creator.name}</h3>
                      <a 
                        href={creator.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        {creator.handle}
                      </a>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-900/60 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-white font-bold text-lg">{creator.stats.followersGained}</div>
                      <div className="text-xs text-gray-400">Followers Gained</div>
                    </div>
                    <div className="bg-gray-900/60 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-accent font-bold text-lg">{creator.stats.viewIncrease}</div>
                      <div className="text-xs text-gray-400">View % Increase</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-700" />
            ))}
            <div className="w-6 h-2 rounded-full bg-accent ml-1" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorPartners; 