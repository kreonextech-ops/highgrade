"use client"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-hg-ivory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-hg-emerald leading-tight">We\'re Engineers Before We\'re Builders.</h2>
          <div className="w-20 h-1 bg-hg-copper mt-6 mb-8" />
          <p className="text-hg-charcoal/80 text-lg mb-6 leading-relaxed">
            Many homeowners suffer because ordinary contractors compromise on foundational quality. Highgrade was founded in 2018 by passionate civil engineers to solve this exact problem.
          </p>
          <p className="text-hg-charcoal/80 text-lg mb-10 leading-relaxed">
            We don\'t just build; we engineer. From precise structural calculations to exact material ratios, we deliver construction that stands the test of time, true to architectural intent and IS Code standards.
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
