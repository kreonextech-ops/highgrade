"use client"
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-hg-sand py-24 text-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl text-hg-emerald font-serif mb-8">Let\'s Build Your Dream Home.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-10 py-4 bg-hg-emerald text-hg-ivory uppercase tracking-widest text-sm hover:bg-hg-charcoal transition-colors">Book Site Visit</a>
          <a href="tel:+910000000000" className="px-10 py-4 bg-transparent border border-hg-emerald text-hg-emerald uppercase tracking-widest text-sm hover:bg-hg-emerald hover:text-hg-ivory transition-colors">Call Now</a>
        </div>
      </motion.div>
    </section>
  )
}
