import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-emerald-900">
       <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/beach2/1920/600')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
       <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-navy-900 opacity-90"></div>
       
       <div className="container mx-auto px-4 relative z-10 text-center">
         <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
           Siap Merencanakan Liburan ke Lombok?
         </h2>
         <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
           Konsultasikan rencana perjalanan Anda secara gratis bersama travel consultant kami.
         </p>
         
         <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            <span>Booking via WhatsApp</span>
          </a>
       </div>
    </section>
  );
};

export default CTA;
