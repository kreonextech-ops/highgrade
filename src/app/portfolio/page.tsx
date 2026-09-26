import React from 'react';

export const metadata = {
  title: 'Our Portfolio - Highgrade Constructions',
  description: 'View our gallery of ongoing and completed construction and renovation projects.',
};

export default function Portfolio() {
  const images = ["/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.38_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.41_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.44_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.44_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.45_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.45_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.46_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.46_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.48_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.49_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.49_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.51_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.52_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.52_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.55_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.55_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.58_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.58_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM.jpeg","/portfolio/naxalbari_DSC09206.JPG.jpeg","/portfolio/naxalbari_DSC09207.JPG.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.38_PM.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM__1_.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM__2_.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM.jpeg","/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__1_.jpeg","/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__2_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.46_PM__2_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.47_PM__1_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.47_PM.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.48_PM.jpeg"];

  return (
    <main className="min-h-screen bg-surface text-on-surface pt-24 pb-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-3">Our Work</span>
          <h1 className="font-headline-xl text-[40px] lg:text-[56px] text-primary font-bold mb-4">
            Full Portfolio & Gallery
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Browse through our complete collection of site photos, completed projects, renovations, and ongoing construction work across North Bengal.
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden bg-surface-container-low shadow-sm hover:shadow-md transition-shadow group">
              <img 
                src={src} 
                alt={`Portfolio image ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
