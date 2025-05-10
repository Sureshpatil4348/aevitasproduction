import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaCrown } from 'react-icons/fa';
import Link from 'next/link';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for creators just getting started",
      price: 99,
      frequency: "/month",
      features: [
        { name: "1 YouTube Channel", included: true },
        { name: "4 Videos Per Month", included: true },
        { name: "Basic AI Script Generation", included: true },
        { name: "Standard Video Quality", included: true },
        { name: "Email Support", included: true },
        { name: "Analytics Dashboard", included: false },
        { name: "Custom Thumbnails", included: false },
        { name: "Channel Optimization", included: false },
      ],
      cta: "Get Started",
      popular: false,
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
      ctaColor: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      name: "Pro",
      description: "For serious creators looking to grow",
      price: 249,
      frequency: "/month",
      features: [
        { name: "1 YouTube Channel", included: true },
        { name: "10 Videos Per Month", included: true },
        { name: "Advanced AI Script Generation", included: true },
        { name: "HD Video Quality", included: true },
        { name: "Priority Email Support", included: true },
        { name: "Analytics Dashboard", included: true },
        { name: "Custom Thumbnails", included: true },
        { name: "Channel Optimization", included: false },
      ],
      cta: "Get Started",
      popular: true,
      bgGradient: "from-primary/20 to-secondary/20",
      borderColor: "border-primary/30",
      ctaColor: "bg-gradient-to-r from-primary to-secondary"
    },
    {
      name: "Agency",
      description: "For agencies managing multiple channels",
      price: 599,
      frequency: "/month",
      features: [
        { name: "3 YouTube Channels", included: true },
        { name: "30 Videos Per Month", included: true },
        { name: "Premium AI Script Generation", included: true },
        { name: "4K Video Quality", included: true },
        { name: "24/7 Dedicated Support", included: true },
        { name: "Advanced Analytics Dashboard", included: true },
        { name: "Custom Thumbnails & Branding", included: true },
        { name: "Complete Channel Optimization", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      ctaColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute w-1/2 h-1/3 bg-gradient-to-r from-blue-500/10 to-primary/10 blur-[120px] rounded-full -top-40 left-1/3"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-r from-secondary/10 to-purple-500/10 blur-[120px] rounded-full bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4">
              <FaCrown className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transparent</span> Pricing
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your YouTube growth journey. No hidden fees, no complicated tiers.
          </p>
        </motion.div>

        {/* Price toggle (monthly/annual) - could be added here if needed */}

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl border ${plan.borderColor} bg-gradient-to-b ${plan.bgGradient} backdrop-blur-sm p-1 h-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="bg-gray-900/80 rounded-xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.frequency}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`rounded-full p-1 mr-3 mt-1 ${feature.included ? 'text-green-400 bg-green-400/20' : 'text-gray-500 bg-gray-500/20'}`}>
                        {feature.included ? 
                          <FaCheck className="w-3 h-3" /> : 
                          <FaTimes className="w-3 h-3" />
                        }
                      </div>
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-medium text-white text-center block ${plan.ctaColor} hover:shadow-lg hover:shadow-primary/20 transition-shadow`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ or additional info section */}
        <motion.div
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                Our team is here to help you find the perfect plan for your YouTube channel's growth. 
                Contact our team for more detailed information about our services.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-secondary transition-colors"
              >
                Contact our sales team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Money-back guarantee</h4>
              <p className="text-gray-400">
                Not satisfied with our service? Get a full refund within the first 14 days, 
                no questions asked. Medblen is confident in the quality of our AI-powered videos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 