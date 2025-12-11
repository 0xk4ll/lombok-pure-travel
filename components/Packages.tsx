import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';
import { Clock, Eye, Frown, RotateCcw, ArrowDown, ArrowUp } from 'lucide-react';
import { TravelPackage } from '../types';
import PackageDetailModal from './PackageDetailModal';

interface PackagesProps {
  packages: TravelPackage[];
  isFiltered: boolean;
  onResetFilters: () => void;
}

const Packages: React.FC<PackagesProps> = ({ packages, isFiltered, onResetFilters }) => {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [showAll, setShowAll] = useState(false);
  const DEFAULT_COUNT = 6;

  // Tentukan paket yang akan ditampilkan
  // Jika sedang difilter atau tombol "Lihat Semua" diklik, tampilkan semua paket
  // Jika tidak, potong array menjadi 6 item saja
  const visiblePackages = (isFiltered || showAll) ? packages : packages.slice(0, DEFAULT_COUNT);

  const openModal = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section id="packages" className="py-24 bg-white relative">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Destinasi Pilihan</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-800">
                Paket Wisata <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Lengkap</span>
              </h2>
            </div>
            
            {/* Logic Tombol: Reset Filter (jika filter aktif) ATAU Lihat Semua / Tampilkan Sedikit */}
            <div className="hidden md:block">
              {isFiltered ? (
                <button 
                  onClick={onResetFilters}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors font-medium group cursor-pointer"
                >
                  Lihat Semua Paket <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
                </button>
              ) : (
                <button 
                  onClick={toggleShowAll}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors font-medium group cursor-pointer"
                >
                  {showAll ? 'Tampilkan Sedikit' : 'Lihat Semua Paket'} 
                  {showAll ? (
                     <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  ) : (
                     <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  )}
                </button>
              )}
            </div>
          </div>

          {packages.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
              <Frown size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-2">Paket tidak ditemukan</h3>
              <p className="text-slate-500 mb-6">Silakan coba ubah filter pencarian Anda.</p>
              <button 
                onClick={onResetFilters}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium inline-flex items-center gap-2"
              >
                <RotateCcw size={16} /> Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-100 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => openModal(pkg)}>
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                      {pkg.category}
                    </div>
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-bold border border-white/50 rounded-full px-4 py-2 bg-black/30 backdrop-blur-sm">
                        <Eye size={16} /> Lihat Detail
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 
                        className="font-heading font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors cursor-pointer"
                        onClick={() => openModal(pkg)}
                      >
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Clock size={16} className="text-amber-500" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400 uppercase">Mulai Dari</p>
                        <p className="text-amber-500 font-bold text-lg">{pkg.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModal(pkg)}
                          className="px-4 py-2 border border-emerald-600 hover:bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg transition-colors"
                        >
                          Detail
                        </button>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-colors"
                        >
                          Booking
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center md:hidden">
            {isFiltered ? (
              <button 
                onClick={onResetFilters}
                className="inline-flex items-center gap-2 text-emerald-600 font-medium"
              >
               Lihat Semua Paket <RotateCcw className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={toggleShowAll}
                className="inline-flex items-center gap-2 text-emerald-600 font-medium"
              >
               {showAll ? 'Tampilkan Sedikit' : 'Lihat Semua Paket'} 
               {showAll ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageDetailModal 
          isOpen={!!selectedPackage} 
          onClose={closeModal} 
          pkg={selectedPackage} 
        />
      )}
    </>
  );
};

export default Packages;