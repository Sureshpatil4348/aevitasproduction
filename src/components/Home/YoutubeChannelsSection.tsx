import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaRocket, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const YoutubeChannelsSection = () => {
  const channels = [
    {
      title: "Money Mastery",
      category: "Finance",
      subscribers: "67K+",
      videoCount: 324,
      avgViews: "12.4K",
      thumbnail: "/images/channels/finance-channel.jpg"
    },
    {
      title: "Tech Insight Daily",
      category: "Technology",
      subscribers: "105K+",
      videoCount: 467,
      avgViews: "18.6K",
      thumbnail: "/images/channels/tech-channel.jpg"
    },
    {
      title: "Cosmic Wonder",
      category: "Science",
      subscribers: "89K+",
      videoCount: 298,
      avgViews: "15.3K",
      thumbnail: "/images/channels/science-channel.jpg"
    },
    {
      title: "Mind & Wellness",
      category: "Health",
      subscribers: "42K+",
      videoCount: 215,
      avgViews: "8.7K",
      thumbnail: "/images/channels/health-channel.jpg"
    },
    {
      title: "History Unveiled",
      category: "History",
      subscribers: "78K+",
      videoCount: 356,
      avgViews: "14.2K",
      thumbnail: "/images/channels/history-channel.jpg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="channels">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-1/3 h-1/3 bg-primary/10 blur-3xl rounded-full -left-10 top-1/4"></div>
        <div className="absolute w-1/3 h-1/3 bg-secondary/10 blur-3xl rounded-full -right-10 bottom-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaYoutube className="text-4xl text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our <span className="text-primary">Automated</span> YouTube Channels
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These channels are 100% powered by Aevitas AI, generating content, editing videos, 
              and publishing automatically without human intervention.
            </p>
          </motion.div>
        </div>

        {/* Channel cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {channels.map((channel, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variants={itemVariants}
            >
              <div className="relative">
                <img 
                  src={channel.thumbnail} 
                  alt={channel.title} 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 flex items-center">
                  <div className="bg-red-600 text-white p-2 rounded-full mr-3">
                    <FaYoutube className="w-5 h-5" />
                  </div>
                  <span className="text-white font-semibold">{channel.category}</span>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {channel.subscribers} Subscribers
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <FaPlay className="text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Videos</p>
                      <p className="text-white font-medium">{channel.videoCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaChartLine className="text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Avg. Views</p>
                      <p className="text-white font-medium">{channel.avgViews}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FaRocket className="mr-2" /> View Channel
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Ready to launch your own fully-automated YouTube channel? Get started today and let our AI handle everything for you.
          </p>
          <Link 
            href="#pricing" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-shadow"
          >
            <FaRocket className="mr-2" /> Launch Your Channel
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default YoutubeChannelsSection; 