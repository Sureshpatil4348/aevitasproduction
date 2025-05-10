import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type TestimonialType = {
  id: string;
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
};

type CaseStudyType = {
  id: string;
  client: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    before: string;
    after: string;
    label: string;
  }[];
};

// Isolated Case Study Card component with always-expanded details
const CaseStudyCard = ({ study, delay }: { study: CaseStudyType; delay: number }) => {
  // No need for state management since details are always shown
  
  // Get the appropriate image based on client name
  const getClientImage = (client: string) => {
    switch (client) {
      case 'Interview Kickstart':
        return '/images/interviewkickstart.png';
      case 'The Chirag Anand':
        return '/images/The Chirag Anand.jpg';
      case 'Angel Investments':
        return '/images/angelinvesting.jpeg';
      default:
        return '/images/jagruksthan.png';
    }
  };
  
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/70 backdrop-blur-lg border border-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full -mr-8 -mt-8 opacity-70"></div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
            <img 
              src={getClientImage(study.client)} 
              alt={study.client}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-accent text-white text-xs font-semibold py-1.5 px-4 rounded-full inline-block shadow-lg shadow-accent/20">
            {study.client}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 text-left h-14 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
        <p className="text-gray-300 text-sm mb-6 text-left flex-grow">{study.description}</p>
        
        {/* Case study details - always visible */}
        <div className="w-full mt-6 overflow-hidden border-t border-gray-700/50 pt-4">
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-primary font-semibold text-sm mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm-1.5 7.5v-3a1.5 1.5 0 0 1 3 0v3h-3Z" clipRule="evenodd" />
                    </svg>
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-accent font-semibold text-sm mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                    </svg>
                    Solution
                  </h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 text-green-400">
                      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                    </svg>
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, index) => (
                      <div key={index} className="relative overflow-hidden bg-gray-900/80 p-3 rounded-lg border border-gray-800/50 hover:border-accent/30 transition-colors duration-300">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/5 rounded-full"></div>
                        <div className="relative">
                          <div className="text-xs font-normal text-gray-400 mb-2 text-center">{result.label}</div>
                          <div className="flex flex-col gap-1 items-center text-center">
                            <span className="text-gray-500 text-xs text-center">{result.before}</span>
                            <span className="text-accent font-bold text-base text-center">{result.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample testimonials data
  const testimonials: TestimonialType[] = [
    {
      id: '1',
      name: 'Rajiv Mehta',
      role: 'Founder',
      company: 'Insight Fusion',
      videoUrl: 'https://www.youtube.com/embed/5hvvV_k1cHk',
      thumbnail: '/images/Rajiv Mehta.jpeg',
      quote: 'Medblen has transformed our content output. We\'re producing 3 times more videos with the same team.'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'AlgoFX Live',
      videoUrl: 'https://www.youtube.com/embed/fLzMNq--1g8',
      thumbnail: '/images/Sarah Chen.png',
      quote: 'The AI-powered editing workflow saves us hours on every video while maintaining our brand identity.'
    },
    {
      id: '3',
      name: 'Amit Sharma',
      role: 'CEO',
      company: 'Jagruk Sthan',
      videoUrl: 'https://www.youtube.com/embed/4JC7weXtpqY',
      thumbnail: '/images/Amit Sharma.jpeg',
      quote: 'Since partnering with Medblen, our channel growth has accelerated by 300%. They handle everything.'
    }
  ];

  // Sample case studies data
  const caseStudies: CaseStudyType[] = [
    {
      id: 'cs1',
      client: 'Interview Kickstart',
      title: 'Scaling Educational Content Production',
      description: 'How Medblen helped a tech education platform scale their short-form content to reach new audiences.',
      challenge: 'Interview Kickstart had hours of valuable long-form content but struggled to repurpose it for social media at scale.',
      solution: 'We implemented an AI-driven content pipeline that automatically identified key insights from their workshops and transformed them into platform-optimized short-form videos.',
      results: [
        { before: '2-3 clips', after: '20-25 clips', label: 'Weekly Output' },
        { before: '5.2%', after: '28.4%', label: 'Engagement Rate' },
        { before: '12 hours', after: '2 hours', label: 'Production Time' }
      ]
    },
    {
      id: 'cs2',
      client: 'The Chirag Anand',
      title: 'Building a Finance Creator Brand',
      description: 'Helping a finance expert grow to 250K+ followers with consistent, high-quality content.',
      challenge: 'Chirag had deep expertise in finance but limited time and video production knowledge to build his online presence.',
      solution: 'We created a custom content strategy across multiple platforms, and handled all aspects of production from scripting to distribution.',
      results: [
        { before: '15K', after: '250K+', label: 'Followers' },
        { before: '3-5K', after: '50-100K', label: 'Avg. Views' },
        { before: '1 video/week', after: '5 videos/week', label: 'Production Rate' }
      ]
    },
    {
      id: 'cs3',
      client: 'Angel Investments',
      title: 'Documentary Series Launch',
      description: 'Launching a high-quality documentary series on investment strategies for a premier financial education platform.',
      challenge: 'Angel Investments wanted to create premium long-form content that conveyed complex financial concepts in an engaging way.',
      solution: 'We developed and produced a 6-part documentary series using AI-assisted scripting and cinematic production techniques.',
      results: [
        { before: 'No video content', after: '6 episodes', label: 'Content Library' },
        { before: '', after: '120,000+', label: 'Series Views' },
        { before: '', after: '%', label: 'Lead Conversion' }
      ]
    }
  ];

  // No longer needed - each card manages its own state

  // Cycle through testimonials automatically
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-[50px] animate-pulse"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Client <span className="relative inline-block">
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Testimonials</span>
              <svg className="absolute -bottom-2 left-0 w-full h-1.5 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span> & Case Studies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hear what our clients have to say about our automated content production services
          </p>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-md"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-md"></div>

            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800/80 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              <iframe
                src={testimonials[activeTestimonial].videoUrl}
                title={`Testimonial by ${testimonials[activeTestimonial].name}`}
                className="absolute inset-0 w-full h-full z-0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Video control overlay */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 z-20 text-xs text-white font-medium">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-500">
                    <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                    <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                  </svg>
                  Live Testimonial
                </span>
              </div>
            </motion.div>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 mb-8 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'ring-2 ring-accent scale-110 shadow-lg shadow-accent/20'
                    : 'opacity-60 scale-100 hover:opacity-80 hover:scale-105'
                }`}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-contain p-2"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center transition-opacity duration-300 ${
                    activeTestimonial === index ? 'opacity-70' : 'opacity-60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${
                      activeTestimonial === index ? 'bg-accent' : 'bg-white/30'
                    } flex items-center justify-center transition-all duration-300`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="max-w-3xl mx-auto mt-6 mb-12 text-center bg-gray-800/30 backdrop-blur-sm px-8 py-6 rounded-xl border border-gray-700/30"
            key={activeTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent/60 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <blockquote className="text-xl italic text-white mb-6">{`"${testimonials[activeTestimonial].quote}"`}</blockquote>
            <div className="mt-4 pt-4 border-t border-gray-700/30">
              <p className="font-semibold text-white text-lg">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-gray-300">{testimonials[activeTestimonial].role}, <span className="text-accent">{testimonials[activeTestimonial].company}</span></p>
            </div>
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="relative flex items-center my-12">
          <div className="flex-grow border-t border-gray-800/80"></div>
          <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-accent flex items-center gap-2 mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
            <span className="font-semibold">Featured Case Studies</span>
          </div>
          <div className="flex-grow border-t border-gray-800/80"></div>
        </div>
        
        {/* Case Studies - Now using isolated CaseStudyCard components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} delay={0.1 + (index * 0.1)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;