"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a1514] text-white pt-24 lg:pt-28">
{/* Split Cinematic Terrain Backdrops (Left Siliguri Plains / Right Darjeeling Hillslopes) */}
<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
</div>
{/* Hero Content Vessel */}
<div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between pt-8 lg:pt-16 pb-6 lg:pb-10">
<div className="max-w-3xl flex flex-col items-start">
{/* Category Tag Pill */}
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-6 shadow-lg">
<span className="w-2 h-2 rounded-full bg-[#fea12b] animate-pulse"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-white drop-shadow-md">
                ARCHITECTURAL &amp; CIVIL MASTERY • PLAINS &amp; HILL TERRAINS
              </span>
</div>
{/* Massive Editorial Title */}
<h1 className="font-display-hero text-[44px] sm:text-[58px] lg:text-[68px] text-white leading-[1.05] tracking-tight mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Building Spaces. <br/>
<span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ffd4a3] via-[#ffb86c] to-[#fea12b] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Creating Trust.
              </span>
</h1>
</div>

<div className="flex flex-col items-start mt-auto">
{/* Dual CTAs */}
<div className="flex flex-wrap items-center gap-4 mb-6">
<a className="relative overflow-hidden shimmer-badge inline-flex items-center gap-3 bg-[#F59A23] hover:bg-[#ffaa3b] text-on-secondary-fixed font-label-md text-label-md px-6 sm:px-7 py-4 rounded-xl font-bold shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 group" href="/contact">
<span>Schedule Consultation</span>
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md transition-all duration-300 shadow-lg group" href="/projects">
<span className="material-symbols-outlined text-[20px] text-[#fea12b] group-hover:rotate-45 transition-transform duration-300">explore</span>
<span className="font-label-md text-label-md font-semibold">Explore Landmark Projects</span>
</a>
</div>
{/* Direct Geographic Operating Strip */}
<div className="flex items-center gap-2 text-white font-body-sm text-body-sm bg-black/50 px-4 py-2.5 rounded-lg backdrop-blur-md shadow-lg border border-white/10">
<span className="material-symbols-outlined text-[18px] text-[#fea12b]">location_on</span>
<span className="tracking-wide">Active Construction Across Siliguri, Darjeeling, Kurseong, Kalimpong &amp; Sikkim Foothills</span>
</div>
</div>
</div>

</section>
      <section className="w-full py-8 lg:py-10 bg-[#0b1a18] text-white relative overflow-hidden" id="statistics">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
  
  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
      
      {/* Stat 1 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[40px] lg:text-[52px] font-bold text-[#fea12b] mb-1 leading-none tracking-tight">25+</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Projects Completed</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Residential, turnkey & renovation</p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[40px] lg:text-[52px] font-bold text-[#fea12b] mb-1 leading-none tracking-tight">5</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Ongoing Projects</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Currently under execution</p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[40px] lg:text-[52px] font-bold text-[#fea12b] mb-1 leading-none tracking-tight">50+</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Happy Clients</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Families across North Bengal</p>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[40px] lg:text-[52px] font-bold text-[#fea12b] mb-1 leading-none tracking-tight">2018</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Established</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Engineering-led construction company</p>
      </div>

    </div>
  </div>
</section>
      <section className="w-full py-12 lg:py-16 bg-surface text-on-surface relative overflow-hidden" id="about">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/* Left Editorial Content Column */}
<div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dbece8] text-primary font-bold text-[12px] uppercase tracking-wide mb-6">
  ABOUT HIGHGRADE CONSTRUCTIONS
</div>
<h2 className="font-headline-xl text-[40px] lg:text-[48px] text-primary font-bold leading-tight mb-6">
  We're Engineers Before<br className="hidden lg:block"/> We're Builders.
</h2>
<p className="font-body-lg text-[16px] text-on-surface-variant mb-10 leading-relaxed">
  Founded in 2018, Highgrade Constructions is an engineer-led construction company delivering residential, commercial and industrial projects with technical precision, transparent execution and uncompromising quality.
</p>

