import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-20 pb-16 md:pt-24 lg:pt-32 md:pb-20 lg:pb-28 overflow-hidden bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left section - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center bg-gray-900/80 border border-gray-800 rounded-full py-1 px-2.5 sm:py-1.5 sm:px-3 mb-4 sm:mb-6">
              <span className="bg-primary w-2 h-2 rounded-full mr-2"></span>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">From Idea to Impact — We Make It Happen.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white">
              <span className="block">AI-Powered
              </span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Content Production
              </span>
              <span className="block">For Visionary Creators & Founders
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Medblen combines elite production talent and AI-driven systems to streamline 
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="#pricing" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-medium py-3 px-5 sm:px-6 rounded-lg transition-all text-center sm:text-left"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-5 sm:px-6 rounded-lg transition-all text-center sm:text-left mt-2 sm:mt-0"
              >
                Learn How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right section - Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-gray-800 mx-auto max-w-xl lg:max-w-none">
              {!showVideo ? (
                // Thumbnail and Play Button
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <Image 
                    src="/images/demo-thumbnail.jpg" 
                    alt="Medblen AI in action" 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-300">
                    <div className="bg-primary/80 group-hover:bg-primary rounded-full p-3 sm:p-5 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <FaPlay className="text-white w-3 h-3 sm:w-5 sm:h-5 ml-0.5 sm:ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                // Video Player
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dVlC9Uz7E08?autoplay=1&rel=0&modestbranding=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Stats or Features Highlights */}
            <div className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-8 bg-gray-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-gray-800 shadow-lg hidden sm:block">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">40%</div>
                  <div className="text-gray-400 text-xs">Higher Retention</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">3x</div>
                  <div className="text-gray-400 text-xs">Faster Growth</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">2x</div>
                  <div className="text-gray-400 text-xs">Revenue</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 