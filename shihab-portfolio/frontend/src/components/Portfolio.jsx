import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'android', label: 'Android' },
    { id: 'react-native', label: 'React Native' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-white border-b border-gray-600 pb-4">
          My <span className="text-primary">Portfolio</span>
        </h2>

        {/* Dynamic Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tab.id 
                  ? 'bg-primary text-black' 
                  : 'bg-[#2b2d32] text-gray-400 hover:text-white border border-gray-700 hover:border-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="bg-[#2b2d32] rounded-xl overflow-hidden border border-transparent hover:border-primary group"
              >
                <div className="h-[200px] w-full bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col items-center justify-center text-white">
                  <span className="font-bold tracking-wider uppercase text-sm">{project.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-[#1f1f1f] text-gray-300 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-primary hover:text-white text-sm font-semibold flex items-center gap-2">
                    GitHub Link ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;