import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_service_areas = """
{/* ================================================================= */}
{/* X. SERVICE AREAS (AS PER NEW DESIGN)                              */}
{/* ================================================================= */}
<section className="w-full py-20 lg:py-28 bg-surface text-on-surface relative overflow-hidden" id="service-areas">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      
      {/* Left Column (3.5 / 12) */}
      <div className="lg:col-span-4 flex flex-col items-start">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef1ef] text-[#1b3834] font-label-caps text-[10px] uppercase tracking-widest mb-6 font-bold">
          Service Areas
        </div>
        
        <h2 className="font-headline-xl text-5xl text-primary font-bold leading-[1.1] mb-6">
          Building Across<br/>North Bengal
        </h2>
        
        <div className="w-12 h-1 bg-secondary-container mb-6"></div>
        
        <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed pr-4">
          From the bustling plains to the serene hills, we proudly bring engineering precision and trusted construction services to homes and communities across North Bengal and beyond.
        </p>
        
        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          {['Siliguri', 'Pradhan Nagar', 'Bagdogra', 'Naxalbari', 'Panitanki', 'Darjeeling', 'Kalimpong', 'Kurseong', 'Dooars', 'Sikkim'].map((area, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/40 shadow-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
              <span className="font-label-md text-on-surface font-semibold">{area}</span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20 shadow-sm col-span-2 sm:col-span-1">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">add</span>
            <span className="font-label-md text-on-surface-variant font-semibold">More Areas</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mt-auto">
          <a href="#consultation" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-label-md font-semibold hover:bg-primary/90 transition-colors">
            Get a Free Site Visit
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[28px]">headset_mic</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant">Have a project in another location?</span>
              <span className="text-[13px] text-primary font-bold">Talk to our team</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle Column - Cards (5 / 12) */}
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[500px]">
        {/* Plains Card */}
        <div className="relative rounded-3xl overflow-hidden group shadow-lg">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="Plains Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b3834]/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-white text-[32px] font-light">domain</span>
              <div className="flex flex-col">
                <span className="text-white font-headline-sm text-2xl font-bold mb-1">Plains</span>
                <span className="text-white/80 text-[10px]">Modern Living, Solid Foundations</span>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary-container transition-colors shrink-0">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
        
        {/* Hills Card */}
        <div className="relative rounded-3xl overflow-hidden group shadow-lg">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Hills Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b3834]/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-white text-[32px] font-light">terrain</span>
              <div className="flex flex-col">
                <span className="text-white font-headline-sm text-2xl font-bold mb-1">Hills</span>
                <span className="text-white/80 text-[10px]">Engineered for Elevations</span>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary-container transition-colors shrink-0">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Column - Info List (3 / 12) */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        
        <div className="bg-[#eef1ef] rounded-3xl p-6 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#1b3834]/5 border border-[#1b3834]/10 flex items-center justify-center text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[20px]">eco</span>
            </div>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase font-label-caps">Our Reach</span>
          </div>
          <h3 className="font-headline-sm text-[22px] font-bold text-primary leading-tight mb-3">
            Different Terrains.<br/>Same Commitment.
          </h3>
          <p className="text-[13px] text-on-surface-variant leading-relaxed">
            Whether it's the plains or the hills, our team ensures the same level of quality, safety, and engineering excellence at every location.
          </p>
        </div>
        
        <div className="flex flex-col gap-5 px-2 mt-2">
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded-full bg-[#eef1ef] border border-outline-variant/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[14px] font-bold text-primary">Local Expertise</span>
              <span className="text-[12px] text-on-surface-variant mt-0.5">Deep understanding of regional conditions</span>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded-full bg-[#eef1ef] border border-outline-variant/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[14px] font-bold text-primary">On-Site Support</span>
              <span className="text-[12px] text-on-surface-variant mt-0.5">Regular site visits and project supervision</span>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded-full bg-[#eef1ef] border border-outline-variant/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">cloud_done</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[14px] font-bold text-primary">All-Weather Execution</span>
              <span className="text-[12px] text-on-surface-variant mt-0.5">Solutions for diverse terrain and climate</span>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-11 h-11 rounded-full bg-[#eef1ef] border border-outline-variant/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">handshake</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[14px] font-bold text-primary">Trusted Across Region</span>
              <span className="text-[12px] text-on-surface-variant mt-0.5">Growing with communities across North Bengal</span>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    
    {/* Bottom Bar */}
    <div className="mt-16 w-full bg-gradient-to-r from-[#f4f5f4] via-[#eef1ef] to-[#f4f5f4] rounded-[40px] p-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/30">
      
      <div className="flex items-center gap-5 flex-1 w-full">
        <span className="material-symbols-outlined text-[36px] text-primary shrink-0">pin_drop</span>
        <div className="flex flex-col">
          <span className="text-[11px] text-on-surface-variant font-semibold uppercase tracking-wider mb-1">Building Better Places</span>
          <span className="text-[16px] font-bold text-primary font-headline-sm">Homes. Hills. Communities.</span>
        </div>
      </div>
      
      <div className="hidden md:block w-px h-12 bg-outline-variant/40"></div>
      
      <div className="flex items-center gap-5 flex-1 w-full md:justify-center">
        <span className="material-symbols-outlined text-[40px] text-primary shrink-0">landscape</span>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold text-primary font-headline-sm">From Foundations to</span>
          <span className="text-[16px] font-bold text-primary font-headline-sm">New Horizons</span>
        </div>
      </div>
      
      <div className="hidden md:block w-px h-12 bg-outline-variant/40"></div>
      
      <div className="flex items-center gap-5 flex-1 w-full md:justify-end">
        <span className="material-symbols-outlined text-[36px] text-primary shrink-0">other_houses</span>
        <div className="flex flex-col">
          <span className="text-[13px] text-primary font-bold">Your Neighbourhood Builder</span>
          <span className="text-[11px] text-on-surface-variant font-semibold mt-1">We build where people live, grow and belong.</span>
        </div>
      </div>
      
    </div>
    
  </div>
</section>
"""

pattern = r'\{/\*\s*=================================================================\s*\*/\}\s*\{/\*\s*X\.\s*SERVICE AREAS.*?</section>'
content = re.sub(pattern, new_service_areas, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
