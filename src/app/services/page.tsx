"use client";

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
                "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f1c]/90 via-[#0d1f1c]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl flex flex-col items-start">
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
                <div className="text-2xl font-bold text-white leading-tight">10+</div>
                <div className="text-sm text-white/60">Years of Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-6 lg:pl-8">
              <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center shrink-0 text-[#fea12b] bg-white/5">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">250+</div>
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
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 block">OUR SERVICES</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1f1c]">Services Tailored to Your Vision</h2>
            </div>
            <div className="max-w-md flex flex-col items-start md:items-end">
              <p className="text-gray-600 mb-4 md:text-right">
                We offer a comprehensive range of construction and infrastructure services, combining technical expertise with practical, sustainable solutions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0d1f1c] font-bold hover:text-[#fea12b] transition-colors pb-1 border-b-2 border-[#0d1f1c] hover:border-[#fea12b]">
                View All Services <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Residential Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">apartment</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Residential Construction</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Custom homes, villas and independent houses built with quality, comfort and care.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Commercial Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Commercial Construction</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Offices, retail spaces, hotels and business complexes designed for growth.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">factory</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Industrial Construction</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Factories, warehouses and infrastructure for industrial development.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hill-Centric Projects" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">landscape</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Hill-Centric Projects</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Specialized construction for hilly terrains with safe, durable and climate-resilient design.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architectural & Structural Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">architecture</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Architectural & Structural Design</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">End-to-end design, planning and structural solutions.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 6 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior & Exterior Works" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">chair</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Interior & Exterior Works</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Functional and aesthetic interiors and exteriors tailored to your style.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 7 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Renovation & Remodeling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">handyman</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Renovation & Remodeling</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Upgrade, expand or transform your existing space.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            {/* Service Card 8 */}
            <div className="bg-[#f9fafa] border border-gray-100 p-4 rounded-xl flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Turnkey Projects" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-5 left-4 bg-white w-10 h-10 rounded-md shadow flex items-center justify-center text-[#fea12b]">
                  <span className="material-symbols-outlined text-[20px]">key</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f1c] mb-2 mt-2">Turnkey Projects</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">Complete solution from concept to handover — we handle everything.</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0d1f1c] group-hover:text-[#fea12b] transition-colors">
                Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
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

      {/* OUR PROCESS */}
      <section className="w-full py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 block">OUR PROCESS</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1f1c] mb-4">From Concept to Creation</h2>
            <p className="text-gray-600">A streamlined process to ensure your project is delivered smoothly and successfully.</p>
          </div>

          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-[#fea12b] opacity-40 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#0d1f1c] mb-4 relative z-10">
                  <span className="material-symbols-outlined text-[32px]">article</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1f1c]">01<br/>Consultation</h3>
                <p className="text-sm text-gray-600 mt-2">Understand<br/>your needs</p>
                <div className="hidden md:block absolute right-0 top-10 translate-x-1/2 -translate-y-1/2 text-[#fea12b] bg-[#f8f9fa] z-10">
                   <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#0d1f1c] mb-4 relative z-10">
                  <span className="material-symbols-outlined text-[32px]">lightbulb</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1f1c]">02<br/>Planning & Design</h3>
                <p className="text-sm text-gray-600 mt-2">Detailed design<br/>and approvals</p>
                <div className="hidden md:block absolute right-0 top-10 translate-x-1/2 -translate-y-1/2 text-[#fea12b] bg-[#f8f9fa] z-10">
                   <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#0d1f1c] mb-4 relative z-10">
                  <span className="material-symbols-outlined text-[32px]">settings</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1f1c]">03<br/>Execution</h3>
                <p className="text-sm text-gray-600 mt-2">Quality construction<br/>with regular updates</p>
                <div className="hidden md:block absolute right-0 top-10 translate-x-1/2 -translate-y-1/2 text-[#fea12b] bg-[#f8f9fa] z-10">
                   <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-[#0d1f1c] mb-4 relative z-10">
                  <span className="material-symbols-outlined text-[32px]">verified_user</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d1f1c]">04<br/>Handover</h3>
                <p className="text-sm text-gray-600 mt-2">On-time delivery<br/>and support</p>
              </div>
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
                <span className="font-bold">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}