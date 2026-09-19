"use client";

import React from 'react';

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#fcfdfd]">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-center overflow-hidden bg-[#0a1514] text-white pt-28 pb-20 lg:pt-36 lg:pb-32 min-h-[600px]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD3k7NNizLwSjG6eYMxmm3rjt9_bW4Zvy-Q4knjQ9LO7a4GRw-CNcqhK9LI8VvvPqwUdBdNiT_Pb1ka2q0_ktPyiDQxTtcWn-l14G4qDIQPimmOCkPLC_fJ7xnIesPCWFefFUGV7wlz8GUW7dCXsjIAIrwLLQ34VM75QTg31ojzur_zgw--UPVpBciY4jbIxHbaknTIhncdQUOj0vVGD8tPdoR-9lpmujJMnYtsQWYhuzkcfBB2P9x')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1514] via-[#0a1514]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="max-w-2xl flex flex-col items-start">
            <div className="text-[12px] uppercase tracking-[0.25em] text-white/90 mb-5 font-bold">OUR PORTFOLIO</div>
            <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] text-white leading-[1.1] tracking-tight mb-6 font-extrabold">
              Spaces That<br/>Speak for <span className="italic text-[#fea12b]" style={{ fontFamily: "'Playfair Display', serif" }}>Themselves.</span>
            </h1>
            <p className="text-[16px] text-white/90 max-w-lg leading-relaxed mb-8">
              A showcase of our work across the plains and hills — residential, commercial, industrial and turnkey projects that reflect our commitment to quality, design and enduring value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="inline-flex items-center gap-2 bg-[#fea12b] hover:bg-[#ffb047] text-[#0a1514] text-[15px] px-8 py-4 rounded font-bold transition-all" href="#projects">
                <span>Explore Projects</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a className="inline-flex items-center gap-2 px-8 py-4 rounded border border-white/30 hover:bg-white/10 text-white text-[15px] transition-all font-semibold" href="#">
                Discuss Your Project
              </a>
            </div>
          </div>
          <div className="hidden lg:block pt-4">
            <div className="text-[64px] leading-[1.1] text-white/90 italic drop-shadow-lg text-right" style={{ fontFamily: "'Playfair Display', serif" }}>
              From<br/>Vision to<br/>Reality
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-6 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            <div className="flex items-center justify-center gap-4 py-4 md:py-0 w-full md:w-auto md:flex-1">
              <div className="w-16 h-16 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px] text-[#0e1e1b]">corporate_fare</span>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#0e1e1b]">100<span className="text-[#fea12b]">+</span></div>
                <div className="text-[14px] text-gray-500 font-medium">Projects Completed</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 md:py-0 w-full md:w-auto md:flex-1">
              <div className="w-16 h-16 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px] text-[#0e1e1b]">location_on</span>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#0e1e1b]">2</div>
                <div className="text-[14px] text-gray-500 font-medium">Regions Covered<br/>(Plains &amp; Hills)</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 md:py-0 w-full md:w-auto md:flex-1">
              <div className="w-16 h-16 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px] text-[#0e1e1b]">groups</span>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#0e1e1b]">25<span className="text-[#fea12b]">+</span></div>
                <div className="text-[14px] text-gray-500 font-medium">Expert Team Members</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 md:py-0 w-full md:w-auto md:flex-1">
              <div className="w-16 h-16 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px] text-[#0e1e1b]">workspace_premium</span>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#0e1e1b]">2018</div>
                <div className="text-[14px] text-gray-500 font-medium">Year of Establishment</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 lg:py-28 bg-[#f9fbfb]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div className="max-w-md">
              <span className="text-[13px] uppercase text-[#fea12b] font-bold tracking-[0.2em] block mb-3">OUR WORK</span>
              <h2 className="text-[40px] text-[#0e1e1b] font-extrabold">Featured Projects</h2>
            </div>
            <div className="flex-1 max-w-xl">
              <p className="text-[16px] text-gray-600 mb-6 lg:mb-0 leading-relaxed">
                Every project tells a story — of people, places and possibilities. Explore a selection of our completed and ongoing projects across diverse terrains and sectors.
              </p>
            </div>
            <div>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 text-[15px] text-[#0e1e1b] font-semibold transition-all">
                View All Projects <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-[#0e1e1b] text-white font-semibold transition-all">All Projects</button>
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-all shadow-sm">Residential</button>
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-all shadow-sm">Commercial</button>
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-all shadow-sm">Industrial</button>
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-all shadow-sm">Hill Projects</button>
            <button className="px-6 py-2.5 rounded-full text-[14px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-all shadow-sm">Turnkey Projects</button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            <ProjectCard 
              tag="RESIDENTIAL"
              title="Modern Hill Residence"
              location="Kalimpong, West Bengal"
              desc="A contemporary home blending modern design with the natural beauty of the hills."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBD3k7NNizLwSjG6eYMxmm3rjt9_bW4Zvy-Q4knjQ9LO7a4GRw-CNcqhK9LI8VvvPqwUdBdNiT_Pb1ka2q0_ktPyiDQxTtcWn-l14G4qDIQPimmOCkPLC_fJ7xnIesPCWFefFUGV7wlz8GUW7dCXsjIAIrwLLQ34VM75QTg31ojzur_zgw--UPVpBciY4jbIxHbaknTIhncdQUOj0vVGD8tPdoR-9lpmujJMnYtsQWYhuzkcfBB2P9x"
            />
            <ProjectCard 
              tag="COMMERCIAL"
              title="The Zenith Business Complex"
              location="Siliguri, West Bengal"
              desc="A modern commercial space designed for growth and functionality."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vq25ih54HzQ8bNdFkoJAGMEBKKIKucUkLIh39Zh5MVLzAQRIzvF7g6T5rOHNf__jmUG70UKTTV3mhDW4T3yVN0RfwyX9PvR6TzyjpC-JcuH8KR0uAZubGlg5u1VZkbbFMfoCsxdh5PU0xhHzBwQhxPba5vv8XycpeQ4XpVEeLV9j8Nirm7HfBsSi5A-3apjdd9iBOiaUSTXBZJnZAYgFYcTUe2S87ewSZ2t1lQXXgWNUg3EicVeV"
            />
            <ProjectCard 
              tag="HILL PROJECTS"
              title="Pine View Luxury Retreat"
              location="Darjeeling, West Bengal"
              desc="A premium retreat built with sustainable practices and local aesthetics."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDW8KLn3-wwIJGLIC9isfCmse_9eIDowQvNxrQaqZDHwS8gllpTV-E4kXJVGVc1hBf9E_8iSegN6XCkswYpIn0s-0lcJ0eiUIzQksZ8qwFbyCOj2JAtTsLX8tekCNwVmaYjAP9YYv0USrOTvSNOex51Dr1-udbJCb9DR9NYCP0PelEtsl5YleDLkLUFZO86mbbASMxJUEK6gCaZFP6KsRjlv5g2To2X_qhm_uaXfOyf1rTEQlL_kGjn"
            />
            <ProjectCard 
              tag="INDUSTRIAL"
              title="Eastern Logistics Warehouse"
              location="Siliguri, West Bengal"
              desc="A robust industrial facility built for efficiency and scalability."
              img="https://images.unsplash.com/photo-1586528116311-ad8ed7c15944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              tag="TURNKEY PROJECTS"
              title="Riverside Villa"
              location="Teesta, West Bengal"
              desc="A complete turnkey project — from design to handover."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBKQsmtCoRK71uSEu9LEtVIFWxrkwl_gIZBgoEjRiCE28KYHG8pBlW9lo8d2xVSQyuF4sa13RO8zdT03UvysA58P6Ws016pKYvd6SLa14Ids2BtagRrNjfDQ_LtSq0ru7K-6wNJp-g2cka-bPuOOE8X67kCPnMgGCHr15nJPUxMEhYKE3eMkdnXPKJdOUNxYF2ICwoP0PtxOj8lH1qc3FYiniBQa8Rvxe3RFSK4cW7DKvjn-bQM8kk3"
            />
            <ProjectCard 
              tag="INSTITUTIONAL"
              title="Greenwood School Block"
              location="Siliguri, West Bengal"
              desc="A functional and eco-friendly educational infrastructure."
              img="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 lg:py-28 bg-[#0a1514] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1514]/95 via-[#0a1514]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 block mb-4 font-bold">TURNING IDEAS INTO LANDMARKS</span>
            <h2 className="text-[36px] sm:text-[48px] font-extrabold mb-5">Have a Project in Mind?</h2>
            <p className="text-[16px] text-white/80 mb-8 leading-relaxed max-w-md">
              Let's create spaces that inspire. From concept to completion, we're with you at every step.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="inline-flex items-center gap-2 bg-[#fea12b] hover:bg-[#ffb047] text-[#0a1514] text-[15px] px-8 py-4 rounded font-bold transition-all" href="#">
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a className="inline-flex items-center gap-2 px-8 py-4 rounded border border-white/30 hover:bg-white/10 text-white text-[15px] transition-all font-semibold" href="#">
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="hidden lg:block text-right pr-12">
            <div className="text-[52px] leading-[1.2] italic text-white/90 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
              Different<br/>Terrains<br/>Stronger<br/>Together
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 lg:py-28 bg-[#fcfdfd]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[13px] uppercase text-[#fea12b] font-bold tracking-[0.2em] block mb-3">CLIENT STORIES</span>
              <h2 className="text-[40px] text-[#0e1e1b] font-extrabold">What Our Clients Say</h2>
            </div>
            <div>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 text-[15px] text-[#0e1e1b] font-semibold transition-all">
                View All Testimonials <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Highgrade helped us build our dream home in the hills. Their professionalism and attention to detail were exceptional."
              name="Mr. Rohan Thapa"
              title="Homeowner, Kalimpong"
              img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard 
              quote="We appreciated their transparent communication and timely delivery. Truly a reliable partner."
              name="Ms. Priya Agarwal"
              title="Business Owner, Siliguri"
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard 
              quote="From design to execution, the entire team was supportive. The quality of work speaks for itself."
              name="Dr. Anirban Sen"
              title="Institutional Client, Siliguri"
              img="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

    </main>
  );
}

function ProjectCard({ tag, title, location, desc, img }: { tag: string, title: string, location: string, desc: string, img: string }) {
  return (
    <div className="group flex flex-col bg-transparent">
      <div className="relative aspect-[4/3] overflow-hidden rounded mb-5">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 bg-white text-[#0e1e1b] text-[10px] uppercase tracking-widest font-bold shadow-sm rounded-sm">
            {tag}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-[22px] text-[#0e1e1b] font-extrabold mb-2">{title}</h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-[13px] font-medium mb-3">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          <span>{location}</span>
        </div>
        <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
          {desc}
        </p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center gap-1.5 text-[14px] text-[#0e1e1b] font-bold group-hover:text-[#fea12b] transition-colors">
            View Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, title, img }: { quote: string, name: string, title: string, img: string }) {
  return (
    <div className="p-8 rounded bg-white shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="text-[#0e1e1b] mb-6 bg-[#eaf1f0] w-10 h-10 flex items-center justify-center rounded">
        <span className="material-symbols-outlined text-[24px]">format_quote</span>
      </div>
      <p className="text-[#0e1e1b] mb-8 flex-1 leading-relaxed text-[15px]">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="text-[14px] font-bold text-[#0e1e1b]">{name}</div>
          <div className="text-[12px] text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  )
}