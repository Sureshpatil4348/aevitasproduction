import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { servicesData } from '@/utils/servicesData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaPenFancy, FaRobot, FaEdit, 
  FaShareSquare, FaChartLine, FaTags, 
  FaArrowRight, FaChevronDown, FaLightbulb,
  FaPlay, FaPlus
} from 'react-icons/fa';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Function to render the right icon based on iconName
  const renderIcon = (iconName: string, size: string = "h-36 w-36") => {
    switch (iconName) {
      case 'pen':
        return <FaPenFancy className={size} />;
      case 'robot':
        return <FaRobot className={size} />;
      case 'edit':
        return <FaEdit className={size} />;
      case 'share':
        return <FaShareSquare className={size} />;
      case 'chart':
        return <FaChartLine className={size} />;
      case 'tags':
        return <FaTags className={size} />;
      default:
        return <FaPenFancy className={size} />;
    }
  };

  const heroVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-24 pb-20 flex items-center justify-center bg-gray-950 text-white overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          
          {/* Animated gradients */}
          <motion.div 
            className="absolute w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[120px]"
            style={{ 
              x: -300, 
              y: -350,
              zIndex: 0
            }}
            animate={{ 
              x: [-300, -280, -300],
              y: [-350, -320, -350],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-[100px]"
            style={{ 
              x: 300, 
              y: 300,
              zIndex: 0
            }}
            animate={{ 
              x: [300, 320, 300],
              y: [300, 320, 300],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse",
            }}
          />
          
          {/* Particle overlay */}
          <div className="absolute inset-0 bg-gray-950/70"></div>
        </div>

        <div className="container relative z-10 px-4">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Main heading with typing effect */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10"
            >
              <motion.h1 
                className="font-heading text-6xl md:text-8xl font-bold leading-tight mb-6"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Redefine
                </span>
                <span className="block">Your Content</span>
              </motion.h1>
            </motion.div>
            
            {/* Video play button */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative mx-auto w-20 h-20 mb-12 cursor-pointer group z-20"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-md group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative z-10 w-full h-full rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center">
                <FaPlay className="text-white text-xl ml-1 group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping-slow bg-primary/20"></div>
            </motion.div>
            
            <motion.p 
              className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Our AI-powered approach transforms ordinary content into extraordinary video experiences that captivate audiences and drive real business results.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link href="/contact" className="relative overflow-hidden group rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10 px-8 py-4 text-white font-bold flex items-center">
                  Get Started
                  <motion.span 
                    initial={{ x: 0 }} 
                    whileHover={{ x: 5 }}
                    className="ml-2"
                  >
                    <FaArrowRight />
                  </motion.span>
                </div>
              </Link>
              
              <a 
                href="#service-showcase" 
                className="px-8 py-4 bg-gray-800/50 text-white hover:bg-gray-800 transition-all duration-300 rounded-full flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('service-showcase');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Services
                <span className="ml-2">
                  <FaChevronDown />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section id="service-showcase" className="relative py-24 bg-gray-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-primary/10 to-secondary/10 blur-[150px] z-0"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-secondary/10 to-accent/10 blur-[150px] z-0"></div>
        </div>
        
        <div className="container relative z-10 px-4">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-20">
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">End-to-End</span>
                <span className="block text-white">Video Solutions</span>
              </h2>
              <p className="text-xl text-gray-300">
                From concept to distribution, our AI-driven workflow ensures high-quality, engaging content at scale.
              </p>
            </motion.div>
            
            {/* Services Tab */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-3">
                {[0, 1].map((tab) => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                  >
                    {tab === 0 ? 'Our Services' : 'Results'}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Services Cards - Horizontal Scrolling on Mobile */}
          <div className="relative">
            <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
              <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory">
                {servicesData.map((service, index) => {
                  const [cardRef, cardInView] = useInView({ 
                    triggerOnce: true,
                    threshold: 0.1 
                  });
                  
                  return (
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={cardInView ? "visible" : "hidden"}
                      key={service.id}
                      ref={cardRef}
                      className="min-w-[280px] bg-gray-800 rounded-xl border border-gray-700 overflow-hidden snap-center md:snap-align-none hover:border-primary/50 transition-all duration-500 group relative"
                    >
                      {/* Top highlight bar with gradient */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${
                        service.id === 'scripting' ? 'from-blue-500 to-primary' :
                        service.id === 'avatars' ? 'from-purple-500 to-secondary' :
                        service.id === 'editing' ? 'from-pink-600 to-pink-400' :
                        service.id === 'distribution' ? 'from-green-600 to-green-400' :
                        service.id === 'analytics' ? 'from-cyan-600 to-cyan-400' :
                        'from-violet-600 to-violet-400'
                      }`}></div>
                      
                      {/* Icon and content */}
                      <div className="p-6">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                          service.id === 'scripting' ? 'bg-blue-500/10 text-blue-500' :
                          service.id === 'avatars' ? 'bg-purple-500/10 text-purple-500' :
                          service.id === 'editing' ? 'bg-pink-500/10 text-pink-500' :
                          service.id === 'distribution' ? 'bg-green-500/10 text-green-500' :
                          service.id === 'analytics' ? 'bg-cyan-500/10 text-cyan-500' :
                          'bg-violet-500/10 text-violet-500'
                        }`}>
                          {renderIcon(service.iconName, "h-7 w-7")}
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-3 ${service.colorClass}`}>{service.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                        
                        {/* Features */}
                        <ul className="space-y-2">
                          {generateServiceFeatures(service.id).slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className={`mr-2 mt-1 h-3 w-3 flex-shrink-0 ${service.colorClass}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Results Tab Content */}
            <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
              <div className="space-y-10">
                {/* Key metrics */}
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
                
                {/* Additional metrics */}
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
                
                {/* Client Success */}
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
                
                {/* Case study preview */}
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
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full inline-block hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Creative <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how we transform your ideas into engaging video content
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-0">
              {[
                { 
                  step: "01", 
                  title: "Discovery & Strategy", 
                  description: "We analyze your brand, audience, and goals to develop a tailored video strategy.",
                  icon: <FaLightbulb className="w-8 h-8" />
                },
                { 
                  step: "02", 
                  title: "AI-Powered Content Creation", 
                  description: "Our AI technology generates scripts, avatars, and visual elements aligned with your brand.",
                  icon: <FaRobot className="w-8 h-8" />
                },
                { 
                  step: "03", 
                  title: "Global Production Team", 
                  description: "Our editors perfect your content with professional transitions, effects, and branding.",
                  icon: <FaEdit className="w-8 h-8" />
                },
                { 
                  step: "04", 
                  title: "Multi-Platform Distribution", 
                  description: "We optimize and distribute your content across all major platforms to maximize reach.",
                  icon: <FaShareSquare className="w-8 h-8" />
                },
                { 
                  step: "05", 
                  title: "Analytics & Optimization", 
                  description: "Continuous performance tracking ensures your content strategy evolves and improves.",
                  icon: <FaChartLine className="w-8 h-8" />
                }
              ].map((item, index) => {
                const [itemRef, itemInView] = useInView({ threshold: 0.2, triggerOnce: true });
                
                return (
                  <div 
                    key={index} 
                    ref={itemRef} 
                    className="flex flex-col md:grid md:grid-cols-7 mb-16"
                  >
                    <motion.div 
                      className={`md:col-span-3 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-2'}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className={`bg-gray-900 p-6 rounded-xl border border-gray-800 w-full max-w-md ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                            {item.icon}
                          </div>
                          <span className="text-3xl font-bold text-white">{item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="hidden md:flex md:col-span-1 justify-center items-center relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={itemInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center z-10">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    <div className={`md:col-span-3 hidden md:block ${index % 2 === 0 ? 'md:order-1' : ''}`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Success stories from brands that transformed their content strategy</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                quote: "Aevitas transformed our digital presence with AI-powered videos. Our engagement has increased by 300% since we started working together.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechForward",
                image: "/images/testimonial1.jpg"
              },
              {
                quote: "The quality and consistency of content is remarkable. Their AI approach delivers better results than our previous traditional video production.",
                author: "Michael Chen",
                role: "CEO, GrowthMetrics",
                image: "/images/testimonial2.jpg"
              },
              {
                quote: "We're generating more qualified leads than ever before through our YouTube channel that Aevitas manages for us. Worth every penny.",
                author: "Jessica Williams",
                role: "VP of Sales, SalesPro Solutions",
                image: "/images/testimonial3.jpg"
              }
            ].map((testimonial, index) => {
              const [testimonialRef, testimonialInView] = useInView({ threshold: 0.1, triggerOnce: true });
              
              return (
                <motion.div
                  key={index}
                  ref={testimonialRef}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute top-6 left-6 text-7xl opacity-20 text-primary">"</div>
                  <div className="relative z-10">
                    <p className="text-lg mb-6 text-gray-300">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden flex-shrink-0 mr-4">
                        {/* You would replace this with actual client images */}
                        <div className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/60"></div>
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container">
          <motion.div 
            className="rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto py-20 px-8 text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Video Strategy?
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join successful brands who've 10x'd their online presence and lead generation with our complete AI video solution.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Helper function to generate service-specific features
const generateServiceFeatures = (serviceId: string) => {
  switch (serviceId) {
    case 'scripting':
      return [
        'AI-powered script generation based on your brand voice',
        'SEO-optimized content for maximum discoverability',
        'Content tailored to your target audience',
        'Multiple revisions and customization options',
        'Scripts optimized for different platforms',
      ];
    case 'avatars':
      return [
        'Realistic AI avatars that represent your brand',
        'Multiple voice options and languages',
        'Consistent appearance across all videos',
        'Natural expressions and gestures',
        'Custom avatar creation available',
      ];
    case 'editing':
      return [
        '24/7 global editing team for quick turnarounds',
        'Professional transitions and effects',
        'Color correction and audio enhancement',
        'Brand elements and logo integration',
        'Format optimization for each platform',
      ];
    case 'distribution':
      return [
        'Automated publishing across all major platforms',
        'Optimal posting schedules based on analytics',
        'Platform-specific formatting and optimization',
        'Hashtag strategy and metadata enhancement',
        'Cross-platform promotion strategies',
      ];
    case 'analytics':
      return [
        'Comprehensive performance tracking across platforms',
        'Engagement and conversion metrics',
        'Audience demographics and behavior insights',
        'Content optimization recommendations',
        'Regular reporting and strategy adjustments',
      ];
    case 'growth':
      return [
        'Scale your content without scaling your team',
        'Build authority in your industry',
        'Generate leads on autopilot',
        'Convert viewers into customers',
        'Sustainable growth through consistent content',
      ];
    default:
      return [];
  }
};

export default ServicesPage; 