import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlayCircle, FaUsers, FaEye } from 'react-icons/fa';

const ChannelCard = ({ title, category, subscribers, views, thumbnailSrc, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-primary/10 transition-all hover:scale-[1.02]">
        {/* Thumbnail with overlay */}
        <div className="relative aspect-video">
          <img 
            src={thumbnailSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-3 left-3 flex items-center space-x-2">
              <FaYoutube className="text-red-600 w-6 h-6" />
              <span className="text-white font-medium">Channel Showcase</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-primary hover:bg-secondary rounded-full p-4 cursor-pointer transition-colors">
                <FaPlayCircle className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{category}</p>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-1 text-gray-300">
              <FaUsers className="text-primary" />
              <span>{subscribers}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <FaEye className="text-primary" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LogoSection = () => {
  const channels = [
    {
      title: "Tech Insights Daily",
      category: "Technology & Reviews",
      subscribers: "120K subscribers",
      views: "4.2M views",
      thumbnailSrc: "/images/channel-tech.jpg"
    },
    {
      title: "Fitness Revolution",
      category: "Health & Fitness",
      subscribers: "85K subscribers",
      views: "2.7M views",
      thumbnailSrc: "/images/channel-fitness.jpg"
    },
    {
      title: "Finance Unpacked",
      category: "Business & Finance",
      subscribers: "95K subscribers",
      views: "3.1M views",
      thumbnailSrc: "/images/channel-finance.jpg"
    },
    {
      title: "Culinary Creations",
      category: "Food & Cooking",
      subscribers: "150K subscribers",
      views: "5.8M views",
      thumbnailSrc: "/images/channel-food.jpg"
    },
    {
      title: "Travel Adventures",
      category: "Travel & Lifestyle",
      subscribers: "110K subscribers", 
      views: "4.5M views",
      thumbnailSrc: "/images/channel-travel.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute left-0 top-1/3 w-1/2 h-1/2 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI-Generated</span> YouTube Channels
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            These fully automated channels are created and managed by our AI system, generating
            consistent views, subscribers, and revenue with minimal human intervention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {channels.map((channel, index) => (
            <ChannelCard 
              key={index} 
              {...channel} 
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 mb-6">
            These are just a few examples of what our AI platform can create. Your niche could be next!
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all border border-gray-700"
          >
            <FaYoutube className="mr-2 text-red-600" />
            Start Your AI YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection; 