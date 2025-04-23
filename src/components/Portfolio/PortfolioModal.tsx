import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItemType } from './PortfolioCard';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItemType | null;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, item }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 backdrop-blur-sm hover:bg-black transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              {/* Video side */}
              <div className="md:w-7/12 bg-black">
                <div className="relative pt-[56.25%] h-0 md:h-full md:pt-0">
                  <iframe
                    src={`${item.videoUrl.includes('youtube') ? item.videoUrl.replace('watch?v=', 'embed/') : item.videoUrl}`}
                    title={item.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content side */}
              <div className="md:w-5/12 overflow-y-auto p-6 md:p-8 text-white">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                    )}
                  </div>

                  {/* Project details */}
                  <div className="space-y-4">
                    {/* Project goal */}
                    {item.goal && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">Project Goal</h4>
                        <p className="text-gray-300">{item.goal}</p>
                      </div>
                    )}

                    {/* Deliverables */}
                    {item.deliverables && item.deliverables.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">Deliverables</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          {item.deliverables.map((deliverable, index) => (
                            <li key={index}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {item.techStack && item.techStack.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outcomes/metrics */}
                    {item.outcomes && item.outcomes.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">Outcomes</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {item.outcomes.map((outcome, index) => (
                            <div
                              key={index}
                              className="bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                            >
                              <div className="text-lg font-bold text-white">{outcome.value}</div>
                              <div className="text-sm text-gray-400">{outcome.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA button */}
                  <div className="pt-6">
                    <a
                      href="/contact"
                      className="w-full block text-center bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Create Similar Content
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal; 