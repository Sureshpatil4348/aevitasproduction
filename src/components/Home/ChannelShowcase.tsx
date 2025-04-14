import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { channelData } from '@/utils/channelData';
import Link from 'next/link';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

const ChannelShowcase = () => {
  const [activeChannel, setActiveChannel] = useState(channelData[0].id);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedChannel = channelData.find((channel) => channel.id === activeChannel) || channelData[0];

  return (
    <section className="section bg-gray-950 text-white py-24 relative overflow-hidden" id="channels">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2/3 h-1/2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -top-1/4 -right-1/4"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl -bottom-1/4 -left-1/4"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-4">Our 5 Automated YouTube Channels</h2>
          <p className="text-xl text-gray-300 mb-12">
            Discover how we used AI to build and automate five distinct channels, each 
            with its own unique personality and target audience.
          </p>
        </motion.div>

        {/* Channel Selection Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          {channelData.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setActiveChannel(channel.id)}
              className={`py-3 px-5 rounded-full font-medium transition-all duration-300
                ${activeChannel === channel.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/25 transform scale-105' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {channel.name}
            </button>
          ))}
        </motion.div>

        {/* Channel Content Display */}
        <motion.div
          key={selectedChannel.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Channel Video Preview */}
          <div className="rounded-xl overflow-hidden bg-gray-900 mb-8 shadow-2xl">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedChannel.videoUrl}
                title={`${selectedChannel.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{minHeight: "500px"}}
              ></iframe>
            </div>
          </div>
          
          {/* Channel Details */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{selectedChannel.name}</h3>
            <div className="text-primary font-medium mb-3">
              {selectedChannel.tagline}
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              {selectedChannel.description}
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href={selectedChannel.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                <FaPlay />
                Watch Videos
              </a>
              <Link
                href={`/channels#${selectedChannel.id}`}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                <FaExternalLinkAlt />
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="/channels" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-full transition-all inline-flex items-center"
          >
            View All Channels
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelShowcase; 