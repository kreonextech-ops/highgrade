"use client"
import { motion } from 'framer-motion'
import { ShieldCheck, HardHat, Building2, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-hg-emerald/60 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-hg-emerald/90 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-hg-ivory leading-tight max-w-4xl"
        >
          Building Homes with <span className="text-hg-copper italic">Engineering Precision.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-hg-ivory/90 max-w-2xl font-light"
        >
          Engineering-led residential construction, architectural planning, hill construction, renovations, and turnkey solutions across North Bengal.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-hg-copper text-white uppercase tracking-widest text-sm font-medium hover:bg-hg-copper/90 transition-all">Book Free Site Visit</a>
          <a href="#projects" className="px-8 py-4 bg-transparent border border-hg-ivory text-hg-ivory uppercase tracking-widest text-sm font-medium hover:bg-hg-ivory hover:text-hg-emerald transition-all">Explore Projects</a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 w-full z-20 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-hg-ivory/80 text-sm">
          <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-hg-copper"/> IS Code Based</div>
          <div className="flex items-center gap-2"><HardHat size={20} className="text-hg-copper"/> Civil Engineer Led</div>
          <div className="flex items-center gap-2"><Building2 size={20} className="text-hg-copper"/> 25+ Projects</div>
          <div className="flex items-center gap-2"><BookOpen size={20} className="text-hg-copper"/> Since 2018</div>
        </div>
      </motion.div>
    </section>
  )
}
