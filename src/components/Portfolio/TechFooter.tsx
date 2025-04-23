import React from 'react';
import { motion } from 'framer-motion';

const TechFooter = () => {
  // Tech stack logos
  const techStack = [
    { name: 'Adobe', logo: '/images/tech/adobe-logo.svg' },
    { name: 'OpenAI', logo: '/images/tech/openai-logo.svg' },
    { name: 'AWS', logo: '/images/tech/aws-logo.svg' },
    { name: 'Vercel', logo: '/images/tech/vercel-logo.svg' },
    { name: 'ffmpeg', logo: '/images/tech/ffmpeg-logo.svg' },
    { name: 'React', logo: '/images/tech/react-logo.svg' },
  ];

  return (
    <section className="pt-16 pb-8 bg-gray-950 border-t border-gray-800">
      <div className="container">
        {/* Tech stack */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-gray-400 text-center mb-8">Powered by cutting-edge technology</h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-lg p-3 flex items-center justify-center mb-2">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="max-w-full max-h-full" 
                  />
                </div>
                <span className="text-xs text-gray-500">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Compliance and Links */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
          {/* Privacy & Compliance */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/terms">Terms of Service</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/compliance">GDPR Compliance</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/accessibility">Accessibility Statement</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/portfolio">Our Work</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/services">Services</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/about">About Us</a>
              </li>
              <li className="text-gray-400 hover:text-accent transition-colors">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Copyright & Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <p className="text-sm text-gray-400 mb-3">
              &copy; {new Date().getFullYear()} Aevitas. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              All trademarks and brand names are the property of their respective owners. 
              Aevitas is not affiliated with the platforms shown in our portfolio.
            </p>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-600">
            Made with ❤️ by the Aevitas team. Powered by AI. Delivered at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechFooter; 