{/* 3 Feature Icons Row */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8 text-center border-b border-outline-variant/30 pb-10">
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">engineering</span>
    </div>
    <span className="text-[13px] text-on-surface-variant font-medium leading-tight">Civil Engineers<br/>Led Team</span>
  </div>
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
    </div>
    <span className="text-[13px] text-on-surface-variant font-medium leading-tight">IS Code<br/>Compliance</span>
  </div>
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[24px]">real_estate_agent</span>
    </div>
    <span className="text-[13px] text-on-surface-variant font-medium leading-tight">Transparent<br/>Planning & BOQ</span>
  </div>
</div>

{/* Stat Boxes */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
  <div className="flex items-center gap-4 p-4 rounded-xl border border-[#d2ddd9] bg-transparent">
    <div className="w-12 h-12 rounded-full bg-[#e8f1ef] text-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">location_city</span>
    </div>
    <div className="flex flex-col">
      <span className="font-headline-sm text-[24px] font-bold text-primary leading-tight">2018</span>
      <span className="text-[14px] text-on-surface-variant">Founded</span>
    </div>
  </div>
  <div className="flex items-center gap-4 p-4 rounded-xl border border-[#d2ddd9] bg-transparent">
    <div className="w-12 h-12 rounded-full bg-[#e8f1ef] text-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">groups</span>
    </div>
    <div className="flex flex-col">
      <span className="font-headline-sm text-[24px] font-bold text-primary leading-tight">100%</span>
      <span className="text-[14px] text-on-surface-variant">Engineer-Led Approach</span>
    </div>
  </div>
</div>

<div className="w-12 h-[2px] bg-[#d5a05b] mb-6"></div>

<p className="font-body-md text-[15px] text-on-surface-variant mb-8 leading-relaxed">
  From foundation to finishing, every detail is measured, planned and built with integrity—because great homes deserve engineering, not guesswork.
</p>

<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-fixed-variant text-white transition-colors text-[15px] font-semibold" href="/about">
  Our Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* Right Visual Composition: Image Layer */}
<div className="lg:col-span-6 relative h-full flex flex-col justify-center">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#23423d] p-3">
    <div className="relative rounded-xl overflow-hidden bg-[#1a322e] aspect-[4/3]">
      <img alt="Highgrade Construction About Visual" className="w-full h-full object-cover" src="/aboutt.png"/>
    </div>
  </div>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="terrains">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider mb-3">
                Geographic Mastery
              </div>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                Engineered for Plains. Anchored for Hills.
              </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Construction dynamics in North Bengal require distinct technical proficiencies. High Grade operates specialized engineering wings for both ecosystems.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Plains Construction (Siliguri Region) */}
