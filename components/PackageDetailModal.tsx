import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, XCircle, Clock, MapPin, Phone } from 'lucide-react';
import { TravelPackage, DailyTrip } from '../types';
import { WHATSAPP_URL } from '../constants';

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: TravelPackage | DailyTrip;
}

const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ isOpen, onClose, pkg }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto overflow-x-hidden custom-scrollbar flex-1">
            
            {/* Header Image */}
            <div className="relative h-64 md:h-80">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold text-white mb-3 uppercase tracking-wider">
                  {pkg.category}
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2 shadow-sm">
                  {pkg.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-100 text-sm md:text-base">
                  <div className="flex items-center gap-1">
                    <Clock size={18} className="text-amber-400" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={18} className="text-emerald-400" />
                    <span>Lombok & Gili</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* Left Column: Description & Itinerary */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-3">Deskripsi Paket</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {pkg.description || "Nikmati pengalaman liburan tak terlupakan di Lombok bersama kami. Paket ini dirancang khusus untuk memberikan kenyamanan dan pengalaman autentik."}
                  </p>
                </div>

                <div>
                   <h3 className="font-heading text-xl font-bold text-slate-800 mb-6 border-l-4 border-amber-500 pl-3">Rencana Perjalanan (Itinerary)</h3>
                   <div className="space-y-6">
                      {pkg.itinerary?.map((day, idx) => (
                        <div key={idx} className="relative pl-8 border-l border-emerald-100 pb-2">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-sm"></div>
                          <h4 className="text-slate-800 font-bold text-lg mb-2 flex items-center gap-2">
                            <span className="text-emerald-600">Hari {day.day}:</span> {day.title}
                          </h4>
                          <ul className="space-y-2">
                            {day.activities.map((act, actIdx) => (
                              <li key={actIdx} className="text-slate-600 text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Right Column: Pricing & Inclusions */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200 sticky top-4">
                  <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">Harga Mulai Dari</p>
                  <div className="text-3xl font-bold text-emerald-700 mb-6">{pkg.price}</div>
                  
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/20 mb-8"
                  >
                    <Phone size={20} />
                    Booking via WhatsApp
                  </a>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600" />
                        Termasuk (Included)
                      </h5>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {pkg.inclusions?.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <span className="text-emerald-600/70">✓</span> {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <XCircle size={18} className="text-red-500" />
                        Tidak Termasuk (Excluded)
                      </h5>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {pkg.exclusions?.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <span className="text-red-500/70">✕</span> {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PackageDetailModal;
