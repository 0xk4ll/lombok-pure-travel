import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="hidden md:block bg-navy-900 text-gray-300 text-xs py-2 border-b border-white/10 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href={`mailto:hello@lombokpuretravel.com`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Mail size={14} />
            <span>hello@lombokpuretravel.com</span>
          </a>
          <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Phone size={14} />
            <span>+62 877-6593-6377</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline opacity-60">Follow Us:</span>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;