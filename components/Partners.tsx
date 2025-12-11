import React from 'react';

const Partners: React.FC = () => {
  // Using placeholders for logos
  const partners = [
    { name: 'TechData', color: 'bg-blue-600' },
    { name: 'DKT Indonesia', color: 'bg-green-600' },
    { name: 'LKD', color: 'bg-purple-600' },
    { name: 'Mandiri Syariah', color: 'bg-yellow-600' },
    { name: 'Kominfo', color: 'bg-blue-500' }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Dipercaya Oleh Klien & Mitra Kami</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {partners.map((p, i) => (
             <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-md ${p.color}`}></div>
                <span className="font-bold text-xl text-slate-600">{p.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;