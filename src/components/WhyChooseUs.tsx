"use client"
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
