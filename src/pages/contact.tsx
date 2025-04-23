import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaUserAlt
} from 'react-icons/fa';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: 'default',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState('');
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: 'default',
      });
    }, 1500);
  };

  // Animation variants
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

  const inputFieldVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 15px rgba(124, 58, 237, 0.3)" },
    idle: { scale: 1, boxShadow: "0 0 0px rgba(124, 58, 237, 0)" }
  };

  return (
    <Layout>
      {/* Hero Section with 3D-like elements */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          
          {/* Animated gradient blobs */}
          <motion.div 
            className="absolute w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px]"
            animate={{ 
              x: ['-20%', '-15%', '-20%'],
              y: ['-30%', '-25%', '-30%']
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div 
            className="absolute right-0 bottom-0 w-[45rem] h-[45rem] rounded-full bg-secondary/5 blur-[100px]"
            animate={{ 
              x: ['20%', '15%', '20%'],
              y: ['30%', '25%', '30%']
            }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Particle field */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
                animate={{
                  y: [0, Math.random() * -30 - 10],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4"
              >
                CONTACT US
              </motion.div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Let's Create</span>
                <br /> Something <span className="relative inline-block">
                  Amazing
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                  ></motion.span>
                </span>
              </h1>
              
              <motion.p 
                className="mt-6 text-xl text-gray-300 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ready to transform your video content strategy? Our team is here to help you create engaging AI-powered videos that elevate your brand.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-bold transition-all transform hover:-translate-y-1">
                  Get Started <FaArrowRight className="ml-2" />
                </a>
                
                <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-transparent border border-gray-700 hover:border-primary text-white font-medium transition-all">
                  <FaPhone className="mr-2" /> (555) 123-4567
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm"></div>
                
                <motion.div 
                  className="relative p-8 md:p-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center mb-8">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                      <FaGlobe className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Global Service</h3>
                      <p className="text-gray-400">24/7 Support Available</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {[
                      { 
                        icon: <FaPhone />, 
                        title: "Call Us", 
                        content: "(555) 123-4567", 
                        highlight: "Available 9am-6pm PST"
                      },
                      { 
                        icon: <FaEnvelope />, 
                        title: "Email Us", 
                        content: "contact@aevitas.ai", 
                        highlight: "24-hour response time"
                      },
                      { 
                        icon: <FaMapMarkerAlt />, 
                        title: "Visit Us", 
                        content: "123 Innovation Way, San Francisco", 
                        highlight: "By appointment only"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      >
                        <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-gray-300">{item.content}</p>
                          <p className="mt-1 text-xs text-primary">{item.highlight}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] rounded-full border border-gray-800 -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[140%] max-h-[140%] rounded-full border border-gray-800 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section id="contact-form" className="py-32 bg-gray-950 text-white relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <motion.div
            className="absolute top-[10%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-[100px]"
            style={{ y: y1 }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-secondary/5 blur-[100px]"
            style={{ y: y2 }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-lg text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fill out the form below and our team will get back to you within 24 hours.
            </motion.p>
          </div>
        
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-8 rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900/95"></div>
              <div className="relative p-8 md:p-10 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm shadow-xl">
                {formSubmitted ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center py-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    >
                      <FaCheckCircle className="text-primary text-5xl" />
                    </motion.div>
                    <h3 className="mb-3 text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="mb-8 text-center text-gray-300 max-w-md">
                      Thank you for contacting us. One of our team members will get back to you within 24 hours.
                    </p>
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-bold transition-all"
                      whileHover={{ y: -3 }}
                      onClick={() => setFormSubmitted(false)}
                    >
                      <FaPaperPlane className="mr-2" /> Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                          variants={inputFieldVariants}
                          animate={activeField === 'name' ? 'focused' : 'idle'}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-primary">
                            <FaUserAlt size={16} />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={handleBlur}
                            required
                            className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 pl-16 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Full Name *"
                          />
                        </motion.div>
                        
                        <motion.div
                          variants={inputFieldVariants}
                          animate={activeField === 'email' ? 'focused' : 'idle'}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-primary">
                            <FaEnvelope size={16} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            required
                            className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 pl-16 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Email Address *"
                          />
                        </motion.div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                          variants={inputFieldVariants}
                          animate={activeField === 'company' ? 'focused' : 'idle'}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-primary">
                            <FaGlobe size={16} />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            onFocus={() => handleFocus('company')}
                            onBlur={handleBlur}
                            className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 pl-16 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Company Name"
                          />
                        </motion.div>
                        
                        <motion.div
                          variants={inputFieldVariants}
                          animate={activeField === 'phone' ? 'focused' : 'idle'}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-primary">
                            <FaPhone size={16} />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            onFocus={() => handleFocus('phone')}
                            onBlur={handleBlur}
                            className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 pl-16 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Phone Number"
                          />
                        </motion.div>
                      </div>
                      
                      <motion.div
                        variants={inputFieldVariants}
                        animate={activeField === 'service' ? 'focused' : 'idle'}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          onFocus={() => handleFocus('service')}
                          onBlur={handleBlur}
                          className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                        >
                          <option value="default">Select a service you're interested in</option>
                          <option value="youtube">YouTube Channel Creation</option>
                          <option value="video-content">Video Content Production</option>
                          <option value="ai-avatars">AI Avatars & Voiceovers</option>
                          <option value="distribution">Multi-Platform Distribution</option>
                          <option value="custom">Custom Package</option>
                        </select>
                        <div className="absolute right-4 top-5 text-gray-400">
                          <FaArrowRight size={16} />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        variants={inputFieldVariants}
                        animate={activeField === 'subject' ? 'focused' : 'idle'}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus('subject')}
                          onBlur={handleBlur}
                          required
                          className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Subject *"
                        />
                      </motion.div>

                      <motion.div
                        variants={inputFieldVariants}
                        animate={activeField === 'message' ? 'focused' : 'idle'}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => handleFocus('message')}
                          onBlur={handleBlur}
                          required
                          rows={5}
                          className="w-full rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Tell us about your project and requirements... *"
                        ></textarea>
                      </motion.div>

                      <motion.button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white font-bold transition-all"
                        whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <FaPaperPlane className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Side Information */}
            <motion.div 
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >              
              {/* Business Hours Card */}
              <motion.div 
                className="rounded-2xl p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(124, 58, 237, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                    <FaClock />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between items-center">
                    <span>Monday - Friday:</span>
                    <span className="font-medium text-white">9:00 AM - 6:00 PM PST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Saturday:</span>
                    <span className="font-medium text-white">10:00 AM - 2:00 PM PST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Sunday:</span>
                    <span className="font-medium text-white">Closed</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Connect with us card */}
              <motion.div 
                className="rounded-2xl p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(124, 58, 237, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Connect with Us</h3>
                <div className="grid grid-cols-3 gap-3">
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 text-gray-300 transition-colors hover:bg-primary/20 hover:text-primary"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <FaLinkedin size={24} className="mb-2" />
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 text-gray-300 transition-colors hover:bg-primary/20 hover:text-primary"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <FaTwitter size={24} className="mb-2" />
                    <span className="text-sm">Twitter</span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 text-gray-300 transition-colors hover:bg-primary/20 hover:text-primary"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <FaInstagram size={24} className="mb-2" />
                    <span className="text-sm">Instagram</span>
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Quick Link */}
              <motion.div 
                className="rounded-2xl overflow-hidden relative"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(124, 58, 237, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                <div className="relative p-6 backdrop-blur-sm border border-gray-800 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-3">Ready for a Demo?</h3>
                  <p className="text-gray-300 mb-4">See how our AI-powered video platform can transform your content strategy.</p>
                  <a 
                    href="/services" 
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold transition-all hover:bg-gray-100"
                  >
                    Schedule a Demo <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section with 3D-like effect */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Visit Our <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-gray-300 mb-12 text-lg">
              Our office is located in the heart of San Francisco's innovation district. Schedule an appointment to drop by and discuss your project in person.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ boxShadow: "0 30px 60px -12px rgba(124, 58, 237, 0.25)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-transparent to-gray-900 z-10"></div>
            
            {/* Map placeholder - replace with actual map embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-300">
              <div className="text-center max-w-lg p-8">
                <FaMapMarkerAlt size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">123 Innovation Way</h3>
                <p className="text-gray-300 mb-6">San Francisco, CA 94103</p>
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-700 text-white">
                  <span>Interactive map would be embedded here</span>
                </div>
              </div>
            </div>
            
            {/* Information overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Our Headquarters</h3>
                  <p className="text-gray-300">123 Innovation Way, San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 