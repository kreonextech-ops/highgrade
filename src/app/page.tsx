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
          
          <a className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-[#d5a05b] transition-colors mt-auto group text-[14px]" href="/projects">
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
          
          <a className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-[#d5a05b] transition-colors mt-auto group text-[14px]" href="/projects">
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
       
      {/* 01 Turnkey Construction */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[260px] bg-[#0c2a25] col-span-12 md:col-span-5">
        <div className="absolute inset-y-0 right-0 w-[70%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a25] via-[#0c2a25]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" alt="Turnkey Construction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 lg:p-8 flex flex-col items-start w-[85%] sm:w-[75%] text-white">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-[#d5a05b] font-bold text-sm">01</span>
             <span className="material-symbols-outlined text-white">home</span>
          </div>
          <h3 className="text-[22px] lg:text-[26px] font-bold text-white leading-[1.1] mb-2">Turnkey<br/>Construction</h3>
          <p className="text-[13px] text-white/70 leading-relaxed mb-auto">Complete end-to-end residential and commercial construction solutions.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#0c2a25] transition-colors mt-4">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 02 Residential Homes */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[260px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-4">
        <div className="absolute inset-y-0 right-0 w-[70%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09c15468?q=80&w=800&auto=format&fit=crop" alt="Residential Homes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 lg:p-8 flex flex-col items-start w-[85%] sm:w-[75%]">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-[#a06834] font-bold text-sm">02</span>
             <span className="material-symbols-outlined text-primary">cottage</span>
          </div>
          <h3 className="text-[22px] lg:text-[24px] font-bold text-primary leading-[1.1] mb-2">Residential<br/>Homes</h3>
          <p className="text-[13px] text-on-surface-variant leading-relaxed mb-auto">Modern villas, independent houses and family homes built for lasting generations.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-4">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 03 Hill Architecture */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[260px] bg-[#0c2a25] col-span-12 md:col-span-3">
        <div className="absolute inset-y-0 right-0 w-[80%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a25] via-[#0c2a25]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop" alt="Hill Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 lg:p-8 flex flex-col items-start w-[100%] sm:w-[85%] text-white">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-[#d5a05b] font-bold text-sm">03</span>
             <span className="material-symbols-outlined text-white">landscape</span>
          </div>
          <h3 className="text-[22px] lg:text-[24px] font-bold text-white leading-[1.1] mb-2">Hill<br/>Architecture</h3>
          <p className="text-[13px] text-white/70 leading-relaxed mb-auto">Engineered for slopes and mountain terrain with specialized techniques.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#0c2a25] transition-colors mt-4">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 04 Architectural Planning */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[240px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-4">
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Architectural Planning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 flex flex-col items-start w-[85%] sm:w-[75%]">
          <div className="flex items-center gap-3 mb-3">
             <span className="text-[#a06834] font-bold text-sm">04</span>
             <span className="material-symbols-outlined text-primary">architecture</span>
          </div>
          <h3 className="text-[20px] font-bold text-primary leading-[1.1] mb-2">Architectural<br/>Planning</h3>
          <p className="text-[13px] text-on-surface-variant leading-relaxed mb-auto">Functional, aesthetic and site-specific space planning.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-3">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 05 2D Floor Plans */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[240px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-4">
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" alt="2D Floor Plans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 flex flex-col items-start w-[85%] sm:w-[75%]">
          <div className="flex items-center gap-3 mb-3">
             <span className="text-[#a06834] font-bold text-sm">05</span>
             <span className="material-symbols-outlined text-primary">draw</span>
          </div>
          <h3 className="text-[20px] font-bold text-primary leading-[1.1] mb-2">2D Floor<br/>Plans</h3>
          <p className="text-[13px] text-on-surface-variant leading-relaxed mb-auto">Accurate technical planning drawings for approvals and execution.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-3">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 06 3D Elevation Design */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[240px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-4">
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="3D Elevation Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-7 flex flex-col items-start w-[85%] sm:w-[75%]">
          <div className="flex items-center gap-3 mb-3">
             <span className="text-[#a06834] font-bold text-sm">06</span>
             <span className="material-symbols-outlined text-primary">view_in_ar</span>
          </div>
          <h3 className="text-[20px] font-bold text-primary leading-[1.1] mb-2">3D Elevation<br/>Design</h3>
          <p className="text-[13px] text-on-surface-variant leading-relaxed mb-auto">Realistic exterior visualization to help you see your dream before construction.</p>
          <a href="/projects" className="w-8 h-8 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-3">
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 07 Structural Design */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[220px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-3">
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1541888081622-15cb2a0614ce?q=80&w=600&auto=format&fit=crop" alt="Structural Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-6 flex flex-col items-start w-[90%] sm:w-[80%]">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[#a06834] font-bold text-xs">07</span>
             <span className="material-symbols-outlined text-primary text-[18px]">foundation</span>
          </div>
          <h3 className="text-[16px] font-bold text-primary leading-[1.1] mb-2">Structural<br/>Design</h3>
          <p className="text-[12px] text-on-surface-variant leading-relaxed mb-auto">Safe RCC and steel structural solutions with precision.</p>
          <a href="/projects" className="w-7 h-7 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-2">
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 08 Interior Design */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[220px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-3">
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-6 flex flex-col items-start w-[90%] sm:w-[80%]">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[#a06834] font-bold text-xs">08</span>
             <span className="material-symbols-outlined text-primary text-[18px]">chair</span>
          </div>
          <h3 className="text-[16px] font-bold text-primary leading-[1.1] mb-2">Interior<br/>Design</h3>
          <p className="text-[12px] text-on-surface-variant leading-relaxed mb-auto">Elegant and practical interiors that match your lifestyle.</p>
          <a href="/projects" className="w-7 h-7 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-2">
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 09 Renovation */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[220px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-3">
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=600&auto=format&fit=crop" alt="Renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-6 flex flex-col items-start w-[90%] sm:w-[80%]">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[#a06834] font-bold text-xs">09</span>
             <span className="material-symbols-outlined text-primary text-[18px]">handyman</span>
          </div>
          <h3 className="text-[16px] font-bold text-primary leading-[1.1] mb-2">Renovation &<br/>Remodeling</h3>
          <p className="text-[12px] text-on-surface-variant leading-relaxed mb-auto">Upgrade and transform existing spaces beautifully and efficiently.</p>
          <a href="/projects" className="w-7 h-7 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-2">
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* 10 Project Management */}
      <div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[220px] bg-[#fbfbfa] border border-black/5 col-span-12 md:col-span-3">
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/90 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=600&auto=format&fit=crop" alt="Project Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative z-20 h-full p-6 flex flex-col items-start w-[90%] sm:w-[80%]">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[#a06834] font-bold text-xs">10</span>
             <span className="material-symbols-outlined text-primary text-[18px]">assignment</span>
          </div>
          <h3 className="text-[16px] font-bold text-primary leading-[1.1] mb-2">Project<br/>Management</h3>
          <p className="text-[12px] text-on-surface-variant leading-relaxed mb-auto">Quality control, timeline management and budget supervision.</p>
          <a href="/projects" className="w-7 h-7 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors mt-2">
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
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
