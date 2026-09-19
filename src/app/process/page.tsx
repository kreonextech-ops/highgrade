"use client";

import Link from "next/link";
import Image from "next/image";

export default function Process() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col justify-between overflow-hidden bg-[#0a1514] text-white pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
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
              <div className="font-headline-sm text-lg text-white font-bold">100+</div>
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
      <section className="w-full py-20 lg:py-28 bg-surface text-on-surface relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps uppercase text-[#fea12b] font-bold tracking-widest block mb-2">Our Process</span>
              <h2 className="font-headline-xl text-[36px] sm:text-[42px] lg:text-[48px] text-primary font-bold leading-tight">
                A Clear Path to Exceptional Spaces
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md pb-2">
              From the first conversation to the final handover, we follow a well-defined process that ensures quality, transparency and peace of mind at every stage.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-10 lg:pl-[4.5rem]">
            {/* Main Vertical Timeline Line */}
            <div className="absolute top-2 bottom-0 left-[11px] sm:left-[23px] lg:left-[35px] w-0.5 bg-gradient-to-b from-outline-variant/60 via-outline-variant/30 to-transparent"></div>

            {/* Step 01 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] order-2 md:order-1 flex flex-col items-start pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">handshake</span>
                  </div>
                  <span className="font-headline-xl text-5xl font-bold text-primary">01</span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Consultation & Understanding</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  We begin with a detailed discussion to understand your vision, requirements, budget and site conditions.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Initial meeting (online or on-site)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Understand goals and lifestyle needs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Site visit and feasibility study</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[55%] order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" alt="Consultation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[55%] order-1 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1200&q=80" alt="Planning & Design" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%] order-2 md:order-2 flex flex-col items-start pt-2 md:pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline-xl text-5xl font-bold text-primary">02</span>
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">architecture</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Planning & Design</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  Our team creates intelligent and functional designs tailored to your space, whether in the plains or hills.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Concept design and layout</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>3D visualization (if required)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Material suggestions and cost estimation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] order-2 md:order-1 flex flex-col items-start pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">task</span>
                  </div>
                  <span className="font-headline-xl text-5xl font-bold text-primary">03</span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Approvals & Documentation</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  We assist with all necessary approvals and documentation to ensure a smooth and hassle-free process.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Drawing finalization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Authority approvals and NOCs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Detailed project planning & scheduling</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[55%] order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" alt="Approvals & Documentation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[55%] order-1 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1541888081622-6b9576eb5535?auto=format&fit=crop&w=1200&q=80" alt="Execution & Construction" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%] order-2 md:order-2 flex flex-col items-start pt-2 md:pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline-xl text-5xl font-bold text-primary">04</span>
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">construction</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Execution & Construction</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  With a skilled team and strict quality control, we bring the design to life — on time and within budget.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Site preparation and mobilization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Quality construction with regular updates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Safety and environmental compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 05 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] order-2 md:order-1 flex flex-col items-start pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">fact_check</span>
                  </div>
                  <span className="font-headline-xl text-5xl font-bold text-primary">05</span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Quality Checks & Transparency</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  We conduct regular inspections and share progress updates to ensure complete transparency.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>On-site quality inspections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Progress reports with photos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Client walkthroughs at key stages</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[55%] order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" alt="Quality Checks" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 06 */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16">
              <div className="absolute left-[-15px] sm:left-[-23px] lg:left-[-41px] top-4 sm:top-6 lg:top-8 w-4 h-4 rounded-full border-[3px] border-surface bg-[#fea12b] shadow-sm z-10"></div>
              
              <div className="w-full md:w-[55%] order-1 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Handover" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%] order-2 md:order-2 flex flex-col items-start pt-2 md:pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline-xl text-5xl font-bold text-primary">06</span>
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fea12b] shrink-0">
                    <span className="material-symbols-outlined text-[28px]">key</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">Handover & After Support</h3>
                <p className="font-body-md text-on-surface-variant mb-5">
                  We complete the project with a detailed handover and continue to support you even after completion.
                </p>
                <ul className="flex flex-col gap-3 font-body-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Final walkthrough and quality check</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Handover of documentation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#fea12b] text-[18px] mt-0.5">check_circle</span>
                    <span>Post-completion support and maintenance guidance</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Built For Every Terrain Section */}
      <section className="relative w-full py-20 lg:py-24 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1514]/90 via-[#0a1514]/70 to-[#0a1514]/60"></div>
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