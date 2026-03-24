import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-extrabold tracking-tighter flex items-center gap-2">
          <span className="bg-brand-accent text-white px-2 py-0.5 rounded">I</span>
          <span>INFINITE GRAPHICS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-accent text-white px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-gray border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-accent text-white px-5 py-3 rounded-xl text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </motion.div>
      )}
    </nav>
  );
}
