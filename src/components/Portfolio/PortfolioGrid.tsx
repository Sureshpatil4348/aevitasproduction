import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard, { PortfolioItemType } from './PortfolioCard';
import PortfolioModal from './PortfolioModal';
import { TabType, ChipType } from './TabNavigation';

interface PortfolioGridProps {
  items: PortfolioItemType[];
  activeTab: TabType;
  activeChips: ChipType[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, activeTab, activeChips }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter items based on active tab and chips
  const filteredItems = items.filter(item => {
    // Filter by tab
    if (activeTab !== 'all' && item.type !== activeTab) {
      return false;
    }
    
    // Filter by chips if any are selected
    if (activeChips.length > 0) {
      const hasMatchingCategory = item.categories.some(category => 
        activeChips.includes(category as ChipType)
      );
      if (!hasMatchingCategory) {
        return false;
      }
    }
    
    return true;
  });

  // Open the modal with selected item
  const openModal = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Different grid layouts based on the type of content
  const getGridClasses = () => {
    // Use consistent grid layout for all video types since they all use the same aspect ratio now
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeChips.join(',')}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid ${getGridClasses()} gap-6 md:gap-8 justify-items-center`}
          >
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  openModal={openModal}
                />
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <h3 className="text-xl font-medium mb-1">No matching content found</h3>
                <p>Try changing your filters or check back later for new content.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Modal for displaying portfolio item details */}
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={selectedItem}
        />
      </div>
    </section>
  );
};

export default PortfolioGrid; 