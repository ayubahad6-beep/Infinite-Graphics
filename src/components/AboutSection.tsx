import { motion } from 'motion/react';
import { Award, Users, Briefcase, Star } from 'lucide-react';

const STATS = [
  { label: 'Projects Completed', value: '250+', icon: Briefcase },
  { label: 'Happy Clients', value: '180+', icon: Users },
  { label: 'Years Experience', value: '5+', icon: Star },
  { label: 'Awards Won', value: '12', icon: Award },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-gray/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-brand-accent/5">
              <img
                src="https://picsum.photos/seed/designer/800/1000"
                alt="Infinite Graphics Designer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-brand-accent p-6 rounded-3xl shadow-xl shadow-brand-accent/20">
                <span className="text-4xl font-display font-black text-white">5+</span>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Years of Experience</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-6">
                THE MISSION OF <br />
                <span className="text-brand-accent">INFINITE GRAPHICS</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Based in Latur, Infinite Graphics was founded with a single mission: to provide professional-grade design services that empower local and regional businesses to compete on a global stage.
              </p>
              <p className="text-white/60 leading-relaxed">
                We believe that every brand has a unique story, and our job is to tell it through high-impact visuals. Whether it's a minimalist logo or a high-energy video, we focus on quality, creativity, and results.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-3"
                  >
                    <Icon className="w-6 h-6 text-brand-accent" />
                    <div>
                      <span className="text-2xl font-display font-black block">{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-white text-brand-black px-8 py-4 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all duration-300">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
