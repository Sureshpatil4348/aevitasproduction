import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gray-950 text-white">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/portfolio-showreel.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img src="/images/portfolio-hero-fallback.jpg" alt="Medblen video production showreel" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline with Kinetic Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading">
            <span className="inline-block">
              <motion.span
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Automation‑Powered
              </motion.span>
            </span>{" "}
            <span className="inline-block">
              <motion.span
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block"
              >
                Storytelling,
              </motion.span>
            </span>{" "}
            <span className="inline-block">
              <motion.span
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
              >
                Delivered at Scale.
              </motion.span>
            </span>
          </h1>
          
          {/* Sub-headline */}
          <motion.h3 
            className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We help businesses & creators multiply output with AI‑driven editing, ideation and distribution.
          </motion.h3>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary CTA */}
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1">
              Book a Discovery Call
            </Link>
            
            {/* Secondary CTA */}
            <button 
              onClick={() => {
                // Logic to open lightbox with showreel would go here
                console.log('Open showreel');
              }}
              className="btn-ghost px-8 py-4 rounded-full text-lg font-bold border-2 border-white/20 hover:border-white/40 backdrop-blur-sm bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Watch Showreel
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 