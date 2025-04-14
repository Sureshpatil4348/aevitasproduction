import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaEdit, FaVideo, FaChartLine, FaCode } from 'react-icons/fa';
import Image from 'next/image';

// Feature data
const features = [
  {
    id: 1,
    icon: <FaRobot className="text-primary text-3xl" />,
    title: 'AI Content Generation',
    description: 'Our advanced AI algorithms create engaging scripts tailored to your channel\'s niche, ensuring uniqueness and authenticity.',
    animation: { delay: 0.1 }
  },
  {
    id: 2,
    icon: <FaEdit className="text-secondary text-3xl" />,
    title: 'Professional Voice-Overs',
    description: 'Natural-sounding AI voices bring your content to life with perfect pronunciation and emotionally resonant delivery.',
    animation: { delay: 0.2 }
  },
  {
    id: 3,
    icon: <FaVideo className="text-accent text-3xl" />,
    title: 'Automatic Video Creation',
    description: 'Our AI selects perfect visuals and assembles complete videos with professional transitions and effects.',
    animation: { delay: 0.3 }
  },
  {
    id: 4,
    icon: <FaChartLine className="text-primary text-3xl" />,
    title: 'SEO Optimization',
    description: 'Every video is automatically optimized for YouTube\'s algorithm to maximize visibility and growth potential.',
    animation: { delay: 0.4 }
  },
  {
    id: 5,
    icon: <FaCode className="text-secondary text-3xl" />,
    title: 'Complete Automation',
    description: 'Set your publishing schedule and let Aevitas handle everything - from content creation to posting and optimization.',
    animation: { delay: 0.5 }
  }
];

const FeatureShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden" id="features">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl top-1/4 -left-1/4"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">The Aevitas Magic in Action</h2>
          <p className="text-xl text-gray-300">
            See how our AI-powered system transforms your ideas into fully produced videos ready for publication.
          </p>
        </motion.div>
        
        {/* Main feature showcase area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features list */}
          <div className="space-y-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="flex p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: feature.animation.delay }}
              >
                <div className="flex-shrink-0 mr-5 p-3 bg-gray-800 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Visualization */}
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform rotate-3 scale-105 blur-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/ai-workflow.png"
                alt="Aevitas AI Workflow"
                width={800}
                height={450}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-5 rounded-full bg-primary/90 text-white hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Process steps indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-flex bg-gray-900/70 backdrop-blur-md rounded-full p-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step} 
                className={`w-3 h-3 rounded-full mx-2 ${step <= 3 ? 'bg-primary' : 'bg-gray-700'}`}
              ></div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a 
            href="#pricing" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/25"
          >
            Start Creating
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 