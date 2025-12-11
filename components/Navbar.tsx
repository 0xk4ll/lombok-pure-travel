import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky effect a bit earlier
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Paket Wisata', href: '#packages' },
    { name: 'Aktivitas', href: '#activities' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Testimoni', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    // Added 'top-0' or 'top-[40px]' logic depending on design, but typically in WP themes
    // the main nav becomes sticky at top:0 when scrolled.
    // We will place this Navbar RELATIVE initially, then FIXED when scrolled past TopBar height if we wanted exact WP behavior.
    // For simplicity and smoothness in React, we keep it fixed but adjust background.
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-white shadow-md py-3' : 'md:top-[40px] top-0 bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
           <a 
             href="#home" 
             onClick={(e) => handleNavClick(e, '#home')}
             className="flex items-center space-x-2 group"
           >
             <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all">
               <span className="text-white font-heading font-bold text-xl">L</span>
             </div>
             <div className="flex flex-col">
                <span className={`font-heading font-bold text-lg leading-none tracking-wide ${isScrolled || isMobileMenuOpen ? 'text-slate-800' : 'text-white'}`}>
                  LOMBOK <span className="text-emerald-500">PURE</span>
                </span>
                <span className={`text-[0.6rem] uppercase tracking-[0.2em] ${isScrolled || isMobileMenuOpen ? 'text-slate-500' : 'text-gray-300'}`}>
                  Travel Agency
                </span>
             </div>
           </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                isScrolled 
                  ? 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-gray-300/30">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
            >
              <span>Booking Now</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`p-2 rounded-md ${isScrolled || isMobileMenuOpen ? 'text-slate-800 bg-slate-100' : 'text-white bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-bold text-sm uppercase tracking-wider py-4 px-6 border-b border-gray-50 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="p-6 bg-slate-50">
             <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white py-3 rounded-md text-center font-bold block shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <Phone size={18} />
                Hubungi Kami via WA
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;