import React from 'react';
import { Search, Calendar, MapPin, Layers } from 'lucide-react';
import { FilterCriteria } from '../types';

interface FilterProps {
  currentFilters: FilterCriteria;
  setFilter: (criteria: FilterCriteria) => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilters, setFilter }) => {
  const { category, destination, duration } = currentFilters;

  const updateFilter = (key: keyof FilterCriteria, value: string) => {
    setFilter({
      ...currentFilters,
      [key]: value
    });
  };

  const handleSearchClick = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-30 -mt-24 px-4 container mx-auto mb-20">
      {/* WordPress-style "Booking Engine" Container with floating shadow */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-t-4 border-emerald-500 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Input Group 1 */}
          <div className="flex flex-col gap-3 group">
            <label className="text-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Layers size={14} className="text-emerald-500" />
              Kategori
            </label>
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-gray-200 rounded-lg py-3.5 px-4 appearance-none focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
              >
                <option value="Semua Kategori">Semua Kategori</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Adventure">Adventure</option>
                <option value="Daily Trip">Daily Trip</option>
                <option value="Family">Family</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Input Group 2 */}
          <div className="flex flex-col gap-3 group">
            <label className="text-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <MapPin size={14} className="text-emerald-500" />
              Destinasi
            </label>
            <div className="relative">
              <select 
                value={destination}
                onChange={(e) => updateFilter('destination', e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-gray-200 rounded-lg py-3.5 px-4 appearance-none focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
              >
                <option value="Semua Destinasi">Semua Destinasi</option>
                <option value="Gili">3 Gili (Trawangan, Meno, Air)</option>
                <option value="Rinjani">Gunung Rinjani</option>
                <option value="Mandalika">Mandalika</option>
                <option value="Sembalun">Sembalun</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Input Group 3 */}
          <div className="flex flex-col gap-3 group">
            <label className="text-slate-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Calendar size={14} className="text-emerald-500" />
              Durasi
            </label>
            <div className="relative">
              <select 
                value={duration}
                onChange={(e) => updateFilter('duration', e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-gray-200 rounded-lg py-3.5 px-4 appearance-none focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
              >
                <option value="Bebas">Bebas</option>
                <option value="2 Hari">2 Hari 1 Malam</option>
                <option value="3 Hari">3 Hari 2 Malam</option>
                <option value="4 Hari">4 Hari 3 Malam</option>
                <option value="5 Hari">5 Hari +</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col gap-3">
            <label className="opacity-0 text-xs font-bold uppercase tracking-wider hidden md:block">Action</label>
            <button 
              onClick={handleSearchClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Search size={18} />
              <span>Cari Paket</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Filter;