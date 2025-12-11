import React, { useState, useMemo } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filter from './components/Filter';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Activities from './components/Activities';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import LocationMap from './components/LocationMap';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { PACKAGES } from './constants';
import { FilterCriteria } from './types';

const defaultFilters: FilterCriteria = {
  category: 'Semua Kategori',
  destination: 'Semua Destinasi',
  duration: 'Bebas'
};

function App() {
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>(defaultFilters);

  const isFiltered = useMemo(() => {
    return (
      filterCriteria.category !== defaultFilters.category ||
      filterCriteria.destination !== defaultFilters.destination ||
      filterCriteria.duration !== defaultFilters.duration
    );
  }, [filterCriteria]);

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter(pkg => {
      // 1. Filter Category
      if (
        filterCriteria.category !== 'Semua Kategori' && 
        filterCriteria.category !== 'Daily Trip' && 
        pkg.category !== filterCriteria.category
      ) {
        return false;
      }

      // 2. Filter Destination (Cek Title atau Deskripsi)
      if (filterCriteria.destination !== 'Semua Destinasi') {
        const dest = filterCriteria.destination;
        const searchContent = (pkg.title + pkg.description + JSON.stringify(pkg.itinerary)).toLowerCase();
        if (!searchContent.includes(dest.toLowerCase())) {
          return false;
        }
      }

      // 3. Filter Duration
      if (filterCriteria.duration !== 'Bebas') {
        if (!pkg.duration.toLowerCase().includes(filterCriteria.duration.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [filterCriteria]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Filter currentFilters={filterCriteria} setFilter={setFilterCriteria} />
      <WhyChooseUs />
      <Packages 
        packages={filteredPackages} 
        isFiltered={isFiltered}
        onResetFilters={() => setFilterCriteria(defaultFilters)}
      />
      <Activities />
      <About />
      <Testimonials />
      <Partners />
      <LocationMap />
      <CTA />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;