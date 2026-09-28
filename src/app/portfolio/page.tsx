import React from 'react';
import type { Metadata } from 'next';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: "Portfolio & Gallery",
  description:
    "Browse 50+ construction projects by HighGrade Constructions — residential homes, commercial complexes, renovations and hill architecture across Siliguri and Darjeeling.",
  keywords: [
    "construction portfolio Siliguri",
    "construction gallery North Bengal",
    "residential project photos Siliguri",
    "HighGrade Constructions projects",
    "renovation gallery Siliguri",
  ],
  openGraph: {
    title: "Portfolio & Gallery | HighGrade Constructions",
    description: "Browse 50+ construction projects across Siliguri and Darjeeling.",
    url: "https://highgrade-one.vercel.app/portfolio",
  },
  alternates: {
    canonical: "https://highgrade-one.vercel.app/portfolio",
  },
};


export default function Portfolio() {
  const images = ["/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.38_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.41_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.42_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.43_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.44_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.44_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.45_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.45_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.46_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.46_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.48_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.49_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.49_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.50_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.51_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.52_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.52_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.53_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.54_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.55_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.55_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.56_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.57_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.58_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.58_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.57.59_PM.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM__1_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM__2_.jpeg","/portfolio/gallery_WhatsApp_Image_2026-09-10_at_1.58.00_PM.jpeg","/portfolio/naxalbari_DSC09206.JPG.jpeg","/portfolio/naxalbari_DSC09207.JPG.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.38_PM.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM__1_.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM__2_.jpeg","/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM.jpeg","/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__1_.jpeg","/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__2_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.46_PM__2_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.47_PM__1_.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.47_PM.jpeg","/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.48_PM.jpeg"];

  return (
    <main className="min-h-screen bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col justify-end overflow-hidden bg-surface text-white pt-24 lg:pt-28">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/heroes/portfolio_hero.jpg')" }}></div>
        </div>
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl flex flex-col items-start drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-4 sm:mb-6 border-l-4 border-secondary pl-4">
              Our Work
            </span>
            <h1 className="font-headline-xl text-[40px] lg:text-[56px] text-white font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Full Portfolio & Gallery
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl leading-relaxed">
              Browse through our complete collection of site photos, completed projects, renovations, and ongoing construction work across North Bengal.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <Gallery images={images} />
      </div>
    </main>
  );
}
