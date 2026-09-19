"use client"
import { motion } from 'framer-motion'
import { Home, Mountain, PenTool, LayoutTemplate, Box, BoxSelect, Brush, Wrench, ClipboardCheck, Building } from 'lucide-react'

const services = [
  { icon: Building, title: "Turnkey Construction" },
  { icon: Home, title: "Residential Homes" },
  { icon: Mountain, title: "Hill Construction" },
  { icon: PenTool, title: "Architectural Planning" },
  { icon: LayoutTemplate, title: "2D Planning" },
  { icon: BoxSelect, title: "3D Elevation" },
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
