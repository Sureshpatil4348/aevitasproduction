import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pricingData } from '@/utils/pricingData';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const PricingPackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section py-24 bg-gray-900 text-white" id="pricing">
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-4">Elevate Your Brand's Video Presence</h2>
          <p className="text-lg text-gray-300">
            Select the perfect package to elevate your brand's video presence across all platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pricingData.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`relative overflow-hidden rounded-xl bg-gray-800 shadow-lg border ${
                pkg.isPopular ? 'md:scale-110 border-primary border-2 z-10' : 'border-gray-700'
              } transition-all`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 }}}
            >
              {pkg.isPopular && (
                <div className="absolute right-0 top-0 bg-primary text-white px-4 py-1 text-xs uppercase font-bold tracking-wider z-10">
                  Best Value
                </div>
              )}

              {/* Package header */}
              <div className={`p-6 ${pkg.isPopular ? 'bg-gradient-to-br from-primary/30 to-secondary/30' : pkg.id === 'enterprise' ? 'bg-purple-900/20' : 'bg-gray-700/20'}`}>
                <h3 className={`text-2xl font-bold mb-1 ${pkg.isPopular ? 'text-white' : ''}`}>{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.isPopular ? 'text-white' : 'text-gray-300'} h-12`}>{pkg.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className={`text-3xl font-bold ${pkg.isPopular ? 'text-primary' : ''}`}>{pkg.price}</span>
                  <span className="text-sm ml-2 text-gray-400">/month</span>
                </div>
              </div>

              {/* Package features */}
              <div className="p-6">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={`/contact?plan=${pkg.id}`}
                    className={`flex items-center justify-center w-full rounded-md px-6 py-3 text-center font-medium transition-all text-white ${
                      pkg.isPopular
                        ? 'bg-primary hover:bg-primary/90'
                        : pkg.id === 'enterprise'
                          ? 'bg-purple-700 hover:bg-purple-800'
                          : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400">
            Need a custom solution? <Link href="/contact" className="text-primary hover:underline font-medium">Contact us</Link> for a tailored package.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPackages; 