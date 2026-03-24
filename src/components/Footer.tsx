import { Instagram, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-gray/50 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="#home" className="text-2xl font-display font-extrabold tracking-tighter flex items-center gap-2">
              <span className="bg-brand-accent text-white px-2 py-0.5 rounded">I</span>
              <span>INFINITE GRAPHICS</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed">
              Infinite Graphics is a premier graphic design studio based in Latur, India. We specialize in creating high-impact visual identities for brands that want to make a difference.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-brand-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm text-white/40 hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Logo Design</a></li>
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Social Media Assets</a></li>
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Video Creation</a></li>
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="text-sm text-white/40 hover:text-brand-accent transition-colors">Motion Graphics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-6">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6">Subscribe to our newsletter for design tips and studio updates.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button className="bg-brand-accent text-white px-5 py-3 rounded-xl text-sm font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/20 font-medium">
            © 2026 Infinite Graphics. All rights reserved. Designed with ❤️ in Latur.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
