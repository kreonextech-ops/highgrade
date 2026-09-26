"use client";
import { motion } from "framer-motion";


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
<a className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md transition-all duration-300 shadow-lg group" href="/portfolio">
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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-0 lg:divide-x lg:divide-white/15">
      
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
<div className="grid grid-cols-3 gap-2 sm:gap-6 w-full mb-8 text-center border-b border-outline-variant/30 pb-10">
  <div className="flex flex-col items-center gap-2 sm:gap-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px] sm:text-[24px]">engineering</span>
    </div>
    <span className="text-[11px] sm:text-[13px] text-on-surface-variant font-medium leading-tight">Civil Engineers<br/>Led Team</span>
  </div>
  <div className="flex flex-col items-center gap-2 sm:gap-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px] sm:text-[24px]">assignment_turned_in</span>
    </div>
    <span className="text-[11px] sm:text-[13px] text-on-surface-variant font-medium leading-tight">IS Code<br/>Compliance</span>
  </div>
  <div className="flex flex-col items-center gap-2 sm:gap-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px] sm:text-[24px]">real_estate_agent</span>
    </div>
    <span className="text-[11px] sm:text-[13px] text-on-surface-variant font-medium leading-tight">Transparent<br/>Planning & BOQ</span>
  </div>
</div>
{/* Stat Boxes */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 mt-8">
  <div className="flex items-center gap-4 p-4 rounded-xl border border-[#d2ddd9] bg-transparent">
    <div className="w-12 h-12 rounded-full bg-[#e8f1ef] text-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">location_city</span>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-headline-sm text-[24px] font-bold text-primary leading-tight">2018</span>
      <span className="text-[14px] text-on-surface-variant">Founded</span>
    </div>
  </div>
  <div className="flex items-center gap-4 p-4 rounded-xl border border-[#d2ddd9] bg-transparent">
    <div className="w-12 h-12 rounded-full bg-[#e8f1ef] text-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-[24px]">groups</span>
    </div>
    <div className="flex flex-col text-left">
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
<section className="w-full py-12 lg:py-16 bg-[#f9f9f6] text-on-surface relative overflow-hidden" id="terrains">
  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8">
      
      {/* Left Header */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faeddd] text-[#a06834] font-bold text-[12px] uppercase tracking-widest mb-4 shadow-sm">
          Geographic Mastery
        </div>
        <h2 className="font-headline-xl text-[40px] lg:text-[48px] text-primary font-bold leading-[1.05] tracking-tight">
          Engineered for Plains.<br />Anchored for Hills.
        </h2>
      </div>

      {/* Right Header */}
      <div className="max-w-md lg:pb-2">
        <div className="w-10 h-[2px] bg-[#d5a05b] mb-4"></div>
        <h3 className="font-bold text-[16px] text-primary mb-2">Two unique terrains. One engineering mindset.</h3>
        <p className="text-[14px] text-on-surface-variant leading-relaxed">
          High Grade combines deep local knowledge with specialized engineering expertise to deliver safe, durable and future-ready structures across North Bengal.
        </p>
      </div>

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Plains Card */}
      <div className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 hover:-translate-y-1 transition-transform duration-300">
        <div className="relative w-full h-[240px] lg:h-[280px]">
          <img alt="Siliguri Plains Civil Architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRX24UmdfJtcJYqwY3TC9F-ZNwDLMTlJq3x6oKiD9oJhx_HitPqGSBSC8aj75vIFqeMP4Te9Lbd5uwfa2c_-f8M0GE5tDIIK6OksF9QYjL46WAIU350fabm-Lce5uGbNkcbaf7yGzwxNHfLFDMNeH46p_-aGto_5QOAK6j6f9Ra3PQfwp6Fhk_H-UlOqRf-YTUQ6r6oC_tfrn7flYWrU1oVrqeM8ff3RcRUf5fBdQwkaF03LMOg50a" />
          <div className="absolute top-4 left-4 bg-[#004d44] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-md">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Siliguri & Terai Plains
          </div>
        </div>
        
        <div className="p-6 lg:p-8 flex flex-col flex-1 bg-white">
          <h3 className="font-headline-lg text-[24px] lg:text-[28px] text-primary font-bold mb-2">Plains Civil Architecture</h3>
          <p className="text-[14px] text-on-surface-variant leading-relaxed mb-8">
            Modern residential, commercial and industrial structures designed for high humidity, high-water table conditions and long-term durability.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">foundation</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">Deep Pile<br/>Foundations</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">domain</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">Commercial &<br/>Residential Projects</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">water_drop</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">High-Water Table<br/>Solutions</span>
            </div>
          </div>
          
          <a className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-[#d5a05b] transition-colors mt-auto group text-[14px]" href="/portfolio">
            View Plains Portfolio <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Hills Card */}
      <div className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 hover:-translate-y-1 transition-transform duration-300">
        <div className="relative w-full h-[240px] lg:h-[280px]">
          <img alt="Darjeeling Himalayan Hill Engineering" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2FjXotqyDwbgxF_InhdiCX0GTjDtF_csTF6QwDke1SYYvhLR0yiQvYzpHz5R7X1IRu0E9YU1_7e035nUfMq5joMjIhKjGUlKzkCp3dyXSmlDRauV4SwrF7Jc7g4UV82uY9vPr-dGRLWeWTNxZPC9HqfpX1JYpAt95-2460fRMUuclHnh9GcS3Eq2PkLX1_bjZ_0-Pv-MPR9LP4u6bEiSblZmYPmwVnRyENadRbhQdmFajhjRREl3" />
          <div className="absolute top-4 left-4 bg-[#936025] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-md">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Darjeeling, Kalimpong & Sikkim Hills
          </div>
        </div>
        
        <div className="p-6 lg:p-8 flex flex-col flex-1 bg-white">
          <h3 className="font-headline-lg text-[24px] lg:text-[28px] text-primary font-bold mb-2">Himalayan Hill Engineering</h3>
          <p className="text-[14px] text-on-surface-variant leading-relaxed mb-8">
            Specialized engineering for steep slopes, seismic zones and challenging terrains, ensuring stability, safety and longevity in hill environments.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">terrain</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">Slope Stabilization<br/>& Rock Anchors</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">grid_on</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">RCC Retaining Walls<br/>& Gabion Systems</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f0f6f4] text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">ssid_chart</span>
              </div>
              <span className="text-[12px] font-medium leading-snug text-primary">Seismic-Resilient<br/>Structures</span>
            </div>
          </div>
          
          <a className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-[#d5a05b] transition-colors mt-auto group text-[14px]" href="/portfolio">
            View Hills Portfolio <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
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
        From concept to completion, High Grade delivers end-to-end construction solutions with engineering expertise, modern design, and uncompromising quality.
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
        { num: "01", title: "Turnkey\nConstruction", desc: "Complete end-to-end residential and commercial construction solutions.", icon: "home", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-5", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "02", title: "Residential\nHomes", desc: "Modern villas, independent houses and family homes built for lasting generations.", icon: "cottage", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "03", title: "Hill\nArchitecture", desc: "Engineered for slopes and mountain terrain with specialized techniques.", icon: "landscape", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "04", title: "Architectural\nPlanning", desc: "Functional, aesthetic and site-specific space planning.", icon: "architecture", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "05", title: "2D Floor\nPlans", desc: "Accurate technical planning drawings for approvals and execution.", icon: "draw", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "06", title: "3D Elevation\nDesign", desc: "Realistic exterior visualization to help you see your dream before construction.", icon: "view_in_ar", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-4", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "07", title: "Structural\nDesign", desc: "Safe RCC and steel structural solutions with precision.", icon: "foundation", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "08", title: "Interior\nDesign", desc: "Elegant and practical interiors that match your lifestyle.", icon: "chair", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
        { num: "09", title: "Renovation &\nRemodeling", desc: "Upgrade and transform existing spaces beautifully and efficiently.", icon: "handyman", img: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=600&auto=format&fit=crop", cols: "col-span-12 md:col-span-3", h: "min-h-[280px] lg:min-h-[320px]" },
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
      <section className="relative w-full py-16 lg:py-20 bg-[#fbfbfa] text-on-surface overflow-hidden" id="usp">
        {/* Full Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Background Mountains" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col gap-10 items-center h-full">
          
          {/* Top Typography (Full Width) */}
          <div className="w-full flex flex-col items-center text-center shrink-0">
             <div className="flex items-center gap-4 mb-3">
                <div className="h-[1px] w-8 bg-[#a06834]/50"></div>
                <span className="font-label-caps text-[11px] uppercase text-[#a06834] font-bold tracking-widest block">Our Strength</span>
                <div className="h-[1px] w-8 bg-[#a06834]/50"></div>
             </div>
             <h2 className="font-headline-xl text-[38px] sm:text-[46px] lg:text-[56px] text-[#0c2a25] font-bold leading-[1.1] mb-4 drop-shadow-sm">
                Why Choose Highgrade
             </h2>
             <p className="font-body-md text-[14px] lg:text-[16px] text-[#0c2a25]/80 leading-relaxed max-w-2xl mx-auto">
                Built on expertise, transparency, and a commitment to quality, we deliver spaces that stand the test of time in both hills and plains.
             </p>
          </div>

          {/* Grid (3 Columns, 2 Rows) */}
          <div className="w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 relative z-10">
               
               {/* Card 01 (Text Left, Img Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 right-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Civil Engineer" />
                 </div>
                 <div className="absolute top-0 left-0 w-[65%] h-full bg-white rounded-tr-[32px] p-5 flex flex-col justify-center">
                   <div className="absolute bottom-0 -right-[31px] w-[32px] h-[32px] bg-transparent rounded-bl-[32px] shadow-[-16px_16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 rounded-full bg-[#fdf8f4] text-[#a06834] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">engineering</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">01</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">Civil Engineer <br/> Supervision</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pr-2">Every project is monitored by qualified engineers.</p>
                 </div>
               </div>

               {/* Card 02 (Img Left, Text Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 left-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Design to Reality" />
                 </div>
                 <div className="absolute top-0 right-0 w-[65%] h-full bg-white rounded-tl-[32px] p-5 flex flex-col justify-center items-end text-right">
                   <div className="absolute bottom-0 -left-[31px] w-[32px] h-[32px] bg-transparent rounded-br-[32px] shadow-[16px_16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-[#e8f3f1] text-[#0c2a25] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">design_services</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">02</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">Design-to-Reality <br/> Accuracy</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pl-2 text-right">We execute according to approved drawings accurately.</p>
                 </div>
               </div>

               {/* Card 03 (Text Left, Img Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 right-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Transparent Material" />
                 </div>
                 <div className="absolute top-0 left-0 w-[65%] h-full bg-white rounded-br-[32px] p-5 flex flex-col justify-center">
                   <div className="absolute top-0 -right-[31px] w-[32px] h-[32px] bg-transparent rounded-tl-[32px] shadow-[-16px_-16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 rounded-full bg-[#fdf8f4] text-[#a06834] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">03</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">Transparent <br/> Material Usage</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pr-2">Clients know what materials are used at every stage.</p>
                 </div>
               </div>

               {/* Card 04 (Img Left, Text Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 left-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Weekly Progress" />
                 </div>
                 <div className="absolute top-0 right-0 w-[65%] h-full bg-white rounded-bl-[32px] p-5 flex flex-col justify-center items-end text-right">
                   <div className="absolute top-0 -left-[31px] w-[32px] h-[32px] bg-transparent rounded-tr-[32px] shadow-[16px_-16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-[#e8f3f1] text-[#0c2a25] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">update</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">04</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">Weekly <br/> Progress Updates</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pl-2 text-right">Receive regular site photos and progress reports.</p>
                 </div>
               </div>

               {/* Card 05 (Text Left, Img Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 right-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="IS Code Based" />
                 </div>
                 <div className="absolute top-0 left-0 w-[65%] h-full bg-white rounded-tr-[32px] p-5 flex flex-col justify-center">
                   <div className="absolute bottom-0 -right-[31px] w-[32px] h-[32px] bg-transparent rounded-bl-[32px] shadow-[-16px_16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 rounded-full bg-[#fdf8f4] text-[#a06834] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">rule</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">05</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">IS Code Based <br/> Construction</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pr-2">Structural practices follow recognized engineering standards.</p>
                 </div>
               </div>

               {/* Card 06 (Img Left, Text Right) */}
               <div className="relative w-full h-[180px] lg:h-[200px] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="absolute top-0 left-0 w-[45%] h-full">
                   <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Single Point Responsibility" />
                 </div>
                 <div className="absolute top-0 right-0 w-[65%] h-full bg-white rounded-tl-[32px] p-5 flex flex-col justify-center items-end text-right">
                   <div className="absolute bottom-0 -left-[31px] w-[32px] h-[32px] bg-transparent rounded-br-[32px] shadow-[16px_16px_0_0_#ffffff] z-10 pointer-events-none"></div>
                   <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-[#e8f3f1] text-[#0c2a25] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">account_tree</span>
                     </div>
                     <span className="text-[#a06834] font-bold text-[11px]">06</span>
                   </div>
                   <h3 className="font-bold text-[#0c2a25] text-[15px] mb-1.5 leading-tight">Single Point <br/> Responsibility</h3>
                   <p className="text-[12px] text-[#0c2a25]/60 leading-snug mb-auto line-clamp-2 pl-2 text-right">Planning, design, construction, and interiors under one team.</p>
                 </div>
               </div>

            </div>



          </div>
        </div>
      </section>

<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="portfolio">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-3">Our Portfolio</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
Featured Work
</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
Explore a selection of our ongoing and completed projects, showcasing our commitment to quality, engineering precision, and architectural excellence.
</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shrink-0" href="/portfolio">
<span>View Full Gallery</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
  <div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img alt="Naxalbari Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/portfolio/naxalbari_DSC09206.JPG.jpeg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
      <div className="absolute top-3.5 left-3.5 flex gap-2">
        <span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Naxalbari</span>
        <span className="px-2.5 py-1 rounded-md bg-[#fea12b] text-[#0a1514] font-label-caps text-[10px] uppercase tracking-wider font-bold">Ongoing</span>
      </div>
    </div>
  </div>

  <div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img alt="Ranidanga Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/portfolio/ranidanga_WhatsApp_Image_2026-09-10_at_1.57.38_PM.jpeg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
      <div className="absolute top-3.5 left-3.5 flex gap-2">
        <span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Ranidanga</span>
        <span className="px-2.5 py-1 rounded-md bg-[#fea12b] text-[#0a1514] font-label-caps text-[10px] uppercase tracking-wider font-bold">Ongoing</span>
      </div>
    </div>
  </div>

  <div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img alt="Completed Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/portfolio/residential_home_WhatsApp_Image_2026-09-10_at_1.57.47_PM.jpeg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
      <div className="absolute top-3.5 left-3.5 flex gap-2">
        <span className="px-2.5 py-1 rounded-md bg-primary text-white font-label-caps text-[10px] uppercase tracking-wider font-bold">Completed</span>
      </div>
    </div>
  </div>

  <div className="group project-card flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img alt="Renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/portfolio/renovation_WhatsApp_Image_2026-09-10_at_1.57.51_PM__1_.jpeg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/85 via-transparent to-transparent"></div>
      <div className="absolute top-3.5 left-3.5 flex gap-2">
        <span className="px-2.5 py-1 rounded-md bg-[#0a1514]/80 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider">Renovation</span>
      </div>
    </div>
  </div>
</div>

<div className="mt-10 md:hidden flex justify-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors" href="/portfolio">
<span>View Full Gallery</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>

</div>
</section>
                                    <section className="relative w-full py-16 lg:py-24 bg-[#fdfcf8] text-[#0c2a25] overflow-hidden" id="process">
        {/* Background Sketch (House & Sun) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full mix-blend-multiply pointer-events-none z-0">
          {/* Faint Sun */}
          <div className="absolute top-[-50px] right-[20%] w-[400px] h-[400px] bg-[#fcecd4] rounded-full blur-[60px] opacity-80 z-0"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8] via-[#fdfcf8]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcf8] via-transparent to-transparent z-10"></div>
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
<div className="text-on-surface-variant pr-4 leading-relaxed">Kaziman Pradhan Rd, near Union Bank Methibari, Salbari, Siliguri, Panchanai, West Bengal 734002</div>
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
{/* Live Google Map Viewport */}
<div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface-variant group">
  <iframe 
    src="https://maps.google.com/maps?q=High+Grade+Construction+Company,+Siliguri&t=&z=15&ie=UTF8&iwloc=&output=embed" 
    className="absolute inset-0 w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
</div>
</div>
</section>
    </main>
  );
}
