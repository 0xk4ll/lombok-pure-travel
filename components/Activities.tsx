import React, { useState } from 'react';
import { DAILY_TRIPS, ACTIVITIES, WHATSAPP_URL } from '../constants';
import { MapPin, ArrowRight, Images } from 'lucide-react';
import { DailyTrip } from '../types';
import PackageDetailModal from './PackageDetailModal';
import ImageGalleryModal from './ImageGalleryModal';

const Activities: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<DailyTrip | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);

  const openTripModal = (trip: DailyTrip) => {
    setSelectedTrip(trip);
    document.body.style.overflow = 'hidden';
  };

  const closeTripModal = () => {
    setSelectedTrip(null);
    document.body.style.overflow = 'auto';
  };

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryImages(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="activities" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Daily Trips */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-slate-800 mb-8 border-l-4 border-amber-500 pl-4">Daily Trip (Trip Harian)</h2>
            <div className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory">
              {DAILY_TRIPS.map((trip) => (
                <div 
                  key={trip.id} 
                  className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl overflow-hidden snap-center border border-gray-100 shadow-md hover:shadow-lg transition-shadow relative group cursor-pointer"
                  onClick={() => openTripModal(trip)}
                >
                  <div className="h-48 overflow-hidden relative">
                      <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-emerald-700 transition-colors">{trip.title}</h3>
                    <div className="flex items-start gap-2 text-slate-500 text-sm mb-4">
                      <MapPin size={16} className="mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>{trip.destinations}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-500 font-bold">{trip.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openTripModal(trip);
                        }}
                        className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded text-xs border border-emerald-200 font-medium transition-colors"
                      >
                          Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Activities */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-800 mb-8 border-l-4 border-emerald-500 pl-4">Aktivitas Populer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ACTIVITIES.map((act) => (
                <div 
                  key={act.id} 
                  className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md bg-gray-100"
                  onClick={() => act.gallery && openGallery(act.gallery)}
                >
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Gallery Indicator */}
                  {act.gallery && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full text-white z-10">
                      <Images size={14} />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-white font-bold text-lg leading-tight">{act.title}</h4>
                    <p className="text-gray-200 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      {act.gallery ? 'Klik untuk lihat foto' : act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Detail Modal for Daily Trips */}
      {selectedTrip && (
        <PackageDetailModal 
          isOpen={!!selectedTrip} 
          onClose={closeTripModal} 
          pkg={selectedTrip} 
        />
      )}

      {/* Gallery Modal for Activities */}
      {galleryImages && (
        <ImageGalleryModal
          isOpen={!!galleryImages}
          onClose={closeGallery}
          images={galleryImages}
        />
      )}
    </>
  );
};

export default Activities;
