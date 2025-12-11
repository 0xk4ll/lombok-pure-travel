import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-gray-100">
              <img src="https://picsum.photos/seed/lombokteam/800/600" alt="Lombok Pure Team" className="w-full h-auto" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-emerald-600 font-bold uppercase tracking-wider mb-2 text-sm">Tentang Kami</h3>
            <h2 className="font-heading text-4xl font-bold text-slate-800 mb-6">Lombok Pure Travel</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Berdiri sejak 2015, Lombok Pure Travel hadir dengan visi untuk memperkenalkan keindahan Lombok 
              melalui pengalaman yang personal dan autentik. Kami bukan sekadar agen perjalanan, tapi partner 
              petualangan Anda yang mengutamakan kenyamanan, keamanan, dan kenangan tak terlupakan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Kami mengusung konsep "Pure Travel" — menyatu dengan alam, budaya lokal, dan keramahan khas suku Sasak.
            </p>

            <ul className="space-y-4">
              {[
                'Layanan wisata resmi & berkualitas.',
                'Fokus pada pengalaman lokal yang autentik.',
                'Mengutamakan integritas dan kekeluargaan.',
                'Harga transparan tanpa biaya tersembunyi.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;