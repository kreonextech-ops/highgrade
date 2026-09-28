"use client";
import { motion } from 'framer-motion';

import React from "react";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#f8f9fa]">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] flex flex-col justify-end overflow-hidden bg-[#0a1514] text-white pt-24 lg:pt-28">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/heroes/services_hero.jpg')",
            }}
          ></div>
          </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col items-start drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/60 mb-8 bg-white/10 px-4 py-2 rounded-md backdrop-blur-sm border border-white/10 w-fit">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-white">Services</span>
            </div>

            {/* Category */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#fea12b]"></span>
              <span className="font-semibold text-sm uppercase tracking-widest text-[#fea12b]">
                OUR SERVICES
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[44px] sm:text-[58px] lg:text-[64px] text-white leading-[1.1] tracking-tight mb-6 font-bold">
              Complete Construction Solutions <span className="italic font-normal text-[#fea12b]">Under One Roof.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 max-w-xl leading-relaxed mb-8">
              From planning to execution, we deliver end-to-end construction solutions across plains and hills. Residential, commercial, industrial or turnkey — we build spaces that last.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 bg-[#fea12b] hover:bg-[#ffaa3b] text-[#0a1514] px-6 py-3.5 rounded-md font-bold transition-all duration-300"
                href="#consultation"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                href="#team"
              >
                <span className="font-semibold">Consult Our Team</span>
              </a>
            </div>
          </div>
          
          {/* Cursive Text */}
          <div className="absolute right-8 top-1/3 hidden lg:block opacity-80 transform rotate-[-5deg]">
             <span className="font-['Playfair_Display'] italic text-5xl text-white">Spaces <br/>for a Better <br/>Tomorrow</span>
          </div>
        </div>
      </section>

      {/* STATS RIBBON */}
      <div className="w-full bg-[#0d1f1c] border-t border-white/10 py-8 relative z-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-x divide-white/10">
            <div className="flex items-center gap-4 pl-0">
              <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center shrink-0 text-[#fea12b] bg-white/5">
                <span className="material-symbols-outlined text-[24px]">person</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">8+</div>
                <div className="text-sm text-white/60">Years of Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-6 lg:pl-8">
              <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center shrink-0 text-[#fea12b] bg-white/5">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">50+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-6 lg:pl-8">
              <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center shrink-0 text-[#fea12b] bg-white/5">
                <span className="material-symbols-outlined text-[24px]">landscape</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">Dual</div>
                <div className="text-sm text-white/60">Expertise in Plains & Hills</div>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-6 lg:pl-8">
              <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center shrink-0 text-[#fea12b] bg-white/5">
                <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">End-to-End</div>
                <div className="text-sm text-white/60">From Design to Handover</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES GRID SECTION */}
<section className="w-full py-16 lg:py-24 bg-[#fbfbfa] text-on-surface relative overflow-hidden" id="services">
  {/* Abstract Mountain/Drawing Background Placeholder */}
  <div className="absolute top-0 left-0 w-full h-[500px] opacity-40 pointer-events-none">
     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale mix-blend-multiply"></div>
     <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfa]/40 via-[#fbfbfa]/80 to-[#fbfbfa]"></div>
  </div>

  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Header Section */}
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-label-caps text-[12px] uppercase text-[#a06834] font-bold tracking-widest">Our Core Services</span>
        <div className="w-16 h-[2px] bg-[#d5a05b]"></div>
      </div>
      <h2 className="font-headline-xl text-[40px] lg:text-[56px] text-primary font-bold mb-4 leading-[1.1]">
        Complete Construction <br className="hidden sm:block"/><span className="text-[#a06834]">Solutions Under One Roof</span>
      </h2>
      <p className="text-[15px] lg:text-[16px] text-on-surface-variant max-w-3xl leading-relaxed mb-10">
        From concept to completion, HighGrade delivers end-to-end construction solutions with engineering expertise, modern design, and uncompromising quality.
      </p>

      {/* 4 Trust Badges */}
      <div className="flex flex-wrap items-center gap-6 lg:gap-12">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a06834] text-[28px]">groups</span>
          <div className="flex flex-col">
             <span className="font-bold text-primary text-[13px]">One Team</span>
             <span className="text-[11px] text-on-surface-variant font-medium">Design to Delivery</span>
          </div>
        </div>
        <div className="hidden sm:block w-[1px] h-8 bg-black/10"></div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a06834] text-[28px]">settings</span>
          <div className="flex flex-col">
             <span className="font-bold text-primary text-[13px]">End-to-End Support</span>
             <span className="text-[11px] text-on-surface-variant font-medium">Hassle-Free Execution</span>
          </div>
        </div>
        <div className="hidden sm:block w-[1px] h-8 bg-black/10"></div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a06834] text-[28px]">verified_user</span>
          <div className="flex flex-col">
             <span className="font-bold text-primary text-[13px]">Quality Assurance</span>
             <span className="text-[11px] text-on-surface-variant font-medium">Built to Last</span>
          </div>
        </div>
        <div className="hidden sm:block w-[1px] h-8 bg-black/10"></div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a06834] text-[28px]">landscape</span>
          <div className="flex flex-col">
             <span className="font-bold text-primary text-[13px]">Built for North Bengal</span>
             <span className="text-[11px] text-on-surface-variant font-medium">Plains & Hills Expertise</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bento Box Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
       
      {[
        { num: "01", title: "Turnkey\nConstruction", desc: "Complete end-to-end residential and commercial construction solutions.", icon: "home", img: "/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.42_PM__1_.jpeg", cols: "col-span-12 md:col-span-5", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "02", title: "Residential\nHomes", desc: "Modern villas, independent houses and family homes built for lasting generations.", icon: "cottage", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "03", title: "Hill\nArchitecture", desc: "Engineered for slopes and mountain terrain with specialized techniques.", icon: "landscape", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "04", title: "Architectural\nPlanning", desc: "Functional, aesthetic and site-specific space planning.", icon: "architecture", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "05", title: "2D Floor\nPlans", desc: "Accurate technical planning drawings for approvals and execution.", icon: "draw", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "06", title: "3D Elevation\nDesign", desc: "Realistic exterior visualization to help you see your dream before construction.", icon: "view_in_ar", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "07", title: "Structural\nDesign", desc: "Safe RCC and steel structural solutions with precision.", icon: "foundation", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "08", title: "Interior\nDesign", desc: "Elegant and practical interiors that match your lifestyle.", icon: "chair", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "09", title: "Renovation &\nRemodeling", desc: "Upgrade and transform existing spaces beautifully and efficiently.", icon: "handyman", img: "/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__1_.jpeg", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "10", title: "Project\nManagement", desc: "Quality control, timeline management and budget supervision.", icon: "assignment", img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" }
      ].map((srv, index) => {
         const isGreen = index % 2 === 0;
         
         // Fix 1: Make gradient only cover ~50% of the card and lower the opacity
         const gradientOverlay = isGreen 
            ? "from-[#0c2a25]/90 via-[#0c2a25]/60 via-40% to-transparent to-60%"
            : "from-[#F59A23]/90 via-[#F59A23]/60 via-40% to-transparent to-60%";
            
         // Fix 2: Improve contrast on orange background by using dark text
         const titleColor = isGreen ? "text-white" : "text-gray-900";
         const descColor = isGreen ? "text-white/80" : "text-gray-800";
         const numColor = isGreen ? "text-[#d5a05b]" : "text-gray-900";
         const iconColor = isGreen ? "text-white" : "text-gray-900";
         const arrowClass = isGreen 
            ? "border-white/50 text-white hover:bg-white hover:text-[#0c2a25]" 
            : "border-gray-900/30 text-gray-900 hover:bg-gray-900 hover:text-[#F59A23]";

         return (
           <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (index%3)*0.1 }} className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${srv.h} bg-black/5 ${srv.cols}`}>
             
             {/* Image now stretches full width but is overlayed by the gradient */}
             <div className="absolute inset-0 overflow-hidden w-full">
               <div className={`absolute inset-0 bg-gradient-to-r ${gradientOverlay} z-10`} />
               <img src={srv.img} alt={srv.title.replace(/\\n/g, ' ')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>

             {/* Constrain text width so it doesn't bleed into the transparent right side */}
             <div className="relative z-20 h-full p-6 lg:p-7 flex flex-col items-start w-[85%] sm:w-[65%] lg:w-[55%]">
               <div className="flex items-center gap-3 mb-3">
                  <span className={`font-bold text-sm ${numColor}`}>{srv.num}</span>
                  <span className={`material-symbols-outlined ${iconColor}`}>{srv.icon}</span>
               </div>
               <h3 className={`text-[20px] lg:text-[22px] font-bold leading-[1.1] mb-2 whitespace-pre-line ${titleColor}`}>{srv.title.replace(/\\n/g, '\n')}</h3>
               <p className={`text-[12px] lg:text-[13px] leading-relaxed mb-auto pr-2 ${descColor}`}>{srv.desc}</p>
               <a href="/portfolio" className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors mt-3 ${arrowClass}`}>
                 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
               </a>
             </div>
           </motion.div>
         );
      })}
    </div>
  </div>
