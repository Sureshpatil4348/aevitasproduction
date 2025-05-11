import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="section py-20 bg-gray-950" id="contact">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-white">Ready to Supercharge Your Video Marketing?</h2>
          <p className="mt-4 text-gray-300">
            Get in touch with our team to discuss how we can help you create engaging AI-powered video content.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="rounded-xl bg-gray-900 p-8 shadow-lg border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {formSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                  <FaPaperPlane size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <button
                  className="mt-6 text-primary hover:underline"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your Company"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your video content needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary w-full ${loading ? 'opacity-70' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400">+91 6362731684</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">contact@Medblen.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-gray-400">
                    Vihar Gokul Road Hubali<br /> India 580030
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-6 border border-gray-800">
              <h3 className="mb-3 text-xl font-bold text-white">Schedule a Discovery Call</h3>
              <p className="mb-4 text-gray-300">
                Prefer to talk directly? Schedule a free 30-minute discovery call with one of our AI video specialists.
              </p>
              <a
                href="https://calendar.app.google/3Fs1rWsUvvVJpeDx9"
                className="btn btn-primary block w-full text-center"
              >
                Book a Call
              </a>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 p-6 border border-gray-800">
              <h3 className="mb-3 text-xl font-bold text-white">Fast Response</h3>
              <p className="text-gray-300">
                Our team typically responds within 2-4 business hours. For urgent inquiries, please call our direct line.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 