"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0a1514] text-white">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-[#fea12b] mb-6 font-bold">
              L E T ' S &nbsp; C O N N E C T
            </div>
            <h1 className="font-display-hero text-[44px] sm:text-[58px] lg:text-[68px] leading-[1.05] tracking-tight mb-6 font-['Playfair_Display']">
              Build Something<br />Great Together.
            </h1>
            <p className="font-subheading-editorial text-[18px] text-white/80 max-w-2xl leading-relaxed mb-10">
              Whether you're planning a home in the plains, a commercial space, or a project in the hills — we're here to listen, guide and build with you.
            </p>
            
            <div className="flex flex-wrap gap-6 sm:gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <div className="font-bold text-white text-[15px]">Quick Response</div>
                  <div className="text-white/60 text-[13px]">We reply within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <div className="font-bold text-white text-[15px]">Expert Guidance</div>
                  <div className="text-white/60 text-[13px]">From concept to completion</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <div className="font-bold text-white text-[15px]">Site Visit Support</div>
                  <div className="text-white/60 text-[13px]">On request, across regions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Text */}
        <div className="absolute top-32 right-10 lg:right-32 opacity-80 hidden md:block z-10 transform rotate-[-5deg] pointer-events-none">
          <div className="font-['Playfair_Display'] italic text-5xl lg:text-7xl text-white/40">
            Your<br />
            <span className="ml-12">Vision</span><br />
            <span className="ml-24 text-3xl lg:text-5xl">Our Commitment</span>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="relative z-20 -mt-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col md:flex-row flex-wrap justify-between gap-6 border border-gray-100">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-700">call</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1 font-['Playfair_Display']">Call Us</div>
              <div className="text-gray-600 text-sm">+91 98765 43210</div>
              <div className="text-gray-600 text-sm">+91 91234 56789</div>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gray-100"></div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-700">mail</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1 font-['Playfair_Display']">Email Us</div>
              <div className="text-gray-600 text-sm">dayalconstruction.office@gmail.com</div>
              <div className="text-gray-600 text-sm">info@highgradeconstructions.in</div>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gray-100"></div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-700">location_on</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1 font-['Playfair_Display']">Visit Our Office</div>
              <div className="text-gray-600 text-sm">Siliguri, West Bengal, India</div>
              <div className="text-gray-500 text-xs italic">(Full address below)</div>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gray-100"></div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-gray-700">schedule</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1 font-['Playfair_Display']">Working Hours</div>
              <div className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</div>
              <div className="text-gray-600 text-sm">Sunday: By Appointment</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (FORM + MAP) */}
      <section className="w-full py-16 lg:py-24 bg-[#fafafa]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: FORM */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3">
                S E N D &nbsp; U S &nbsp; A &nbsp; M E S S A G E
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.1] mb-4">
                Request a Call or Share Your Requirements.
              </h2>
              <p className="text-gray-600 mb-8 text-[15px]">
                We'll get back to you with the right solutions for your project.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your name" className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your phone number" className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter your email" className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Project Location</label>
                    <input type="text" placeholder="City / Area" className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Type of Project</label>
                  <div className="relative">
                    <select className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all text-gray-600">
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="turnkey">Turnkey</option>
                      <option value="renovation">Renovation</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Your Message / Requirements <span className="text-red-500">*</span></label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#f6f6f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#fea12b]/20 transition-all resize-none placeholder:text-gray-400"></textarea>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input type="checkbox" id="agree" className="w-4 h-4 rounded border-gray-300 text-[#f59a23] focus:ring-[#f59a23]" />
                  <label htmlFor="agree" className="text-sm text-gray-600">I agree to be contacted by Highgrade Constructions.</label>
                </div>

                <button type="button" className="w-full bg-[#f59a23] hover:bg-[#e0891d] text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all mt-4">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: MAP & OFFICE INFO */}
            <div className="flex flex-col gap-6">
              {/* Map Card */}
              <div className="bg-[#e7eed9] rounded-2xl shadow-sm border border-gray-100 h-[350px] relative overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Map" className="w-full h-full object-cover rounded-xl opacity-60 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-white p-3.5 rounded-xl shadow-lg flex flex-col gap-1 max-w-[260px] border border-gray-100">
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                    <div className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded">
                      <span className="material-symbols-outlined text-[#fea12b] text-[14px]">home</span>
                    </div>
                    Highgrade Constructions
                  </div>
                  <div className="text-[11px] text-gray-500 ml-7">Siliguri, West Bengal, India</div>
                  <a href="#" className="text-[11px] font-bold text-gray-800 mt-1 ml-7 flex items-center gap-1 hover:text-[#fea12b] transition-colors">
                    View on Google Maps
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
                {/* Custom Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                    <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
                  </div>
                  <div className="font-bold text-gray-900 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-sm mt-1 shadow-sm">
                    Siliguri
                  </div>
                </div>
              </div>

              {/* Office Image & Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[280px]">
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-gray-400 text-[32px]">domain</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 mb-3">Our Office</h3>
                  <div className="flex gap-2.5 mb-5 items-start">
                    <span className="material-symbols-outlined text-gray-400 text-[18px] mt-0.5">location_on</span>
                    <div>
                      <div className="font-bold text-gray-900 text-[13px]">Siliguri, West Bengal, India</div>
                      <div className="text-[11px] text-gray-500">(Near Bagdogra / Lokenath Nagar Area)</div>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    We welcome you to our office for detailed discussions, project consultations and site views. Please call us in advance to schedule a meeting.
                  </p>
                </div>
                <div className="w-full sm:w-5/12 h-[250px] sm:h-full relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office Reception" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-gray-700 text-[14px]">home</span>
                    <span className="text-[10px] font-bold text-gray-900 tracking-wider">HIGHGRADE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-16 lg:py-24 bg-surface border-t border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3">
                C O M M O N &nbsp; Q U E R I E S
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="flex flex-col gap-3">
                {/* FAQ Item 1 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:border-gray-300">
                  <button 
                    onClick={() => toggleFaq(0)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-bold text-gray-800 text-[15px] group-hover:text-gray-900">Do you provide site visits?</span>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 transition-colors">
                      {openFaq === 0 ? 'remove' : 'add'}
                    </span>
                  </button>
                  {openFaq === 0 && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      Yes, we provide comprehensive site visits to assess the terrain, understand your requirements, and provide accurate estimates. Site visits in Siliguri and nearby areas are usually free of charge.
                    </div>
                  )}
                </div>
                
                {/* FAQ Item 2 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:border-gray-300">
                  <button 
                    onClick={() => toggleFaq(1)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-bold text-gray-800 text-[15px] group-hover:text-gray-900">Do you handle projects in hill areas?</span>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 transition-colors">
                      {openFaq === 1 ? 'remove' : 'add'}
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      Absolutely. We have extensive expertise in constructing resilient, earthquake-resistant structures in hill terrains like Darjeeling, Kalimpong, and Kurseong.
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:border-gray-300">
                  <button 
                    onClick={() => toggleFaq(2)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-bold text-gray-800 text-[15px] group-hover:text-gray-900">What information should I share for a quote?</span>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 transition-colors">
                      {openFaq === 2 ? 'remove' : 'add'}
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      To provide an accurate quote, we ideally need your plot details (size, location), basic requirements (residential/commercial, number of floors), and any architectural plans if you already have them.
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center gap-2 font-bold text-gray-700 hover:text-gray-900 transition-colors border border-gray-200 hover:border-gray-300 rounded-lg px-5 py-2.5 bg-white shadow-sm text-sm">
                  <span>More Questions</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 h-full">
              <div className="bg-[#0b1a18] rounded-2xl p-10 h-full flex flex-col justify-center relative overflow-hidden shadow-xl text-white min-h-[300px]">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <span className="material-symbols-outlined text-[#fea12b] text-[28px]">home</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[28px] font-bold mb-3 leading-tight">
                    Have a Project in Mind?
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed text-[15px] max-w-sm">
                    Let's discuss your ideas and turn them into well-built spaces.
                  </p>
                  <button className="bg-[#f59a23] hover:bg-[#e0891d] text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all w-fit text-sm">
                    <span>Get a Quote</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
                
                {/* Blueprint visual element */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                  <span className="material-symbols-outlined text-[200px]">architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
