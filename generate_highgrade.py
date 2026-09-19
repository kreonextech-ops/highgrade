import os

components_dir = 'next-app/src/components'
lib_dir = 'next-app/src/lib'
os.makedirs(components_dir, exist_ok=True)
os.makedirs(lib_dir, exist_ok=True)

# lib/utils.ts
with open(f'{lib_dir}/utils.ts', 'w', encoding='utf-8') as f:
    f.write('''import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
''')

# app/layout.tsx
with open('next-app/src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write('''import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Highgrade Constructions | Premium Civil Engineering",
  description: "Engineering-led residential construction, architectural planning, hill construction, renovations, and turnkey solutions across North Bengal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} antialiased bg-hg-ivory text-hg-charcoal font-sans`}>
        {children}
      </body>
    </html>
  );
}
''')

# app/globals.css
with open('next-app/src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write('''@import "tailwindcss";
@plugin "@tailwindcss/forms";

@theme {
  --color-hg-emerald: #0F4D46;
  --color-hg-ivory: #F8F6F2;
  --color-hg-sand: #D8C3A5;
  --color-hg-copper: #C9822B;
  --color-hg-charcoal: #1F2937;
  
  --font-sans: var(--font-sans);
  --font-serif: var(--font-serif);
}

@layer base {
  body {
    background-color: var(--color-hg-ivory);
    color: var(--color-hg-charcoal);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }
}
''')

# components/Navbar.tsx
with open(f'{components_dir}/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-hg-emerald/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={`font-serif text-2xl font-bold tracking-wider ${scrolled ? 'text-hg-ivory' : 'text-white'}`}>
          HIGHGRADE
        </div>
        
        <div className={`hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-medium ${scrolled ? 'text-hg-ivory/80' : 'text-white/90'}`}>
          <a href="#about" className="hover:text-hg-copper transition-colors">About</a>
          <a href="#services" className="hover:text-hg-copper transition-colors">Services</a>
          <a href="#projects" className="hover:text-hg-copper transition-colors">Projects</a>
          <a href="#process" className="hover:text-hg-copper transition-colors">Process</a>
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className={`px-6 py-3 rounded-sm border ${scrolled ? 'border-hg-copper text-hg-copper hover:bg-hg-copper hover:text-white' : 'border-white text-white hover:bg-white hover:text-hg-emerald'} uppercase text-sm tracking-widest transition-colors`}>
            Book Site Visit
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileMenu(true)}>
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  )
}
''')

# components/Hero.tsx
with open(f'{components_dir}/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
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
''')

# components/About.tsx
with open(f'{components_dir}/About.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-hg-ivory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-hg-emerald leading-tight">We\\'re Engineers Before We\\'re Builders.</h2>
          <div className="w-20 h-1 bg-hg-copper mt-6 mb-8" />
          <p className="text-hg-charcoal/80 text-lg mb-6 leading-relaxed">
            Many homeowners suffer because ordinary contractors compromise on foundational quality. Highgrade was founded in 2018 by passionate civil engineers to solve this exact problem.
          </p>
          <p className="text-hg-charcoal/80 text-lg mb-10 leading-relaxed">
            We don\\'t just build; we engineer. From precise structural calculations to exact material ratios, we deliver construction that stands the test of time, true to architectural intent and IS Code standards.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-hg-sand overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-serif font-bold text-xl text-hg-emerald">Arunav Sharma</p>
              <p className="text-sm text-hg-charcoal/60 uppercase tracking-widest">Founder & Lead Engineer</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-sm overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1541888081622-1dca368e73ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Engineering Planning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hg-emerald/20" />
        </motion.div>
      </div>
    </section>
  )
}
''')

