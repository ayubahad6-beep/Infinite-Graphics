import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category } from '../types';
import { ExternalLink, Plus } from 'lucide-react';

const CATEGORIES: (Category | 'All')[] = ['All', 'Logo Design', 'Social Media', 'Video Creation', 'Brand Identity'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4"
          >
            FEATURED <span className="text-brand-accent">WORK</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            A curated selection of our best projects, from minimalist logos to high-energy social media campaigns.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-brand-accent border-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-gray border border-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">
                      {item.category}
                    </span>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-brand-accent rounded-full transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-brand-accent rounded-full transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
