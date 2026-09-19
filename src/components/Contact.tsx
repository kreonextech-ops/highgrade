"use client"

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