# components/Terrains.tsx
with open(f'{components_dir}/Terrains.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion } from 'framer-motion'

export default function Terrains() {
  return (
    <section className="bg-hg-emerald py-24 text-hg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[700px]">
          
          <motion.div 
            whileHover={{ flex: 1.1 }} transition={{ duration: 0.5 }}
            className="relative rounded-sm overflow-hidden group cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Plains" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-4xl font-serif mb-4 group-hover:text-hg-copper transition-colors">Plains Architecture</h3>
              <p className="text-hg-ivory/80 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
                High-water-table solutions, modern minimalist villas, and commercial complexes engineered for the flat terrains of Siliguri and Terai.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ flex: 1.1 }} transition={{ duration: 0.5 }}
            className="relative rounded-sm overflow-hidden group cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Hills" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-4xl font-serif mb-4 group-hover:text-hg-copper transition-colors">Hill Engineering</h3>
              <p className="text-hg-ivory/80 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
                Seismic-tested cantilever structures, retaining walls, and slope stabilization designed for the challenging landscapes of Darjeeling and Kalimpong.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
''')

# components/Services.tsx
with open(f'{components_dir}/Services.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion } from 'framer-motion'
import { Home, Mountain, PenTool, LayoutTemplate, Box, Maximize3D, Brush, Wrench, ClipboardCheck, Building } from 'lucide-react'

const services = [
  { icon: Building, title: "Turnkey Construction" },
  { icon: Home, title: "Residential Homes" },
  { icon: Mountain, title: "Hill Construction" },
  { icon: PenTool, title: "Architectural Planning" },
  { icon: LayoutTemplate, title: "2D Planning" },
  { icon: Maximize3D, title: "3D Elevation" },
  { icon: Box, title: "Structural Design" },
  { icon: Brush, title: "Interior Design" },
  { icon: Wrench, title: "Renovation" },
  { icon: ClipboardCheck, title: "Project Management" },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-hg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-hg-emerald mb-4">Our Expertise</h2>
          <p className="text-hg-charcoal/70 max-w-2xl mx-auto">Comprehensive civil and architectural solutions under one roof.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 border border-hg-sand/30 hover:border-hg-copper/50 bg-white transition-colors group cursor-default text-center flex flex-col items-center"
            >
              <svc.icon size={32} strokeWidth={1} className="text-hg-emerald group-hover:text-hg-copper mb-4 transition-colors" />
              <h3 className="font-serif text-lg text-hg-charcoal group-hover:text-hg-emerald">{svc.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
''')

# components/Stats.tsx
with open(f'{components_dir}/Stats.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { num: "25+", label: "Projects Completed" },
    { num: "5", label: "Ongoing Projects" },
    { num: "50+", label: "Happy Families" },
    { num: "2018", label: "Established" },
  ]

  return (
    <section className="bg-hg-charcoal py-20 text-hg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="text-5xl md:text-6xl font-serif text-hg-copper mb-2">{stat.num}</div>
            <div className="uppercase tracking-widest text-xs md:text-sm text-hg-ivory/70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
''')

# components/Projects.tsx
with open(f'{components_dir}/Projects.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Expand, Calendar } from 'lucide-react'

const projects = [
  { id: 1, name: "The Zenith Villa", location: "Pradhan Nagar, Siliguri", type: "Turnkey Residential", area: "4,500 sq.ft", year: "2023", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
  { id: 2, name: "Himalayan Retreat", location: "Kurseong Hills", type: "Hill Architecture", area: "3,200 sq.ft", year: "2022", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
  { id: 3, name: "Oasis Commercial", location: "Sevoke Road", type: "Commercial Complex", area: "12,000 sq.ft", year: "2024", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" }
]

export default function Projects() {
  const [active, setActive] = useState(projects[0])

  return (
    <section id="projects" className="py-24 bg-hg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-hg-emerald mb-12 text-center">Featured Works</h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 h-[500px] relative rounded-sm overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={active.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={active.img}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="lg:w-1/3 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={active.id}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-serif text-hg-emerald mb-6">{active.name}</h3>
                
                <div className="space-y-4 mb-8 text-hg-charcoal/80">
                  <div className="flex items-center gap-3 border-b border-hg-sand/30 pb-3">
                    <MapPin className="text-hg-copper" size={20}/>
                    <span>{active.location}</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-hg-sand/30 pb-3">
                    <Expand className="text-hg-copper" size={20}/>
                    <span>{active.area}</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-hg-sand/30 pb-3">
                    <Calendar className="text-hg-copper" size={20}/>
                    <span>{active.year}</span>
                  </div>
                </div>
                
                <span className="inline-block px-4 py-2 bg-hg-sand/20 text-hg-emerald uppercase tracking-widest text-xs font-semibold">
                  {active.type}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-4 mt-10 overflow-x-auto pb-4">
          {projects.map((p) => (
            <button 
              key={p.id}
              onClick={() => setActive(p)}
              className={`relative shrink-0 w-48 h-32 overflow-hidden transition-all duration-300 ${active.id === p.id ? 'ring-2 ring-hg-copper ring-offset-4 ring-offset-hg-ivory' : 'opacity-60 hover:opacity-100'}`}
            >
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
''')

