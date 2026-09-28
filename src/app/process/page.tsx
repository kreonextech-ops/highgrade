"use client";
import { motion } from 'framer-motion';

import Link from "next/link";
import Image from "next/image";

export default function Process() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-between overflow-hidden bg-[#0a1514] text-white pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/heroes/process_hero.jpg')" }}></div>
          </div>

        {/* Ambient Lighting */}
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[650px] h-[400px] bg-primary/25 blur-[140px] rounded-full pointer-events-none"></div>

        {/* Hero Content Vessel */}
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col items-start relative">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 font-body-sm text-[13px] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-white">Process</span>
            </div>

            {/* Category Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#fea12b] font-bold">
                OUR PROCESS
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display-hero text-[44px] sm:text-[58px] lg:text-[72px] text-white leading-[1.05] tracking-tight mb-6">
              From Vision <br/>
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#fea12b] to-[#f57c00]">
                to Reality.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-subheading-editorial text-subheading-editorial text-outline-variant max-w-xl leading-relaxed mb-8">
              A transparent, structured and collaborative process to bring your dream space to life — across plains and hills.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Link href="#consultation" className="inline-flex items-center gap-2 bg-[#F59A23] hover:bg-[#ffaa3b] text-on-secondary-fixed font-label-md text-label-md px-6 py-3.5 rounded-xl font-bold shadow-[0_8px_20px_rgba(245,154,35,0.25)] transition-all duration-300 group">
                <span>Start Your Project</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <Link href="tel:+917076423578" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white transition-all duration-300 group">
                <span className="font-label-md text-label-md font-semibold">Talk to Our Team</span>
              </Link>
            </div>
            
            {/* Right side script text (absolute on md+) */}
            <div className="hidden lg:block absolute right-[-200px] top-10 transform rotate-[-5deg] opacity-80">
                <span className="font-display-hero italic text-5xl text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>Thoughtfully<br/>Planned,<br/>Beautifully<br/>Built.</span>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Ribbon */}
      <div className="relative z-20 w-full bg-[#081211] border-y border-white/10 py-6">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-x divide-white/10">
            <div className="flex flex-col gap-1 items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#fea12b] mb-1">domain</span>
              <div className="font-headline-sm text-lg text-white font-bold">25+</div>
              <div className="font-body-sm text-xs text-white/60">Projects Completed</div>
            </div>
            <div className="flex flex-col gap-1 items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#fea12b] mb-1">location_on</span>
              <div className="font-headline-sm text-lg text-white font-bold">2</div>
              <div className="font-body-sm text-xs text-white/60">Regions We Serve<br/>(Plains & Hills)</div>
            </div>
            <div className="flex flex-col gap-1 items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#fea12b] mb-1">account_tree</span>
              <div className="font-headline-sm text-lg text-white font-bold">End-to-End</div>
              <div className="font-body-sm text-xs text-white/60">Project Management</div>
            </div>
            <div className="flex flex-col gap-1 items-center text-center px-4">
              <span className="material-symbols-outlined text-[28px] text-[#fea12b] mb-1">verified</span>
              <div className="font-headline-sm text-lg text-white font-bold">On-Time</div>
              <div className="font-body-sm text-xs text-white/60">Delivery Commitment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
<section className="relative w-full py-16 lg:py-24 bg-[#fdfcf8] text-[#0c2a25] overflow-hidden" id="process">
        {/* Background Sketch (House & Sun) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full mix-blend-multiply pointer-events-none z-0">
          {/* Faint Sun */}
          <div className="absolute top-[-50px] right-[20%] w-[400px] h-[400px] bg-[#fcecd4] rounded-full blur-[60px] opacity-80 z-0"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf8] via-transparent to-transparent z-10"></div>
          
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale opacity-[0.15] relative z-0" alt="Background House Sketch" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-16 lg:mb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-label-caps text-[11px] uppercase text-[#a06834] font-bold tracking-widest block">Our Process</span>
                <div className="h-[1px] w-12 bg-[#a06834]/50"></div>
              </div>
              <h2 className="font-headline-xl text-[38px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.05] mb-4">
                From Concept to <span className="text-[#a06834]">Creation</span>
              </h2>
              <p className="font-body-md text-[14px] lg:text-[15px] text-[#0c2a25]/70 leading-relaxed max-w-lg">
                A clear, disciplined progression for a stronger tomorrow. We follow a structured process to ensure quality, transparency, and timely delivery in every project.
              </p>
            </div>
            {/* Right floating quote */}
            <div className="hidden lg:flex items-start border-l-[3px] border-[#a06834] pl-5 mt-6 lg:mt-8">
               <p className="italic font-serif text-[20px] lg:text-[22px] text-[#0c2a25]/80 max-w-[280px] leading-tight">
                 A clear, disciplined progression for a stronger tomorrow.
               </p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative w-full">

             {/* The 7 Steps Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-12 gap-x-0 relative z-10">
                
                {[
                  { num: "01", title: "Consultation &\nSite Visit", desc: "Understanding your vision, land conditions, and specific project requirements to set a solid foundation for the entire build.", color: "green", icon: "forum" },
                  { num: "02", title: "Planning &\nEstimation", desc: "Rigorous budget planning, resource allocation, and technical feasibility analysis to ensure no hidden surprises.", color: "gold", icon: "article" },
                  { num: "03", title: "Architectural\nDesign", desc: "Drafting highly detailed 2D layouts and producing premium 3D elevations for perfect visualization before execution.", color: "green", icon: "view_in_ar" },
                  { num: "04", title: "Structural\nEngineering", desc: "Creating safe, heavily optimized structural drawings adhering strictly to the highest IS code standards.", color: "gold", icon: "settings" },
                  { num: "05", title: "Construction\nExecution", desc: "Strict quality-controlled site execution with single-point management, expert supervision, and daily progress tracking.", color: "green", icon: "construction" },
                  { num: "06", title: "Quality\nInspection", desc: "Executing multiple rigorous engineering checkpoints, material audits, and safety tests before final completion.", color: "gold", icon: "gpp_good" },
                  { num: "07", title: "Project\nHandover", desc: "Delivering the keys to a stunning, meticulously crafted home built to last for generations, fully ready for move-in.", color: "green", icon: "home" }
                ].map((step, index) => {
                   const isGold = step.color === "gold";
                   
                   return (
                     <div key={index} className="relative flex flex-row lg:flex-col items-start text-left group pr-0 lg:pr-4 gap-5 lg:gap-0">
                        
                        {/* Mobile Vertical Timeline Line */}
                        {index < 6 && (
                           <div className="absolute left-[28px] top-[56px] h-[calc(100%+48px)] w-[2px] bg-[#0c2a25]/10 lg:hidden z-0 block"></div>
                        )}

                        {/* Desktop Horizontal Line segment */}
                        {index < 6 && (
                           <>
                             <div className="hidden lg:block absolute top-[28px] left-[28px] w-full h-[2px] bg-[#0c2a25]/10 z-0"></div>
                             {/* Connecting Dot */}
                             <div className="hidden lg:block absolute top-[25px] right-[-4px] w-2 h-2 rounded-full bg-[#a06834]/40 z-10"></div>
                           </>
                        )}

                        {/* Huge Watermark Number */}
                        <div className="absolute top-[0px] lg:-top-8 left-[60px] lg:left-4 text-[64px] lg:text-[84px] font-serif font-bold text-[#0c2a25] opacity-[0.04] leading-none z-0 pointer-events-none select-none transition-transform duration-500 group-hover:-translate-y-1">
                           {step.num}
                        </div>

                        {/* Icon Row (Shrink-0 for mobile) */}
                        <div className="relative z-10 flex items-center shrink-0 mb-0 lg:mb-6">
                           {/* Icon Circle */}
                           <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-[6px] border-[#fdfcf8] ${isGold ? 'bg-[#fdf8f4] text-[#a06834]' : 'bg-[#e8f3f1] text-[#0c2a25]'}`}>
                              <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                           </div>
                        </div>

                        {/* Text Content */}
                        <div className="relative z-10 flex flex-col pt-2 lg:pt-0 pb-6 lg:pb-0">
                           <h3 className="font-bold text-[#0c2a25] text-[15.5px] lg:text-[16px] leading-tight mb-1 lg:mb-2 whitespace-pre-line">
                              {step.title.replace('\n', '\n')}
                           </h3>
                           <p className="text-[12.5px] lg:text-[13px] text-[#0c2a25]/60 leading-snug pr-2 lg:pr-2">
                              {step.desc}
                           </p>
                        </div>
                     </div>
                   );
                })}
             </div>
          </div>
        </div>
      </section>

      {/* Built For Every Terrain Section */}
      <section className="relative w-full py-20 lg:py-24 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1920&q=80')" }}></div>
          </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-[#fea12b] font-bold mb-3 block">
                BUILT FOR EVERY TERRAIN
              </span>
              <h2 className="font-display-hero text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Different Terrains. Same Commitment.
              </h2>
              <p className="font-body-md text-white/80 leading-relaxed">
                Whether it's a residential home in the city, a commercial space in the plains, or a complex project in the hills — our process adapts, but our commitment to quality remains the same.
              </p>
            </div>
            <div>
              <Link href="#consultation" className="inline-flex items-center gap-2 bg-[#F59A23] hover:bg-[#ffaa3b] text-on-secondary-fixed font-label-md px-7 py-3.5 rounded-xl font-bold shadow-lg transition-all whitespace-nowrap">
                <span>Let's Build Together</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/30">
              
              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#fea12b]">
                  <span className="material-symbols-outlined text-[24px]">architecture</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface mb-0.5">Terrain-Specific Planning</h4>
                  <p className="text-xs text-on-surface-variant">Designs that respect the land</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#fea12b]">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface mb-0.5">Local Expertise</h4>
                  <p className="text-xs text-on-surface-variant">Knowledge of regional conditions</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#fea12b]">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface mb-0.5">Reliable Execution</h4>
                  <p className="text-xs text-on-surface-variant">Skilled teams across regions</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#fea12b]">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface mb-0.5">Long-Term Support</h4>
                  <p className="text-xs text-on-surface-variant">We're with you beyond handover</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 lg:py-24 bg-surface-container-lowest text-on-surface">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-12 gap-8">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#fea12b] font-bold tracking-widest block mb-2">FAQ</span>
              <h2 className="font-headline-xl text-[36px] sm:text-[42px] font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <div className="flex items-center">
               <Link href="#contact" className="inline-flex items-center gap-2 border border-outline-variant/50 hover:bg-surface-container text-on-surface font-label-md px-6 py-3 rounded-xl transition-colors">
                  <span>Still Have Questions?</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
               </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "How long does a typical project take?",
              "Do you provide design and 3D visualization?",
              "Do you handle approvals and documentation?",
              "How do you ensure quality?",
              "Can you work on projects in hilly areas?",
              "Do you offer post-completion support?"
            ].map((question, idx) => (
              <div key={idx} className="bg-white border border-outline-variant/30 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors shadow-sm group">
                <span className="font-headline-sm text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">{question}</span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">add</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 lg:py-20 bg-[#fea12b] text-[#3d2300]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-[11px] uppercase tracking-widest font-bold mb-2 block opacity-80">
                LET'S BUILD TOGETHER
              </span>
              <h2 className="font-display-hero text-3xl lg:text-4xl font-bold mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="font-body-md opacity-90">
                Share your ideas with us and let's turn them into a space you'll love.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="#quote" className="inline-flex items-center gap-2 bg-[#081211] hover:bg-[#11211f] text-white font-label-md px-7 py-3.5 rounded-xl font-bold shadow-lg transition-all">
                <span>Get a Quote</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link href="tel:+917076423578" className="inline-flex items-center gap-2 border border-[#3d2300]/30 hover:bg-black/5 text-[#3d2300] font-label-md px-7 py-3.5 rounded-xl font-bold transition-all">
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}