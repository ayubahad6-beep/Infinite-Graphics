import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <PortfolioGallery />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
