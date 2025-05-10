import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonialData } from '@/utils/testimonialData';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const GlobalTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section py-16 sm:py-20 md:py-24 bg-gray-900 text-white relative overflow-hidden" id="team">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/world-map-dots.png')] bg-no-repeat bg-center bg-contain"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Meet Our Global Team</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-16">
          From script to screen — our global workflow delivers top-tier content, always ahead of the curve.
          </p>
        </motion.div>

        {/* World Map with Team Locations */}
        <motion.div
          className="relative mx-auto max-w-4xl mb-16 sm:mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-8 sm:mb-12 relative">
            {/* The wavy connector line */}
            <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden sm:block" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50" 
                stroke="url(#gradientLine)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradientLine" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#4361ee" />
                  <stop offset="50%" stopColor="#f72585" />
                  <stop offset="100%" stopColor="#7209b7" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Location points */}
            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl px-4 sm:px-8 z-10 gap-6 sm:gap-0">
              {/* USA Location */}
              <motion.div
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 mb-2 sm:mb-4">
                  <span className="text-white text-sm sm:text-base font-bold">USA</span>
                </div>
                <motion.span 
                  className="absolute w-full h-full rounded-full bg-blue-500 opacity-60"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              
              {/* India Location */}
              <motion.div
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 mb-2 sm:mb-4">
                  <span className="text-white text-sm sm:text-base font-bold">India</span>
                </div>
                <motion.span 
                  className="absolute w-full h-full rounded-full bg-pink-500 opacity-60"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
              
              {/* Philippines Location */}
              <motion.div
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 mb-2 sm:mb-4">
                  <span className="text-white text-sm sm:text-base font-bold">PH</span>
                </div>
                <motion.span 
                  className="absolute w-full h-full rounded-full bg-purple-500 opacity-60"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Team Description */}
          <motion.div
            className="text-center text-gray-300 bg-gray-800/40 backdrop-blur-sm p-5 sm:p-8 rounded-lg sm:rounded-xl border border-gray-700"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            At Medblen, we’ve built a powerhouse of world-class editors from India and the Philippines, guided by top-tier creative strategists and AI experts in the USA. Together, we operate 24/7 — blending trend-driven storytelling, precision editing, and lightning-fast turnarounds.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-8 sm:mt-12">
          <motion.h3
            className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h3>

          {/* Testimonials with React state for pagination */}
          <TestimonialSection />
        </div>
      </div>
    </section>
  );
};

// Testimonial Section with pagination as a separate component for cleaner state management
const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonialData.length / testimonialsPerPage);
  
  // Get current testimonials
  const getCurrentTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage;
    return testimonialData.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Testimonial Grid with consistent heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {getCurrentTestimonials().map((testimonial, index) => {
          // Use consistent styling across all cards
          const gradientStyle = index % 2 === 0 ? 
            'from-primary/20 to-transparent' : 
            'from-secondary/20 to-transparent';

          return (
            <motion.div
              key={testimonial.id}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-lg h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={`absolute top-0 right-0 bg-gradient-to-bl ${gradientStyle} w-36 sm:w-48 h-36 sm:h-48 rounded-bl-full`}></div>
              <FaQuoteLeft className={`absolute top-4 sm:top-6 left-4 sm:left-6 text-2xl sm:text-3xl ${index % 2 === 0 ? 'text-primary/30' : 'text-secondary/30'}`} />
              
              <div className="p-5 sm:p-8 pt-10 sm:pt-12 flex flex-col h-full">
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm sm:text-base mr-1" />
                  ))}
                </div>
                
                {/* Quote with proper width handling */}
                <div className="flex-grow">
                  <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Company/position footer */}
                <div className="border-t border-gray-700/50 pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <h4 className="text-lg sm:text-xl font-bold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Page Navigation - only show if we have more than one page */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          <motion.button
            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${currentPage === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-primary text-white'} transition-colors duration-300`}
            whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </motion.button>
          
          {/* Page indicators */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${i === currentPage ? 'bg-primary' : 'bg-gray-600'} hover:bg-primary/80 transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(i)}
              />
            ))}
          </div>
          
          <motion.button
            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${currentPage === totalPages - 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-primary text-white'} transition-colors duration-300`}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.95 } : {}}
            onClick={() => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default GlobalTeam; 