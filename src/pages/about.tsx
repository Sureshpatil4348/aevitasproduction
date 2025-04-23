import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaLightbulb, FaRocket, FaUsers, FaGlobe, FaChevronDown, FaStar, FaHandshake, FaArrowRight, FaPlay } from 'react-icons/fa';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Layout>
      {/* Our Story Section - Starting page content here */}
      <section className="pt-32 pb-20 bg-gray-950 text-white relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              x: [-100, -80, -100], 
              y: [50, 70, 50] 
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute right-0 top-32 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
            animate={{ 
              x: [100, 120, 100], 
              y: [0, 20, 0] 
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="flex flex-col-reverse md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4"
              >
                OUR JOURNEY
              </motion.div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Revolutionizing</span> Video Content Creation
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  Aevitas was founded in 2023 by a team of AI enthusiasts, video producers, and digital marketers who recognized a significant gap in the content creation market: the ability to produce high-quality video content at scale.
                </p>
                <p>
                  After years of working with brands struggling to maintain consistent video output due to high costs and production complexities, we developed an AI-powered solution that automates the most time-consuming aspects of video production while maintaining exceptional quality.
                </p>
                <motion.div
                  className="mt-10 inline-flex items-center gap-2 text-primary font-medium cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <Link href="/services" className="flex items-center">
                    <span>See our AI-powered services</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* YouTube Video Section */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-gray-800 aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/Y6ZDDlXuciM" 
                  title="Aevitas AI Video Production"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                
                {/* Gradient overlay for the bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-2">See the Aevitas AI Difference</h3>
                  <p className="text-gray-300">Discover how our AI-powered video creation process can transform your brand's digital presence.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section - Enhanced with 3D-like effects */}
      <section className="bg-gray-900 py-24 relative overflow-hidden" ref={missionRef}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          
          {/* Animated gradient */}
          <motion.div 
            className="absolute w-full h-[150%] bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            style={{ y: parallaxY1 }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">OUR MISSION</span>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Democratizing <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Video Content</span> Creation
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mx-auto max-w-3xl">
                We leverage cutting-edge AI technology to democratize video content creation, enabling brands of all sizes to produce engaging, high-quality video at scale.
              </p>
            </motion.div>

            <motion.div
              className="mt-16 grid gap-10 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
            >
              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg border border-gray-700 transform hover:translate-y-[-10px] transition-transform duration-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-white">
                  <FaLightbulb size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly push the boundaries of what's possible with AI-powered content creation, staying at the forefront of technological advancements to deliver cutting-edge solutions for our clients.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg border border-gray-700 transform hover:translate-y-[-10px] transition-transform duration-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/60 text-white">
                  <FaRocket size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Empowerment</h3>
                <p className="text-gray-300 leading-relaxed">
                  We empower businesses to tell their stories through compelling video content, without the traditional barriers of high costs and complex production processes that have limited creativity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced with card animations */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden" ref={valuesRef}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute w-[120%] h-[120%] -inset-[10%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"
            style={{ scale }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">OUR PRINCIPLES</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-gradient bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Core Values</span> That Drive Us
              </h2>
              <p className="text-xl text-gray-300">
                These principles define how we work and what we stand for as a company.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
          >
            {[
              {
                title: "Quality First",
                icon: <FaStar />,
                color: "from-blue-500 to-primary",
                description: "We never compromise on the quality of our content. Even with AI automation, we ensure that every video meets our high standards."
              },
              {
                title: "Customer Success",
                icon: <FaHandshake />,
                color: "from-purple-500 to-secondary",
                description: "Our team is committed to helping you achieve your digital marketing goals."
              },
              {
                title: "Continuous Innovation",
                icon: <FaLightbulb />,
                color: "from-pink-500 to-red-500",
                description: "Our team constantly explores new technologies and methodologies to improve our services and stay ahead of the curve."
              },
              {
                title: "Global Perspective",
                icon: <FaGlobe />,
                color: "from-green-500 to-teal-500",
                description: "Our international team brings diverse perspectives and cultural insights that enrich our content and approach."
              },
              {
                title: "Ethical AI",
                icon: <FaRocket />,
                color: "from-cyan-500 to-blue-500",
                description: "Our company is committed to using AI responsibly, with transparency about AI-generated content and respect for intellectual property."
              },
              {
                title: "Results-Driven",
                icon: <FaUsers />,
                color: "from-amber-500 to-orange-500",
                description: "We focus on delivering measurable results for our clients, with a data-driven approach to content strategy."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group"
                custom={index}
                whileHover={{ y: -10 }}
              >
                <div className="h-full rounded-xl bg-gray-900/80 backdrop-blur-sm p-8 border border-gray-800 shadow-lg hover:shadow-xl hover:border-gray-700 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`}></div>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${value.color} text-white`}>
                    {value.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section - With parallax scrolling */}
      <section className="bg-gray-900 py-24 relative overflow-hidden" ref={teamRef}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/0 via-primary/5 to-gray-900/0"
            style={{ y: parallaxY2 }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">OUR PEOPLE</span>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">
                Global <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Talent</span> Network
              </h2>
              <p className="text-xl text-gray-300">
                Aevitas brings together exceptional talent from around the world to deliver video content that performs.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-12 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
          >
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start gap-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-dots.svg')] opacity-5"></div>
              <div className="h-24 w-24 flex-shrink-0 relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-md"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/20">
                  <FaUsers size={42} />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white">Creative Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI specialists, scriptwriters, and creative directors ensure that each video tells a compelling story that resonates with your target audience. They work in synergy to blend technical precision with human creativity.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 w-10 rounded-full bg-primary/30"></div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start gap-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-lg border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-dots.svg')] opacity-5"></div>
              <div className="h-24 w-24 flex-shrink-0 relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary opacity-20 blur-md"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20 text-secondary border border-secondary/20">
                  <FaGlobe size={42} />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white">Production Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our global editing team in the Philippines and India works around the clock to ensure fast turnaround and consistent quality across all projects. This 24/7 workflow allows us to deliver projects efficiently and effectively.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 w-10 rounded-full bg-secondary/30"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with enhanced visual effects */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient-slow"></div>
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
            <div className="relative p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-xl">
                Join the many brands that have transformed their video content strategy with Aevitas and see the difference our AI-powered approach can make.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-10 py-4 font-bold text-primary transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 