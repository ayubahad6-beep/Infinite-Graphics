import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { PenTool, Share2, Video, Layout, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  PenTool: PenTool,
  Share2: Share2,
  Video: Video,
  Layout: Layout,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4"
            >
              OUR <span className="text-brand-accent">SERVICES</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50"
            >
              We provide professional-grade design solutions tailored to your brand's unique needs, ensuring you stand out in a crowded marketplace.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block bg-brand-accent/10 border border-brand-accent/20 px-6 py-3 rounded-2xl"
          >
            <span className="text-sm font-bold text-brand-accent">Custom Packages Available</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-brand-gray border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-white/50 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-medium text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Identity Checklist Lead Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-brand-gray to-brand-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-display font-bold mb-4">Free Brand Identity Checklist</h3>
            <p className="text-white/50">Download our comprehensive guide to building a professional brand identity from scratch. Perfect for startups and entrepreneurs.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-64 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Get Free PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
