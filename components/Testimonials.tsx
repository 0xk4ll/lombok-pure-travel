import React from 'react';
import { Star, PlayCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Blob decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Section Title & Description */}
          <div className="md:w-1/3">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</span>
            <h2 className="font-heading text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Apa Kata Mereka Tentang <span className="text-emerald-600">Lombok Pure?</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman nyata dari para traveler yang telah menjelajahi Lombok bersama kami.
            </p>
            
            <div className="hidden md:block">
               <a href="#packages" className="text-emerald-600 font-bold border-b-2 border-emerald-600 hover:text-emerald-800 hover:border-emerald-800 transition-colors inline-block pb-1">
                 Lihat Paket Wisata &rarr;
               </a>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group">
                 {/* Big Quote Icon Watermark - Classic WP Theme Style */}
                 <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 rotate-180 group-hover:text-emerald-50 transition-colors duration-300" />
                 
                 <div className="flex gap-1 mb-4 relative z-10">
                   {[...Array(t.rating)].map((_, i) => (
                     <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                   ))}
                 </div>
                 
                 <p className="text-slate-600 italic mb-6 relative z-10 text-sm leading-relaxed">
                   "{t.quote}"
                 </p>
                 
                 <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-sm shadow-inner">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="text-slate-800 font-bold text-sm">{t.name}</h4>
                      <p className="text-slate-400 text-xs uppercase tracking-wide">Happy Traveler</p>
                   </div>
                 </div>
              </div>
            ))}
            
            {/* Video Testimonial as a "Card" */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer h-full min-h-[250px]">
               <img src="https://picsum.photos/seed/videothumb/600/400" alt="Video Testimonial" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                   <PlayCircle className="w-8 h-8 text-white ml-1" />
                 </div>
                 <h4 className="text-white font-bold text-lg mb-1">Vlog Liburan Keluarga</h4>
                 <p className="text-gray-300 text-xs">Tonton keseruan mereka di Gili Trawangan</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;