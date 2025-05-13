import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '@/utils/servicesData';
import Link from 'next/link';
import { 
  FaCheckCircle, FaPenFancy, FaRobot, FaEdit, 
  FaShareSquare, FaChartLine, FaTags,
  FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaLinkedin, FaFacebook
} from 'react-icons/fa';

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const toggleService = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  // Function to render the right icon based on iconName
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'pen':
        return <FaPenFancy className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'robot':
        return <FaRobot className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'edit':
        return <FaEdit className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'share':
        return <FaShareSquare className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'chart':
        return <FaChartLine className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'tags':
        return <FaTags className="h-5 w-5 sm:h-6 sm:w-6" />;
      default:
        return <FaPenFancy className="h-5 w-5 sm:h-6 sm:w-6" />;
    }
  };

  const getIconBgColor = (id: string) => {
    switch (id) {
      case 'scripting':
        return 'bg-blue-600/20';
      case 'avatars':
        return 'bg-purple-600/20';
      case 'editing':
        return 'bg-pink-500/20';
      case 'distribution':
        return 'bg-green-500/20';
      case 'analytics':
        return 'bg-cyan-500/20';
      case 'growth':
        return 'bg-violet-500/20';
      default:
        return 'bg-blue-600/20';
    }
  };

  const getIconColor = (id: string) => {
    switch (id) {
      case 'scripting':
        return 'text-blue-500';
      case 'avatars':
        return 'text-purple-500';
      case 'editing':
        return 'text-pink-500';
      case 'distribution':
        return 'text-green-500';
      case 'analytics':
        return 'text-cyan-500';
      case 'growth':
        return 'text-violet-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <section className="section bg-gray-950 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-2/3 h-1/2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -top-1/4 -right-1/4"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl -bottom-1/4 -left-1/4"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold">
            10x Your Brand with AI Video Production
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300">
          From scripting to publishing, we handle every part of your content - 
          powered by AI and optimized for scale. Publish faster, grow smarter, and win across every platform
          </p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-800 transform hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div className={`${getIconBgColor(service.id)} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 ${getIconColor(service.id)}`}>
                {renderIcon(service.iconName)}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                {service.description}
              </p>
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleService(service.id);
                }}
                className="text-primary text-sm sm:text-base font-medium hover:underline flex items-center"
              >
                See benefits
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Built to Dominate Every Major Platform
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 items-center">
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-red-600/30">
              <FaYoutube size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">YouTube</span>
            </div>
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-pink-500/30">
              <FaInstagram size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Instagram</span>
            </div>
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-cyan-400/30">
              <FaTiktok size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">TikTok</span>
            </div>
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-blue-400 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-blue-400/30">
              <FaTwitter size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Twitter</span>
            </div>
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-blue-600/30">
              <FaLinkedin size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
            </div>
            <div className="platform-icon w-10 h-10 sm:w-14 sm:h-14 text-white bg-blue-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-125 group shadow-lg shadow-blue-700/30">
              <FaFacebook size={20} className="sm:text-2xl" />
              <span className="absolute mt-12 sm:mt-16 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Facebook</span>
            </div>
          </div>
        </motion.div>

        {/* CTA section hidden per request
        <motion.div
          className="mt-10 sm:mt-16 rounded-lg sm:rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-5 sm:p-8 text-center hover:border-primary/30 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-white">Ready to 10x Your Growth with AI-Powered Content?
          </h3>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-300">
          Join leading brands using our all-in-one AI video system to scale visibility, leads, and revenue — faster than ever.
          </p>
          <Link href="/services/" className="btn btn-primary">
            Explore All Services
          </Link>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default ServicesOverview;