import React from 'react';
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
    <section className="section py-24 bg-gray-900 text-white relative overflow-hidden" id="team">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/world-map-dots.png')] bg-no-repeat bg-center bg-contain"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-5xl font-bold mb-4">Meet Our International Team</h2>
          <p className="text-xl text-gray-300 mb-16">
            Our talented editors in the Philippines and India, along with creative strategists worldwide, 
            work 24/7 to deliver exceptional content.
          </p>
        </motion.div>

        {/* World Map with Team Locations */}
        <motion.div
          className="relative mx-auto max-w-4xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-12 relative">
            {/* The wavy connector line */}
            <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className="flex justify-between items-center w-full max-w-4xl px-8 z-10">
              {/* USA Location */}
              <motion.div
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4">
                  <span className="text-white font-bold">USA</span>
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
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 mb-4">
                  <span className="text-white font-bold">India</span>
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
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4">
                  <span className="text-white font-bold">PH</span>
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
            className="text-center text-gray-300 bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed">
              Our global team of creative professionals works around the clock to deliver exceptional content. With talented editors in the Philippines and India, along with AI specialists and strategists in the USA, we maintain a 24/7 workflow that ensures rapid turnaround and consistent quality.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-12">
          <motion.h3
            className="text-center text-3xl font-bold mb-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h3>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            {testimonialData.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/20 to-transparent w-48 h-48 rounded-bl-full"></div>
                <FaQuoteLeft className="absolute top-6 left-6 text-3xl text-primary/30" />
                <div className="p-8 pt-12">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                  </div>
                  <p className="text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary p-[3px]">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTeam; 