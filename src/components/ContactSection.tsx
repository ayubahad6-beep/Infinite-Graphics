import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8">
              LET'S START <br />
              <span className="text-brand-accent">SOMETHING NEW</span>
            </h2>
            <p className="text-white/50 mb-12">
              Ready to take your brand to the next level? Fill out the form or reach out directly via WhatsApp or email.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-brand-accent transition-colors duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                  <p className="text-lg font-medium">hello@infinitegraphics.in</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-brand-accent transition-colors duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-brand-accent transition-colors duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Visit Us</p>
                  <p className="text-lg font-medium">Latur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Proof Logos */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Trusted By</p>
              <div className="flex flex-wrap gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-2xl font-black tracking-tighter">LOGO 1</div>
                <div className="text-2xl font-black tracking-tighter">LOGO 2</div>
                <div className="text-2xl font-black tracking-tighter">LOGO 3</div>
                <div className="text-2xl font-black tracking-tighter">LOGO 4</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-brand-gray border border-white/10 shadow-2xl shadow-brand-accent/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                  <option>Logo Design</option>
                  <option>Social Media</option>
                  <option>Video Creation</option>
                  <option>Brand Identity</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-brand-accent text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-brand-accent/20">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        <span className="absolute right-full mr-4 bg-white text-brand-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with us
        </span>
      </a>
    </section>
  );
}
