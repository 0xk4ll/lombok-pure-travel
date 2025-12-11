import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_ITEMS } from '../constants';
import * as LucideIcons from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern - subtle dots often found in WP themes */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Features</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            Kenapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Lombok Pure?</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-500 text-lg">
            Kami berkomitmen memberikan standar pelayanan terbaik untuk pengalaman liburan yang tidak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const IconComponent = (LucideIcons as any)[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center relative overflow-hidden"
              >
                {/* Elementor-style hover accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  {IconComponent && <IconComponent className="text-emerald-600 group-hover:text-white w-8 h-8 transition-colors duration-300" />}
                </div>
                
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;