import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/20 to-secondary/40 opacity-30"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3×</span> your content output?
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-gray-300 mb-10">
            Get started with our AI-powered video content automation and see results within days.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-accent text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1"
            >
              Book Call
            </Link>
            
            <Link 
              href="/contact?type=proposal" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get Proposal
            </Link>
          </div>
          
          {/* Trust badge */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-3">Trusted by creators with</p>
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <span className="font-bold text-white text-lg">900M+</span>
              <span className="text-gray-300">combined views</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner; 