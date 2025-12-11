import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-[pulse_20s_infinite_ease-in-out] scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop")' }}
      >
         {/* Standard WordPress Overlay */}
         <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4">
             <span className="py-2 px-6 rounded-sm bg-amber-500 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
               The Best Travel Agent in Lombok
             </span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-xl">
            Explore The Beauty of <br />
            <span className="text-emerald-400 italic">Lombok Island</span>
          </h1>

          <p className="font-sans text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
            Kami menyediakan paket wisata eksklusif dengan pelayanan profesional untuk pengalaman liburan tak terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md transition-all shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] transform hover:-translate-y-1 uppercase tracking-wide text-sm flex items-center gap-2"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#packages"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-800 font-bold rounded-md transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wide text-sm"
            >
              Lihat Paket
            </a>
          </div>
        </motion.div>
      </div>

      {/* WordPress Style Shape Divider (Wave) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;