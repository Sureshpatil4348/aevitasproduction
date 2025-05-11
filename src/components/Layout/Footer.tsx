import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Refund Policy', href: '/refund-policy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'YouTube', icon: <FaYoutube size={18} />, href: 'https://www.youtube.com/@MedblenEdge', color: 'hover:bg-red-600' },
    { name: 'Instagram', icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/medblen_/', color: 'hover:bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400' },
    { name: 'Twitter', icon: <FaTwitter size={18} />, href: 'https://x.com/medblen?s=21', color: 'hover:bg-blue-400' },
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/company/medblen', color: 'hover:bg-blue-600' },
  ];

  return (
    <footer className="bg-gray-950 py-8 sm:py-12 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      </div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-primary">Medblen</span>
            </Link>
            <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-300">
              Leverage cutting-edge AI to automate and simplify content creation, particularly video content for multiple platforms.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-all duration-300 ${link.color} hover:text-white hover:shadow-lg hover:shadow-primary/20 transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-white">{column.title}</h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-gray-300 transition-colors duration-300 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Medblen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 