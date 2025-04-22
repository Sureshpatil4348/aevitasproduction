import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Channels', href: '/channels' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Our Channels',
      links: [
        { name: 'Ridiculously Rich', href: '/channels#ridiculously-rich' },
        { name: 'ConBuster', href: '/channels#conbuster' },
        { name: 'Whodunit Files', href: '/channels#whodunit-files' },
        { name: 'Showdown Central', href: '/channels#showdown-central' },
        { name: 'RankItUp', href: '/channels#rankitup' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'YouTube', icon: <FaYoutube size={20} />, href: 'https://youtube.com', color: 'hover:bg-red-600' },
    { name: 'Instagram', icon: <FaInstagram size={20} />, href: 'https://instagram.com', color: 'hover:bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400' },
    { name: 'TikTok', icon: <FaTiktok size={20} />, href: 'https://tiktok.com', color: 'hover:bg-black hover:text-cyan-400' },
    { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://linkedin.com', color: 'hover:bg-blue-600' },
    { name: 'Facebook', icon: <FaFacebook size={20} />, href: 'https://facebook.com', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gray-950 py-12 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Aevitas</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-300">
              Leverage cutting-edge AI to automate and simplify content creation, particularly video content for multiple platforms.
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-all duration-300 ${link.color} hover:text-white hover:shadow-lg hover:shadow-primary/20 transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 transition-colors duration-300 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Aevitas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 