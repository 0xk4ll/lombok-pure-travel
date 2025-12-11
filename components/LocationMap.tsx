import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Lokasi <span className="text-emerald-700">Kami</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kunjungi kantor kami di kawasan Kuta Mandalika, Lombok Tengah. Kami siap menyambut kedatangan Anda untuk konsultasi perjalanan.
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-gray-100 group">
           {/* Google Maps Embed */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.826622864627!2d116.28045731416625!3d-8.896696993608573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb147d3d2746d%3A0x4250352928373872!2sKuta%20Beach%20Park!5e0!3m2!1sen!2sid!4v1679820123456!5m2!1sen!2sid" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Lombok Pure Travel Location"
             className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
           ></iframe>
           
           <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg max-w-xs border border-gray-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-lg">Main Office</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-snug">Jl. Pariwisata Pantai Kuta, Lombok Tengah, NTB, Indonesia.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wide">
                    <span>Buka Setiap Hari</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>08:00 - 22:00</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;