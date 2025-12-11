import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const FloatingWidgets: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Scroll To Top - Typical WP Theme Feature */}
      <button
        onClick={scrollTop}
        className={`bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-md shadow-lg transition-all duration-300 transform ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp Widget - Ubiquitous in Indo Travel Sites */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center p-0 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1"
      >
        <div className="bg-[#25D366] text-white p-3.5 rounded-full flex items-center justify-center relative">
           {/* Ping Animation */}
           <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
           <MessageCircle size={28} className="relative z-10" fill="white" />
        </div>
        
        {/* Tooltip on Hover */}
        <div className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold pointer-events-none">
          Chat WhatsApp
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -mt-1.5 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingWidgets;