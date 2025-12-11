import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or interaction
    alert('Terima kasih! Email Anda telah terdaftar di newsletter kami.');
  };

  return (
    <footer className="bg-navy-900 text-white pt-20 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="inline-block">
               <h3 className="font-heading font-bold text-2xl tracking-tight">
                 LOMBOK <span className="text-emerald-500">PURE</span>
               </h3>
               <div className="h-1 w-1/2 bg-emerald-600 mt-2 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Partner perjalanan wisata terbaik Anda di Lombok & Gili Islands. Mengutamakan kenyamanan, keamanan, dan pengalaman autentik sejak 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded bg-white/5 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"><Facebook size={16} /></a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all duration-300"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links (Menu Widget) */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Navigasi
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-800">›</span> Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#packages" 
                  onClick={(e) => handleNavClick(e, 'packages')}
                  className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-800">›</span> Paket Wisata
                </a>
              </li>
              <li>
                <a 
                  href="#activities" 
                  onClick={(e) => handleNavClick(e, 'activities')}
                  className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-800">›</span> Daily Trip
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-800">›</span> Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Icon List Widget) */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Hubungi Kami
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-1 bg-white/5 p-1.5 rounded text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                   <MapPin size={14} />
                </div>
                <a 
                  href="https://goo.gl/maps/search/Jl.+Pariwisata+Pantai+Kuta,+Lombok+Tengah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-gray-300 transition-colors leading-relaxed"
                >
                  Jl. Pariwisata Pantai Kuta, Lombok Tengah, NTB, Indonesia.
                </a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-white/5 p-1.5 rounded text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                   <Phone size={14} />
                </div>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="group-hover:text-gray-300 transition-colors">+62 877-6593-6377</a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-white/5 p-1.5 rounded text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                   <Mail size={14} />
                </div>
                <a href="mailto:hello@lombokpuretravel.com" className="group-hover:text-gray-300 transition-colors">hello@lombokpuretravel.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Form Widget) */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">Dapatkan promo eksklusif dan info wisata terbaru langsung ke email Anda.</p>
            <form className="flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                required
                placeholder="Alamat Email Anda" 
                className="bg-navy-800 border border-gray-700 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                <Send size={14} /> Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Lombok Pure Travel. Built with Passion.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 font-medium uppercase tracking-wider">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;