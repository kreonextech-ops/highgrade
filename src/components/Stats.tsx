"use client"
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