<div className="group flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="relative w-full h-80 overflow-hidden">
<img alt="Siliguri Commercial &amp; Modernist Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRX24UmdfJtcJYqwY3TC9F-ZNwDLMTlJq3x6oKiD9oJhx_HitPqGSBSC8aj75vIFqeMP4Te9Lbd5uwfa2c_-f8M0GE5tDIIK6OksF9QYjL46WAIU350fabm-Lce5uGbNkcbaf7yGzwxNHfLFDMNeH46p_-aGto_5QOAK6j6f9Ra3PQfwp6Fhk_H-UlOqRf-YTUQ6r6oC_tfrn7flYWrU1oVrqeM8ff3RcRUf5fBdQwkaF03LMOg50a"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/90 via-[#0a1514]/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-3.5 py-1.5 rounded-full bg-primary text-white font-label-caps text-label-caps uppercase tracking-wider shadow-sm">
                    Siliguri &amp; Terai Plains
                  </span>
</div>
<div className="absolute bottom-4 left-5 right-5">
<h3 className="font-headline-lg text-headline-lg text-white font-bold">Plains Civil Architecture</h3>
</div>
</div>
<div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
<div>
<p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                    High-volume commercial centers, contemporary residential bungalows, and structural framing tailored to high humidity, sub-surface ground waters, and heavy load dynamics.
                  </p>
<ul className="flex flex-col gap-3 mb-6 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Deep Pile Foundations &amp; High-Water Table Waterproofing Membranes</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Commercial Plazas, Mixed-Use Showrooms &amp; Retail Complexes</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Gated Communities &amp; Modernist Sprawling Bungalows</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Integrated Solar Rooftops &amp; Rainwater Harvesting Networks</span>
</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary group-hover:translate-x-1 transition-all" href="/projects">
<span>View Plains Portfolio</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
{/* Hills Construction (Darjeeling & Kalimpong) */}
<div className="group flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="relative w-full h-80 overflow-hidden">
<img alt="Darjeeling Cantilever Hill Villa Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2FjXotqyDwbgxF_InhdiCX0GTjDtF_csTF6QwDke1SYYvhLR0yiQvYzpHz5R7X1IRu0E9YU1_7e035nUfMq5joMjIhKjGUlKzkCp3dyXSmlDRauV4SwrF7Jc7g4UV82uY9vPr-dGRLWeWTNxZPC9HqfpX1JYpAt95-2460fRMUuclHnh9GcS3Eq2PkLX1_bjZ_0-Pv-MPR9LP4u6bEiSblZmYPmwVnRyENadRbhQdmFajhjRREl3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/90 via-[#0a1514]/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-3.5 py-1.5 rounded-full bg-secondary text-white font-label-caps text-label-caps uppercase tracking-wider shadow-sm">
                    Darjeeling &amp; Kalimpong Hills
                  </span>
</div>
<div className="absolute bottom-4 left-5 right-5">
<h3 className="font-headline-lg text-headline-lg text-white font-bold">Himalayan Hill Engineering</h3>
</div>
</div>
<div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
<div>
<p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                    Specialist geotechnical slope anchors, micro-piling, stepped RCC retaining networks, and seismic Zone-IV &amp; V compliant cantilever structures built on dramatic contours.
                  </p>
<ul className="flex flex-col gap-3 mb-6 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Geotechnical Soil-Shear Profiling &amp; Rock Bolt Slope Stabilization</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Engineered RCC Retaining Walls &amp; High-Gravity Gabion Baskets</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Seismic Shear-Wall Integration for Multi-Tier Mountain Residences</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span>Narrow Hill-Road Heavy Logistics &amp; Extreme Weather Concreting</span>
</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary group-hover:translate-x-1 transition-all" href="/projects">
<span>View Hills Portfolio</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="services">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">Our Core Services</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-3">
  Complete Construction Solutions Under One Roof
</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
  From soil testing to final key handover, our integrated engineering team eliminates subcontractor friction and assures unified quality.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">handshake</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">01</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Turnkey Construction</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Complete end-to-end residential construction.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">home</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">02</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Residential Homes</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Modern villas and family homes.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">terrain</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">03</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Hill Architecture</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Engineered for slopes and mountain terrain.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">architecture</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">04</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Architectural Planning</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Functional and aesthetic space planning.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">draw</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">05</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">2D Floor Plans</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Accurate technical planning drawings.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">view_in_ar</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">06</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">3D Elevation Design</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Premium exterior visualization.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">foundation</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">07</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Structural Design</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Safe RCC and steel structural solutions.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">living</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">08</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Interior Design</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Elegant interior execution.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">handyman</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">09</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Renovation & Remodeling</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Upgrade existing homes beautifully.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">assignment</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">10</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Project Management</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Quality, timeline, and budget supervision.
</p>
</div>
</div>
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">park</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">11</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">Landscape Development</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  Outdoor living and site aesthetics.
</p>
</div>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="usp">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">USP</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-3">
              Why Choose Highgrade
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              These are stronger than generic contractor claims.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">engineering</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Civil Engineer Supervision</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  Every project is monitored by qualified engineers—not only site contractors.
</p>
</div>
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">design_services</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Design-to-Reality Accuracy</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  We execute according to approved drawings with minimal deviation.
</p>
</div>
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">visibility</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Transparent Material Usage</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  Clients know what materials are being used at every stage.
</p>
</div>
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">update</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Weekly Progress Updates</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  Receive regular site photos, videos, and progress reports.
</p>
</div>
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">rule</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">IS Code Based Construction</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  Structural practices follow recognized engineering standards.
</p>
</div>
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">account_tree</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Single Point Responsibility</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  Planning, design, construction, interiors, and renovation under one team.
</p>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="projects">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
<div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">Our Portfolio</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">Spaces We’ve Brought to Life</h2>
</div>
{/* Dynamic Filter Tabs */}
<div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-surface-container-high border border-outline-variant/20 shadow-inner" id="project-filters">
<button className="px-4 py-2 rounded-lg font-label-md text-label-md bg-primary text-white font-semibold shadow-sm transition-all filter-btn" data-filter="all" type="button">All (250+)</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary font-semibold transition-all filter-btn" data-filter="hills" type="button">Hills (Darjeeling &amp; Kalimpong)</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary font-semibold transition-all filter-btn" data-filter="plains" type="button">Plains (Siliguri)</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary font-semibold transition-all filter-btn" data-filter="commercial" type="button">Commercial</button>
<button className="px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary font-semibold transition-all filter-btn" data-filter="residential" type="button">Residential</button>
</div>
</div>
{/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="project-grid">
{/* Project 1 (Hills / Residential) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="hills residential">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Modern Hill Residence in Darjeeling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD3k7NNizLwSjG6eYMxmm3rjt9_bW4Zvy-Q4knjQ9LO7a4GRw-CNcqhK9LI8VvvPqwUdBdNiT_Pb1ka2q0_ktPyiDQxTtcWn-l14G4qDIQPimmOCkPLC_fJ7xnIesPCWFefFUGV7wlz8GUW7dCXsjIAIrwLLQ34VM75QTg31ojzur_zgw--UPVpBciY4jbIxHbaknTIhncdQUOj0vVGD8tPdoR-9lpmujJMnYtsQWYhuzkcfBB2P9x"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Darjeeling</span>
<span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-caps text-[10px] uppercase tracking-wider font-bold">Hills Luxury</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">4,800 SQ. FT. • COMPLETED 2025</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">Modern Hill Residence</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Stepped contour shear walls &amp; pine timber framing</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
{/* Project 2 (Plains / Commercial) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="plains commercial">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="The Zenith Business Complex in Siliguri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9vq25ih54HzQ8bNdFkoJAGMEBKKIKucUkLIh39Zh5MVLzAQRIzvF7g6T5rOHNf__jmUG70UKTTV3mhDW4T3yVN0RfwyX9PvR6TzyjpC-JcuH8KR0uAZubGlg5u1VZkbbFMfoCsxdh5PU0xhHzBwQhxPba5vv8XycpeQ4XpVEeLV9j8Nirm7HfBsSi5A-3apjdd9iBOiaUSTXBZJnZAYgFYcTUe2S87ewSZ2t1lQXXgWNUg3EicVeV"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Sevoke Rd, Siliguri</span>
<span className="px-2.5 py-1 rounded-md bg-primary text-white font-label-caps text-[10px] uppercase tracking-wider font-bold">Commercial</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">18,500 SQ. FT. • COMPLETED 2024</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">The Zenith Business Complex</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Glass curtain walling &amp; double-basement pile foundation</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
{/* Project 3 (Hills / Residential) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="hills residential">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Pine View Luxury Retreat in Kalimpong" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW8KLn3-wwIJGLIC9isfCmse_9eIDowQvNxrQaqZDHwS8gllpTV-E4kXJVGVc1hBf9E_8iSegN6XCkswYpIn0s-0lcJ0eiUIzQksZ8qwFbyCOj2JAtTsLX8tekCNwVmaYjAP9YYv0USrOTvSNOex51Dr1-udbJCb9DR9NYCP0PelEtsl5YleDLkLUFZO86mbbASMxJUEK6gCaZFP6KsRjlv5g2To2X_qhm_uaXfOyf1rTEQlL_kGjn"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Kalimpong</span>
<span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-caps text-[10px] uppercase tracking-wider font-bold">Bespoke Villa</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">3,600 SQ. FT. • COMPLETED 2024</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">Pine View Luxury Retreat</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Local stone &amp; treated Himalayan cedar fusion</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
{/* Project 4 (Plains / Residential) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="plains residential">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Contemporary Urban Villa in Pradhan Nagar Siliguri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKQsmtCoRK71uSEu9LEtVIFWxrkwl_gIZBgoEjRiCE28KYHG8pBlW9lo8d2xVSQyuF4sa13RO8zdT03UvysA58P6Ws016pKYvd6SLa14Ids2BtagRrNjfDQ_LtSq0ru7K-6wNJp-g2cka-bPuOOE8X67kCPnMgGCHr15nJPUxMEhYKE3eMkdnXPKJdOUNxYF2ICwoP0PtxOj8lH1qc3FYiniBQa8Rvxe3RFSK4cW7DKvjn-bQM8kk3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Pradhan Nagar, Siliguri</span>
<span className="px-2.5 py-1 rounded-md bg-primary text-white font-label-caps text-[10px] uppercase tracking-wider font-bold">Turnkey Villa</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">5,200 SQ. FT. • COMPLETED 2025</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">Contemporary Urban Villa</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Minimalist exposed board-formed concrete &amp; smart automation</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
{/* Project 5 (Hills / Commercial) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="hills commercial">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Highland Commercial Arcade along Mall Road Darjeeling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK8CXZj9FZlAfdjYAycLosVar1H6VDnFyczIV5-Vd1Y-cluIpAT3o7i6Ay4S-qk_0zQUoKD_PhNE1_9FzzLg88H-2qT_Z5hHuSGvH19Uq2JMBNYBVkI8xA-Ngc59ijPBbYt0RnnrviMSJx3g6OMSGH_k7uLbT-kIVLZmsYZg6GlOi_9r3TtLiHVUK_PDaE3VqesBGxjQQ_rQ--tdMSiJBb1lOdXIPhfPrSYcbwFP8aZ1ClAHw_z5hk"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Mall Road, Darjeeling</span>
<span className="px-2.5 py-1 rounded-md bg-secondary text-white font-label-caps text-[10px] uppercase tracking-wider font-bold">Hill Commercial</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">12,200 SQ. FT. • COMPLETED 2023</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">Highland Commercial Arcade</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">High-capacity rock anchor tiebacks &amp; seismic framing</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
{/* Project 6 (Plains / Residential) */}
<div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300" data-cat="plains residential">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="The Green Oasis Bungalow in Matigara Siliguri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPYmrFeQaGV_kEr6HizRqfUy0rXFPY9fKPmDUi3DXwd4p70kKAXDNkuZe0hg3bH2VR8FZ-QOTpG3WHwJIiVENIx0OKIY6SodbCWeZOaWQHhRvmzsDvN1GRTs8IBmqPbIm3sbtSwZvIVqP9Gd508jG51KVovM3fRJCZma1ygmvFMYkB1lY-lHT3k7LCJkjapgvNOPvLbToFsEVMcvDORG0HtgC60xx1n4F1WYbt54g5R0sdZ128kAJA"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
<div className="absolute top-3.5 left-3.5 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Matigara, Siliguri</span>
<span className="px-2.5 py-1 rounded-md bg-primary-container text-white font-label-caps text-[10px] uppercase tracking-wider font-bold">Green Architecture</span>
</div>
<div className="absolute bottom-3.5 left-4 right-4">
<span className="text-secondary-fixed font-label-caps text-[11px] uppercase tracking-wider">4,100 SQ. FT. • COMPLETED 2025</span>
<h3 className="font-headline-md text-headline-md text-white font-bold">The Green Oasis Bungalow</h3>
</div>
</div>
<div className="p-5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Net-zero solar integration &amp; natural thermal cooling buffers</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_outward</span>
</div>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-[#0d1a19] text-white" id="process">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="font-label-caps text-label-caps uppercase text-secondary-fixed font-bold tracking-widest block mb-2">Our Process</span>
<h2 className="font-headline-xl text-headline-xl text-white font-bold">
  From Concept to Creation
</h2>
</div>
<p className="font-subheading-editorial text-subheading-editorial italic text-outline-variant max-w-sm">
  A clear, disciplined progression for a stronger tomorrow.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-5">

<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  01
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Consultation & Site Visit</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Understanding your vision, land, and requirements.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  02
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Planning & Estimation</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Budget planning and technical feasibility.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  03
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Architectural Design</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  2D layouts and premium 3D elevations.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  04
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Structural Engineering</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Safe, optimized structural drawings.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  05
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Construction Execution</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Quality-controlled site execution.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  06
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Quality Inspection</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Multiple engineering checkpoints before completion.
</p>
</div>
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  07
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">Project Handover</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  Delivering a home built to last for generations.
</p>
</div>
</div>
</div>
</section>
      <section className="w-full py-16 lg:py-0 lg:h-[80vh] lg:min-h-[600px] lg:max-h-[800px] flex items-center bg-surface text-on-surface relative overflow-hidden" id="service-areas">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Text & CTA */}
      <div className="lg:col-span-5 flex flex-col items-start">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef1ef] text-[#1b3834] font-label-caps text-[10px] uppercase tracking-widest mb-6 font-bold">
          Coverage
        </div>
        
        <h2 className="font-headline-xl text-4xl lg:text-5xl text-primary font-bold leading-[1.1] mb-6">
          Building Across<br/>North Bengal
        </h2>
        
        <div className="w-12 h-1 bg-secondary-container mb-6"></div>
        
        <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
          From the bustling plains to the serene hills, we proudly bring engineering precision to homes and communities. No guesswork, just solid foundations everywhere we build.
        </p>
        
        <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-label-md font-semibold hover:bg-primary/90 transition-colors shadow-sm">
          Get a Free Site Visit
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </a>
      </div>

      {/* Right Column: Compact Chips Container */}
      <div className="lg:col-span-7 relative">
        <div className="bg-[#eef1ef] rounded-[2.5rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 relative overflow-hidden">
           
           {/* Decorative background element */}
           <div className="absolute -top-10 -right-10 opacity-5 text-primary pointer-events-none">
             <span className="material-symbols-outlined text-[200px]">terrain</span>
           </div>
           
           <h3 className="font-headline-sm text-2xl text-primary font-bold mb-8 relative z-10">Our Service Areas</h3>
           
           <div className="flex flex-wrap gap-3 lg:gap-4 relative z-10">
             {['Siliguri', 'Pradhan Nagar', 'Bagdogra', 'Naxalbari', 'Panitanki', 'Darjeeling', 'Kalimpong', 'Kurseong', 'Dooars', 'Sikkim'].map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface border border-outline-variant/50 shadow-sm hover:border-primary/50 transition-colors group cursor-default">
                  <span className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110 transition-transform">location_on</span>
                  <span className="font-label-md text-on-surface font-semibold text-[14px]">{area}</span>
                </div>
             ))}
             <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-transparent">
               <span className="font-label-md text-on-surface-variant italic text-[14px]">and surrounding regions...</span>
             </div>
           </div>
           
        </div>
      </div>
      
    </div>
  </div>
