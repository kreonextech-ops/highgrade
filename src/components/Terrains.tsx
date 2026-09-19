"use client"
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
