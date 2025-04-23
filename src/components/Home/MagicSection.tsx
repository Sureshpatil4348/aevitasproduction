import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaYoutube, FaEdit, FaUpload, FaMagic, FaPlay } from 'react-icons/fa';
import Link from 'next/link';

import { useState } from 'react';

const MagicSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const steps = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Content Generation",
      description: "Our AI analyzes trending topics and generates engaging scripts tailored to your niche."
    },
    {
      icon: <FaEdit className="w-6 h-6" />,
      title: "Scriptwriting & Editing",
      description: "Scripts are automatically refined for engagement, SEO, and your brand's voice."
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      title: "Video Production",
      description: "AI transforms scripts into full videos with visuals, transitions, and effects."
    },
    {
      icon: <FaUpload className="w-6 h-6" />,
      title: "Automated Publishing",
      description: "Videos are scheduled and published with optimized titles, descriptions, and tags."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="magic">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -right-20 -top-20"></div>
        <div className="absolute w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full -left-20 -bottom-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
              <FaMagic className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Aevitas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Magic</span> in Action
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our end-to-end AI system automates every step of YouTube content creation, from ideation to publication.
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="relative mb-24">
          {/* Removed connecting lines to match portfolio page */}
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                {/* Step number indicator */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gradient-to-r from-primary to-secondary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shadow-lg z-10 hidden md:flex">
                  {index + 1}
                </div>
                
                {/* Step card */}
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="bg-gray-800 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Demo video section */}
        <motion.div 
          className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              {!showVideo ? (
                <>
                  <img 
                    src="/images/demo-thumbnail.jpg" 
                    alt="Aevitas AI Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setShowVideo(true)}
                      className="bg-white/95 hover:bg-white transition-colors duration-300 rounded-full p-5 shadow-xl"
                      aria-label="Play demo video"
                    >
                      <FaPlay className="w-6 h-6 text-primary" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dVlC9Uz7E08?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full absolute inset-0 rounded-2xl"
                ></iframe>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pt-24">
                <span className="text-white font-medium text-sm px-3 py-1 bg-primary/80 rounded-full">Watch Demo</span>
                <h3 className="text-xl font-bold text-white mt-2">See Aevitas AI generate a video from scratch</h3>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Experience the Full Process</h3>
              <p className="text-gray-400 mb-8">
                Watch as Aevitas AI takes a simple topic and transforms it into a fully-produced, ready-to-publish 
                YouTube video in a matter of minutes, not days or weeks.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Topic research", "Script generation", "Voice synthesis", "Visual creation", "Editing & assembly"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="#pricing" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                Start Creating Videos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicSection; 