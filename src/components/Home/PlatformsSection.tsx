import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaShareSquare, FaPlus, FaEdit } from 'react-icons/fa';

const PlatformsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const platforms = [
    {
      name: 'YouTube',
      description: 'Long-form content optimized for engagement and discovery',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
      iconBg: 'bg-red-600',
      hoverBorder: 'hover:border-red-600/50',
      hoverShadow: 'hover:shadow-red-600/20',
      animationType: 'ping',
    },
    {
      name: 'Instagram',
      description: 'Eye-catching Reels and Stories that capture attention',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400',
      hoverBorder: 'hover:border-pink-600/50',
      hoverShadow: 'hover:shadow-pink-600/20',
      animationType: 'pulse',
    },
    {
      name: 'TikTok',
      description: 'Viral shorts that engage Gen Z and younger audiences',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      iconBg: 'bg-black',
      animationColor: 'bg-cyan-400',
      hoverBorder: 'hover:border-cyan-400/50',
      hoverShadow: 'hover:shadow-cyan-400/20',
      animationType: 'ping',
    },
    {
      name: 'Twitter/X',
      description: 'Concise clips that drive conversation and sharing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      iconBg: 'bg-black',
      animationColor: 'bg-blue-400',
      hoverBorder: 'hover:border-blue-400/50',
      hoverShadow: 'hover:shadow-blue-400/20',
      animationType: 'pulse',
    },
    {
      name: 'Facebook',
      description: 'Engagement-focused videos for community building',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      iconBg: 'bg-blue-700',
      hoverBorder: 'hover:border-blue-700/50',
      hoverShadow: 'hover:shadow-blue-700/20',
      animationType: 'ping',
    },
    {
      name: 'LinkedIn',
      description: 'Professional content that builds thought leadership',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      iconBg: 'bg-blue-600',
      hoverBorder: 'hover:border-blue-600/50',
      hoverShadow: 'hover:shadow-blue-600/20',
      animationType: 'ping',
    },
  ];

  const benefits = [
    {
      title: '5x Greater Reach',
      description: 'Expand your audience across different demographics and platforms',
    },
    {
      title: '3x More Engagement',
      description: 'Different formats drive higher interaction rates across platforms',
    },
    {
      title: 'Maximize Content ROI',
      description: 'One content piece transforms into multiple formats, increasing your return',
    },
    {
      title: 'Algorithm-Optimized',
      description: 'Each platform version is tailored to perform with that platform\'s algorithm',
    },
  ];

  return (
    <section className="platforms-section relative py-24 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[120px] -top-1/4 right-0"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-[120px] -bottom-1/4 left-0"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Dominate Every Platform</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your content reaches audiences everywhere they are. We create and optimize your videos for all major social media platforms.
          </p>
        </motion.div>
        
        <motion.div
          className="platforms-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={`platform-card bg-gray-900 rounded-lg p-4 text-center border border-gray-800 ${platform.hoverBorder} hover:shadow-lg ${platform.hoverShadow} transition-all duration-300 group transform hover:-translate-y-1`}
              variants={itemVariants}
            >
              <div className={`platform-icon w-12 h-12 mx-auto mb-3 text-white ${platform.iconBg} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                <div className={`absolute inset-0 ${platform.animationColor || platform.iconBg} rounded-full animate-${platform.animationType} opacity-20`}></div>
                <div className="scale-75">
                  {platform.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
              <p className="text-gray-300 text-xs leading-tight">{platform.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="space-y-10 mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "300%", label: "Average Increase in Engagement" },
              { metric: "10x", label: "Faster Content Production" },
              { metric: "5x", label: "Return on Investment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-3 text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.metric}</h3>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Platform Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { platform: "YouTube", growth: "+215%", icon: <FaPlay className="w-5 h-5" /> },
                { platform: "Instagram", growth: "+180%", icon: <FaShareSquare className="w-5 h-5" /> },
                { platform: "TikTok", growth: "+320%", icon: <FaPlus className="w-5 h-5" /> },
                { platform: "LinkedIn", growth: "+150%", icon: <FaEdit className="w-5 h-5" /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <p className="font-bold text-white">{item.platform}</p>
                  <p className="text-primary font-bold">{item.growth}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Client Success Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Conversion Rate",
                  value: "12.5%",
                  improvement: "+350%",
                  description: "Average conversion rate improvement from video content"
                },
                { 
                  title: "Lead Generation",
                  value: "3x",
                  improvement: "+200%",
                  description: "Increase in qualified leads through optimized content"
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-1 bg-gradient-to-b from-primary to-secondary mr-4 rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white mr-2">{item.value}</span>
                      <span className="text-green-400 text-sm">{item.improvement}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-4">CASE STUDY</div>
                <h3 className="text-2xl font-bold mb-4">How TechForward Increased Leads by 400%</h3>
                <p className="text-gray-300 mb-6 text-sm">TechForward transformed their content strategy with our AI-powered video solution, resulting in dramatic improvements across all platforms.</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm text-gray-300">8 month campaign</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                    <span className="text-sm text-gray-300">4 platforms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                    <span className="text-sm text-gray-300">400% ROI</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-3">
                    <FaPlay className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm">Watch the case study</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PlatformsSection; 