# components/WhyChooseUs.tsx
with open(f'{components_dir}/WhyChooseUs.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion } from 'framer-motion'
import { HardHat, Layers, Activity, FileCheck, Target, UserCheck } from 'lucide-react'

const reasons = [
  { icon: HardHat, title: "Civil Engineer Supervision", desc: "Every site is managed by qualified engineers, not just supervisors." },
  { icon: Layers, title: "Transparent Material Usage", desc: "Complete clarity on brands, ratios, and qualities used." },
  { icon: Activity, title: "Weekly Progress Reports", desc: "Stay updated with digital reports, photos, and timelines." },
  { icon: FileCheck, title: "IS Code Standards", desc: "Strict adherence to Indian Standard codes for structural safety." },
  { icon: Target, title: "Design Accuracy", desc: "100% adherence to architectural drawings and elevations." },
  { icon: UserCheck, title: "Single Point Responsibility", desc: "We manage architects, vendors, and laborers seamlessly." }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-hg-emerald relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl text-hg-ivory mb-16 text-center font-serif">The Highgrade Standard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
            >
              <r.icon className="text-hg-copper mb-6" size={32} />
              <h3 className="text-xl text-hg-ivory font-serif mb-3">{r.title}</h3>
              <p className="text-hg-ivory/70 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
''')

# components/CTA.tsx
with open(f'{components_dir}/CTA.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-hg-sand py-24 text-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl text-hg-emerald font-serif mb-8">Let\\'s Build Your Dream Home.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-10 py-4 bg-hg-emerald text-hg-ivory uppercase tracking-widest text-sm hover:bg-hg-charcoal transition-colors">Book Site Visit</a>
          <a href="tel:+910000000000" className="px-10 py-4 bg-transparent border border-hg-emerald text-hg-emerald uppercase tracking-widest text-sm hover:bg-hg-emerald hover:text-hg-ivory transition-colors">Call Now</a>
        </div>
      </motion.div>
    </section>
  )
}
''')

# components/Contact.tsx
with open(f'{components_dir}/Contact.tsx', 'w', encoding='utf-8') as f:
    f.write('''"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-hg-ivory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif text-hg-emerald mb-8">Start a Conversation</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors" />
              <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors" />
            </div>
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors" />
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Plot Location" className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors" />
              <input type="text" placeholder="Plot Size (sq.ft)" className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors" />
            </div>
            <select className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors text-hg-charcoal/70" defaultValue="">
              <option value="" disabled>Service Required</option>
              <option value="turnkey">Turnkey Construction</option>
              <option value="architecture">Architectural Planning</option>
              <option value="renovation">Renovation</option>
            </select>
            <textarea placeholder="Tell us about your dream project..." rows={4} className="w-full bg-transparent border-b border-hg-charcoal/30 py-3 focus:outline-none focus:border-hg-emerald transition-colors resize-none"></textarea>
            <button className="w-full py-4 bg-hg-copper text-white uppercase tracking-widest text-sm hover:bg-hg-copper/90 transition-colors">Send Enquiry</button>
          </form>
        </div>
        
        <div className="bg-hg-emerald p-10 text-hg-ivory flex flex-col justify-center">
          <h3 className="text-2xl font-serif mb-6 text-hg-copper">Headquarters</h3>
          <p className="mb-8 opacity-80 leading-relaxed">
            Pradhan Nagar,<br/>
            Siliguri, West Bengal 734003<br/>
            India
          </p>
          
          <h3 className="text-2xl font-serif mb-6 text-hg-copper">Direct Lines</h3>
          <p className="mb-2 opacity-80">+91 98765 43210</p>
          <p className="mb-8 opacity-80">+91 98765 43211</p>
          
          <h3 className="text-2xl font-serif mb-6 text-hg-copper">Email</h3>
          <p className="opacity-80">build@highgradeconstructions.com</p>
        </div>
      </div>
    </section>
  )
}
''')

# components/Footer.tsx
with open(f'{components_dir}/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write('''export default function Footer() {
  return (
    <footer className="bg-hg-charcoal text-hg-ivory/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-serif text-2xl font-bold tracking-wider text-hg-ivory mb-6">HIGHGRADE</div>
          <p className="max-w-sm text-sm leading-relaxed">
            Premium civil engineering and residential construction company. Building trust, precision, and luxury across North Bengal.
          </p>
        </div>
        <div>
          <h4 className="text-hg-ivory uppercase tracking-widest text-sm mb-6">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            <li>Siliguri & Bagdogra</li>
            <li>Darjeeling & Kurseong</li>
            <li>Kalimpong</li>
            <li>Dooars & Sikkim</li>
          </ul>
        </div>
        <div>
          <h4 className="text-hg-ivory uppercase tracking-widest text-sm mb-6">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-hg-copper transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-hg-copper transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-hg-copper transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-hg-copper transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-xs text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Highgrade Constructions. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-hg-ivory">Privacy Policy</a>
          <a href="#" className="hover:text-hg-ivory">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
''')

# app/page.tsx
with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write('''import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Terrains from "@/components/Terrains"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import Projects from "@/components/Projects"
import WhyChooseUs from "@/components/WhyChooseUs"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-hg-ivory selection:bg-hg-copper selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Terrains />
      <Services />
      <Stats />
      <Projects />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
''')