</section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="w-full bg-[#f4f3f0] py-0 flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-auto">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="House exterior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
          <div className="absolute top-1/4 right-8 transform rotate-[-5deg] z-10 hidden lg:block">
             <span className="font-['Playfair_Display'] italic text-5xl text-[#0d1f1c]">Building <br/>Spaces That <br/>Matter</span>
          </div>
        </div>
        <div className="lg:w-[60%] py-20 px-8 lg:px-16 xl:px-24">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">WHY CHOOSE OUR SERVICES</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1f1c] mb-12">Built on Expertise.<br/>Delivered with Commitment.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">apartment</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">End-to-End Solutions</h3>
              <p className="text-gray-600 text-sm">From design to handover, we manage everything.</p>
            </div>
            
            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">landscape</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">Plains & Hills Expertise</h3>
              <p className="text-gray-600 text-sm">Unique experience across diverse terrains.</p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">Quality & Safety</h3>
              <p className="text-gray-600 text-sm">Adherence to highest standards and safety practices.</p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">Timely Execution</h3>
              <p className="text-gray-600 text-sm">Efficient project management for on-time delivery.</p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">Clear communication with no hidden costs.</p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#0d1f1c] mb-4 border border-gray-200">
                <span className="material-symbols-outlined text-[24px]">energy_savings_leaf</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2">Sustainable Approach</h3>
              <p className="text-gray-600 text-sm">Environment-friendly and future-ready construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-16 bg-[#0a1514] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2 block">LET'S BUILD TOGETHER</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Discuss Your Project?</h2>
              <p className="text-white/80">
                Whether it's a home in the city, a commercial space in the plains, or a dream project in the hills — our team is here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
              <a
                className="inline-flex items-center justify-center gap-2 bg-[#fea12b] hover:bg-[#ffaa3b] text-[#0a1514] px-8 py-4 rounded-md font-bold transition-all duration-300 w-full sm:w-auto"
                href="#quote"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm text-white/60">Or Call Us</span>
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span className="font-bold">+91 70764 23578</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}