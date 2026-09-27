"use client";
import React, { useState } from 'react';

export default function Gallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div key={idx} onClick={() => openLightbox(idx)} className="break-inside-avoid rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative">
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md text-[32px]">zoom_in</span>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white z-[101] bg-black/20 p-2 rounded-full">
            <span className="material-symbols-outlined text-[36px]">close</span>
          </button>
          
          <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} className="absolute left-2 md:left-8 text-white/70 hover:text-white z-[101] bg-black/20 p-2 rounded-full">
            <span className="material-symbols-outlined text-[48px]">chevron_left</span>
          </button>
          
          <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} className="absolute right-2 md:right-8 text-white/70 hover:text-white z-[101] bg-black/20 p-2 rounded-full">
            <span className="material-symbols-outlined text-[48px]">chevron_right</span>
          </button>
          
          <img src={images[currentIndex]} className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl" />
          
          <div className="absolute bottom-6 text-white/60 font-body-sm tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
