import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define tab types
export type TabType = 'all' | 'short-form' | 'long-form' | 'documentaries';

// Define filter chip types
export type ChipType = 'finance' | 'lifestyle' | 'education' | 'technology' | 'health';

type TabNavigationProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  activeChips: ChipType[];
  setActiveChips: (chips: ChipType[]) => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  activeChips,
  setActiveChips
}) => {
  // Function to handle chip toggle
  const toggleChip = (chip: ChipType) => {
    if (activeChips.includes(chip)) {
      setActiveChips(activeChips.filter(c => c !== chip));
    } else {
      setActiveChips([...activeChips, chip]);
    }
  };

  // All available tabs
  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'short-form', label: 'Short-form' },
    { id: 'long-form', label: 'Long-form' },
    { id: 'documentaries', label: 'Documentaries' }
  ];

  // All available filter chips
  const filterChips: { id: ChipType; label: string }[] = [
    { id: 'finance', label: 'Finance' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'education', label: 'Education' },
    { id: 'technology', label: 'Technology' },
    { id: 'health', label: 'Health' }
  ];

  return (
    <div className="sticky top-20 z-40 bg-gray-950/80 backdrop-blur-lg border-y border-gray-800 py-6">
      <div className="container">
        {/* Tab Navigation */}
        <div className="relative flex justify-center mb-6">
          <div className="flex rounded-full bg-gray-900 p-1 shadow-lg border border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Chips - only show when a tab is active */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: activeTab !== 'all' ? 1 : 0,
            y: activeTab !== 'all' ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => toggleChip(chip.id)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                activeChips.includes(chip.id)
                  ? 'bg-accent text-gray-900 font-semibold shadow-lg shadow-accent/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TabNavigation; 