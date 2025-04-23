import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Counter animation hook
const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<number>(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    countRef.current = start;
    let startTime: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      
      countRef.current = value;
      setCount(value);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
    
    return () => {
      startTime = null;
    };
  }, [start, end, duration, isVisible]);

  return { count, setIsVisible };
};

const MetricsItem = ({ 
  end, 
  prefix = '', 
  suffix = '', 
  label, 
  delay = 0,
  inView 
}: { 
  end: number; 
  prefix?: string; 
  suffix?: string; 
  label: string; 
  delay?: number;
  inView: boolean;
}) => {
  const { count, setIsVisible } = useCounter(end);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, setIsVisible]);

  return (
    <motion.div 
      className="text-center px-4 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: delay * 0.001 }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
        <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </motion.div>
  );
};

const MetricsStrip = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    { end: 1200, suffix: '+', label: 'videos delivered 2024-25', delay: 0 },
    { end: 900, suffix: ' M+', label: 'views generated for clients', delay: 200 },
    { end: 3, suffix: '×', label: 'faster turnaround vs traditional agencies', delay: 400 },
    { end: 98, suffix: '%', label: 'client retention', delay: 600 },
  ];

  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-y border-gray-800 relative overflow-hidden"
    >
      {/* Background gradient blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/4 w-1/2 h-96 rounded-full bg-primary/10 blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, index) => (
            <MetricsItem
              key={index}
              end={metric.end}
              suffix={metric.suffix}
              label={metric.label}
              delay={metric.delay}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip; 