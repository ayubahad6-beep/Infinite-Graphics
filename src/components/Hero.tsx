import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-white/70">Based in Latur, India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8"
        >
          WE DESIGN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">INFINITE</span> POSSIBILITIES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed"
        >
          Transforming brands through professional logo design, high-impact social media assets, and dynamic video creation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group bg-white text-brand-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
          >
            View Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white/90 hover:text-white transition-colors">
            <span className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Play className="w-4 h-4 fill-white" />
            </span>
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
