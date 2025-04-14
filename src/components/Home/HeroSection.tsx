import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left section - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center bg-gray-900/80 border border-gray-800 rounded-full py-1.5 px-3 mb-6">
              <span className="bg-primary w-2 h-2 rounded-full mr-2"></span>
              <span className="text-gray-300 text-sm font-medium">Revolutionize Your YouTube Content Creation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              <span className="block">Fully Automated</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">YouTube Channels</span>
              <span className="block">Powered by AI</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Let our AI create, edit, and publish videos for you. Build a passive income stream with high-quality YouTube content—all without recording a single video yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#pricing" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Get Started Today
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all"
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
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-800">
              {/* Video Thumbnail */}
              <div className="relative w-full h-full">
                <Image 
                  src="/images/demo-thumbnail.jpg" 
                  alt="Aevitas AI in action" 
                  fill 
                  className="object-cover"
                  priority
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="bg-primary hover:bg-secondary rounded-full p-5 cursor-pointer transition-colors">
                    <FaPlay className="text-white w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="absolute -bottom-8 -right-8 max-w-sm bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">See the Aevitas AI Difference</h3>
              <p className="text-gray-300">
                Our AI generates videos that look and sound like they were created by human professionals.
              </p>
            </div>
            
            {/* Stats or Features Highlights */}
            <div className="absolute -top-6 -left-6 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800 shadow-lg">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">100%</div>
                  <div className="text-gray-400 text-xs">AI-Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">4K</div>
                  <div className="text-gray-400 text-xs">Quality</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">24/7</div>
                  <div className="text-gray-400 text-xs">Creation</div>
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