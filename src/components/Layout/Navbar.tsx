import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white shadow-md py-2 dark:bg-dark dark:shadow-gray-800'
      : 'bg-transparent py-2 md:py-4'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center py-2" onClick={closeMenu}>
          <span className="text-xl md:text-2xl font-bold text-primary">Medblen</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm md:text-base font-medium transition-colors duration-300 hover:text-primary ${
                router.pathname === link.path ? 'text-primary' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="https://calendar.app.google/3Fs1rWsUvvVJpeDx9"
            className="btn btn-primary px-4 py-2 text-sm md:text-base"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white px-4 pt-2 pb-6 shadow-lg dark:bg-dark">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`block rounded-md px-4 py-3 text-base font-medium ${
                      router.pathname === link.path
                        ? 'bg-primary-light/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="https://calendar.app.google/3Fs1rWsUvvVJpeDx9"
                  className="mt-3 block w-full rounded-md bg-primary px-4 py-3 text-center text-white"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 