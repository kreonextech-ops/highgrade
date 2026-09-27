import React from 'react';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden bg-[#0a1514] text-white pt-24 lg:pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed mb-4 block">About Highgrade</span>
            <h1 className="font-display-hero text-[44px] sm:text-[58px] lg:text-[68px] text-white leading-[1.05] tracking-tight mb-6">
              Built on<br />People, Grounded<br />in Values.
            </h1>
            <p className="font-body-lg text-body-lg text-outline-variant mb-8 max-w-xl">
              At Highgrade Constructions, we turn ideas into enduring spaces. With a commitment to quality, integrity and innovation, we build across plains and hills — creating spaces for a better tomorrow.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="bg-[#F59A23] hover:bg-[#ffaa3b] text-on-secondary-fixed font-label-md text-label-md px-6 py-3.5 rounded-xl font-bold transition-all inline-flex items-center gap-2">
                Our Projects
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a href="#story" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-label-md text-label-md px-6 py-3.5 rounded-xl font-semibold backdrop-blur-md transition-all">
                Get to Know Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="w-full bg-[#0d1f1c] text-white py-8 border-y border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-x divide-white/10">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">apartment</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold leading-tight">100+</div>
                <div className="font-body-sm text-[12px] text-white/60">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">groups</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold leading-tight">10+</div>
                <div className="font-body-sm text-[12px] text-white/60">Team Members</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">location_on</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold leading-tight">2</div>
                <div className="font-body-sm text-[12px] text-white/60">Regions We Serve<br/>(Plains & Hills)</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px]">calendar_today</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold leading-tight">2018</div>
                <div className="font-body-sm text-[12px] text-white/60">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="w-full py-20 lg:py-28 bg-surface text-on-surface">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col items-start justify-center">
              <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest mb-4">Our Story</span>
              <h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight mb-6">
                A Foundation<br/>Built on Trust
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Highgrade Constructions was founded in 2018 with a simple yet powerful vision — to create spaces that add value to people's lives. What began as a small team with big dreams has grown into a trusted construction partner for residential, commercial, industrial and turnkey projects across plains and hills.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Over the years, we have completed 100+ projects, building not just structures, but long-term relationships. Every project we undertake is a reflection of our commitment to quality, transparency and timely execution.
              </p>
              <div className="mt-4">
                <div className="font-display-hero text-[32px] text-primary italic leading-none" style={{ fontFamily: "'Dancing Script', cursive" }}>From Foundations</div>
                <div className="font-display-hero text-[32px] text-primary italic leading-none ml-8" style={{ fontFamily: "'Dancing Script', cursive" }}>To Futures</div>
                <div className="w-24 h-0.5 bg-secondary mt-3 ml-4"></div>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Highgrade Constructions Building" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-center gap-10 lg:pl-8 border-l border-outline-variant/30">
              <div>
                <h3 className="font-headline-lg text-[32px] text-primary font-bold leading-tight mb-1">2018</h3>
                <p className="font-body-sm text-on-surface-variant">Year Founded</p>
              </div>
              <div>
                <h3 className="font-headline-lg text-[32px] text-primary font-bold leading-tight mb-1">100+</h3>
                <p className="font-body-sm text-on-surface-variant">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-headline-lg text-[32px] text-primary font-bold leading-tight mb-1">10+</h3>
                <p className="font-body-sm text-on-surface-variant">Team Members</p>
              </div>
              <div>
                <h3 className="font-headline-lg text-[32px] text-primary font-bold leading-tight mb-1">2</h3>
                <p className="font-body-sm text-on-surface-variant">Regions We Serve<br/>(Plains & Hills)</p>
              </div>
              <div>
                <h3 className="font-headline-lg text-[32px] text-primary font-bold leading-tight mb-1">1</h3>
                <p className="font-body-sm text-on-surface-variant">Clear Mission<br/>Build Better Spaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Regions */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-4">Two Regions. One Commitment.</span>
            <h2 className="font-headline-xl text-[40px] text-primary font-bold mb-4">
              Building Across Plains and Hills
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our diverse experience across different terrains allows us to deliver solutions that are tailored, resilient and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plains */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
              <div className="aspect-[16/9] w-full">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="In the Plains" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-primary">domain</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-primary font-bold mb-3">In the Plains</h3>
                  <p className="font-body-sm text-on-surface-variant mb-6">
                    We execute residential, commercial, industrial and institutional projects across the plains with a focus on modern design, efficient project management and timely delivery.
                  </p>
                  <ul className="space-y-3 font-body-sm text-on-surface">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Residential & Commercial Buildings
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Industrial & Warehousing Structures
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Institutional Projects
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Turnkey Construction
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hills */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
              <div className="aspect-[16/9] w-full">
                <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="In the Hills" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-primary">landscape</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-primary font-bold mb-3">In the Hills</h3>
                  <p className="font-body-sm text-on-surface-variant mb-6">
                    We specialize in hill-centric construction with expertise in terrain-sensitive design, sustainable practices and durable solutions that withstand unique climatic and geographical conditions.
                  </p>
                  <ul className="space-y-3 font-body-sm text-on-surface">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Slope & Terrain-Specific Design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Retaining Structures & Hill Foundations
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Sustainable & Eco-Friendly Construction
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                      Homes, Villas & Retreats
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-20 lg:py-28 bg-surface text-on-surface">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-4">Our Values</span>
            <h2 className="font-headline-xl text-[40px] text-primary font-bold">The Principles That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>diamond</span>
              </div>
              <h3 className="font-headline-md text-primary font-bold mb-3">Quality</h3>
              <p className="font-body-sm text-on-surface-variant">We never compromise on standards.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>handshake</span>
              </div>
              <h3 className="font-headline-md text-primary font-bold mb-3">Integrity</h3>
              <p className="font-body-sm text-on-surface-variant">Transparent processes and honest communication.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>health_and_safety</span>
              </div>
              <h3 className="font-headline-md text-primary font-bold mb-3">Safety</h3>
              <p className="font-body-sm text-on-surface-variant">A safe workplace for a stronger tomorrow.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>eco</span>
              </div>
              <h3 className="font-headline-md text-primary font-bold mb-3">Sustainability</h3>
              <p className="font-body-sm text-on-surface-variant">Responsible construction for a greener future.</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}