</section>
      <section className="w-full py-20 lg:py-24 bg-[#fea12b] text-on-secondary-container relative overflow-hidden">
<div className="absolute -right-16 -bottom-16 opacity-10 text-on-secondary-container pointer-events-none">
<span className="material-symbols-outlined text-[380px]">foundation</span>
</div>
<div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl flex flex-col items-start">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-on-secondary-container font-bold mb-2">Start Your Build</span>
<h2 className="font-headline-xl text-headline-xl font-bold leading-tight mb-4 text-[#3d2300]">
              Let’s Build Your Dream Together.
            </h2>
<p className="font-subheading-editorial text-subheading-editorial leading-relaxed mb-8 text-[#543204]">
              Whether laying deep foundations in the bustling plains of Siliguri or creating an architectural masterpiece overlooking the Himalayas, High Grade brings unmatched engineering rigour to your vision.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary-container font-label-md text-label-md px-7 py-4 rounded-xl shadow-xl transition-all duration-300" href="/contact">
<span>Book Free Site Consultation</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</a>
<a className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-black/10 hover:bg-black/15 text-[#3d2300] font-label-md text-label-md font-bold transition-all duration-300" href="tel:+917076423578">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>Call Direct: +91 70764 23578</span>
</a>
</div>
</div>
</div>
</section>
      <section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="consultation">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
{/* Left Consultation Form */}
<div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-3xl border border-outline-variant/30 shadow-xl">
<div className="mb-8">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-1">Engineering Consultation</span>
<h3 className="font-headline-lg text-headline-lg text-primary font-bold">Request an On-Site Engineering Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Speak directly with an accredited structural engineer and chief architect.
                </p>
</div>
<form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! An engineer from High Grade will contact you within 4 business hours.'); }}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Full Name *</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary shadow-sm" placeholder="e.g. Vikram Sharma" required type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Phone Number *</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary shadow-sm" placeholder="+91 98765 43210" required type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary shadow-sm" placeholder="name@domain.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Project Location *</label>
<select defaultValue="" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface text-body-sm focus:outline-none focus:border-primary shadow-sm" required>
<option disabled value="">Select Territory</option>
<option value="Siliguri">Siliguri (Plains / Terai)</option>
<option value="Darjeeling">Darjeeling (Hill Terrain)</option>
<option value="Kalimpong">Kalimpong (Hill Terrain)</option>
<option value="Kurseong">Kurseong (Foothills)</option>
<option value="Other">Other North Bengal Location</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Terrain Type</label>
<select defaultValue="" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface text-body-sm focus:outline-none focus:border-primary shadow-sm">
<option value="plains">Urban Plains (Flat Ground)</option>
<option value="steep-slope">Mountain Stepped Slope (&gt; 25°)</option>
<option value="gentle-hill">Gentle Hill Contour</option>
<option value="riverine">Riverine / Low-Lying Area</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Project Scope</label>
<select defaultValue="" className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface text-body-sm focus:outline-none focus:border-primary shadow-sm">
<option value="turnkey-residence">Turnkey Luxury Residence</option>
<option value="commercial-complex">Commercial Complex / Mall</option>
<option value="resort-hospitality">Resort / Hospitality Villa</option>
<option value="slope-retaining">Retaining Wall &amp; Slope Stabilization</option>
<option value="interior-fitout">Interior Architecture &amp; Fit-Out</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md font-semibold text-on-surface">Brief Project Notes / Plot Size</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-outline text-body-sm focus:outline-none focus:border-primary shadow-sm" placeholder="Describe your land area, anticipated start timeline, and specific design expectations..." rows={3}></textarea>
</div>
<button className="w-full bg-[#F59A23] hover:bg-[#e08919] text-on-secondary-fixed font-label-md text-label-md py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-md mt-2 flex items-center justify-center gap-2" type="submit">
<span>Schedule Engineering Assessment</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</form>
</div>
{/* Right Office & Map Presence */}
<div className="lg:col-span-5 flex flex-col justify-between gap-6">
<div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
<h4 className="font-headline-md text-headline-md text-primary font-bold mb-6">Contact Information</h4>
<div className="flex flex-col gap-6 font-body-sm text-[15px] text-on-surface-variant">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Office</div>
<div>Pradhan Nagar, Siliguri</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Phone</div>
<div className="text-secondary font-semibold">+91 70764 23578</div>
<div className="text-secondary font-semibold mt-1">+91 89721 64804</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Email</div>
<div className="text-primary font-medium">highgradeconstruction3@gmail.com</div>
</div>
</div>

</div>
</div>
{/* Stylized Dual-Region Map Viewport */}
<div className="relative w-full h-64 rounded-3xl bg-cover bg-center overflow-hidden shadow-md border border-outline-variant/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNxiTY_nPwBCxDNvWbPmZaeEAEAJP3S6ljdEgK-u7Y7hZDDKZ-Dr82X0iZElQ1ahIZEVrVFz3s6wlxooqWz_qmTgTFbRiifW_NaQ_heRwDLyT_SMNtfxFy6d2YBnxw7RZAWREkLmspBSO6KoZ9USwqiE00_WznmXn05_ZWBeyt6__B_jzbaDaMaEZTFYxW4kPio_y2fRwxM0dQT8wlZe7Q87tXlZV7OA_DLfaK80vanDJCQknKMjng')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/80 via-[#0a1514]/30 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm font-label-caps text-label-caps uppercase text-primary font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
<span>Serving North Bengal</span>
</div>
<div className="absolute bottom-4 left-4 text-white">
<div className="font-headline-sm text-headline-sm font-bold leading-tight">Headquartered in Siliguri</div>
<div className="font-body-sm text-body-sm text-outline-variant">Pradhan Nagar, Engineering Hub</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </main>
  );
}
