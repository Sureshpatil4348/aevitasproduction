import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { processSteps } from '@/utils/processData';
import { 
  FaBook, FaRegFileAlt, FaRobot, FaVideo, 
  FaTv, FaShareAlt
} from 'react-icons/fa';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to render the right icon based on iconName
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'book':
        return <FaBook className="h-8 w-8 text-primary" />;
      case 'file':
        return <FaRegFileAlt className="h-8 w-8 text-primary" />;
      case 'robot':
        return <FaRobot className="h-8 w-8 text-primary" />;
      case 'video':
        return <FaVideo className="h-8 w-8 text-primary" />;
      case 'tv':
        return <FaTv className="h-8 w-8 text-primary" />;
      case 'share':
        return <FaShareAlt className="h-8 w-8 text-primary" />;
      default:
        return <FaBook className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section className="section bg-gray-950 py-20" id="process">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-white">The </span>
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Medblen Magic</span>
            <span className="text-white"> in Action</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            From concept to cross-platform publishing, our AI-powered workflow creates engaging videos 
            that elevate your brand.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col items-start overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              {/* Step Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                {renderIcon(step.iconName)}
              </div>
              
              {/* Step Number */}
              <div className="absolute right-4 top-4 text-2xl font-bold text-gray-700">
                {step.number}.
              </div>

              {/* Step Content */}
              <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              
              {/* Learn More Link */}
              <div className="mt-auto pt-4">
                <button className="flex items-center text-primary hover:underline">
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="mb-3 text-xl font-bold text-white">Ready to 10x your brand presence with AI-powered videos?</h3>
          <p className="mb-6 text-gray-300">
            Our team manages everything from creation to publishing, letting you focus on your core business.
          </p>
          <a
            href="#contact"
            className="btn btn-primary inline-block"
          >
            Schedule a Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 