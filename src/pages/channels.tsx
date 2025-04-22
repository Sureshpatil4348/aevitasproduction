import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { channelData } from '@/utils/channelData';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaPlay, FaYoutube, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const ChannelsPage = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1
      }
    }),
  };
  
  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    }
  };

  return (
    <Layout>
      {/* Channels Grid Section - Starting page content here */}
      <section className="pt-32 pb-20 bg-gray-950 text-white relative overflow-hidden" ref={ref}>
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute w-full h-[150%] bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            style={{ y: parallaxY }}
          />
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4"
              >
                YOUTUBE SHOWCASE
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Our <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Automated</span> Channels
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've used AI to build and automate five distinct channels, each with its own unique personality and target audience.
              </p>
              
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {channelData.map((channel, index) => (
              <motion.div
                key={channel.id}
                id={channel.id}
                custom={index}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <motion.div 
                  className="h-full rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl overflow-hidden relative group"
                  variants={cardHoverVariants}
                >
                  {/* Gradient top border */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
                  
                  {/* Channel image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay z-0"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                      <motion.img 
                        src={channel.logoSrc} 
                        alt={channel.name} 
                        className="h-32 w-auto object-contain filter drop-shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* YouTube badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full py-1 px-3 text-white text-sm z-20">
                      <FaYoutube className="text-red-600" />
                      <span>YouTube</span>
                    </div>
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {channel.name}
                    </h2>
                    <div className="mb-3 text-sm font-medium text-primary">
                      {channel.tagline}
                    </div>
                    <p className="mb-8 text-gray-300 leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <div className="mt-auto">
                      <a
                        href={channel.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <FaPlay className="mr-2" /> Watch Videos
                      </a>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-xl"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Videos Section with immersive design */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-gray-950 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">HIGHLIGHTED CONTENT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Featured</span> Videos
            </h2>
            <p className="text-xl text-gray-300">
              Take a look at some of our most engaging content across our channels.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {channelData.slice(0, 3).map((channel, index) => (
              <motion.div 
                key={`featured-${channel.id}`} 
                className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-primary/20 relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video group">
                  <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-all duration-300 z-10"></div>
                  <iframe
                    width="560"
                    height="315"
                    src={channel.videoUrl}
                    title={`Featured ${channel.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full object-cover absolute inset-0"
                  ></iframe>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaPlay className="text-white ml-1" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 border-t border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{channel.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{channel.tagline}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <FaYoutube className="text-red-500 text-sm" />
                      </div>
                      <span className="text-xs text-gray-400">YouTube</span>
                    </div>
                    
                    <motion.button 
                      className="text-primary flex items-center gap-1 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Watch Video</span>
                      <FaChevronRight className="text-xs" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-primary transition-colors"
            >
              <span>View all our YouTube content</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with enhanced visual appeal */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-slow"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/80"></div>
            
            <div className="relative p-16 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Want a Channel <span className="text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Like These?</span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-200 mb-12">
                  We can create and automate YouTube channels for your brand using the same AI-powered technology that drives our successful channels. Scale your content without scaling your team.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                  >
                    Get Started
                  </Link>
                  
                  <Link
                    href="/services"
                    className="px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    See Our Services
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/10 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white/10 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white/5 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ChannelsPage; 