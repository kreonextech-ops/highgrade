"use client"
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
