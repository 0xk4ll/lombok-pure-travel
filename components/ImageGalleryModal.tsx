import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || images.length === 0) return null;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        {/* Main Image Container */}
        <div 
          className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode='wait'>
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt={`Gallery image ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-widest text-sm">
             {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGalleryModal;
