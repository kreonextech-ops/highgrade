import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_service_areas = """
{/* ================================================================= */}
{/* X. SERVICE AREAS (ULTRA PREMIUM DARK EDITORIAL VERSION)           */}
{/* ================================================================= */}
<section className="w-full py-24 lg:py-32 bg-[#0b1a18] text-white relative overflow-hidden border-t border-white/5" id="service-areas">
  
  {/* Subtle Architectural Grid / Glow Background */}
  <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00514b]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
      
      {/* Left: Editorial Text */}
      <div className="lg:col-span-5">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-[#fea12b]"></span>
          <span className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-[#fea12b] font-bold">Coverage Network</span>
        </div>
        
        <h2 className="font-headline-xl text-5xl lg:text-[64px] font-bold leading-[1.05] mb-8 tracking-tight">
          Where We <br/>Build.
        </h2>
        
        <p className="font-body-lg text-white/60 mb-12 leading-relaxed max-w-md text-[17px]">
          From the deep pile foundations required in the bustling plains to the complex geotechnical rock-bolting demanded by the high ridges, our engineering footprint spans the entirety of North Bengal.
        </p>
        
        <a href="#consultation" className="inline-flex items-center gap-4 font-label-md uppercase tracking-[0.15em] text-[12px] font-bold text-white hover:text-[#fea12b] transition-colors group">
          Discuss Your Location
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#fea12b] transition-colors">
            <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">east</span>
          </div>
        </a>
      </div>

      {/* Right: Architectural Grouping */}
      <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-14">
        
        {/* Plains Group */}
        <div className="relative group">
          <div className="flex items-baseline justify-between border-b border-white/15 pb-4 mb-6 transition-colors group-hover:border-white/30">
            <h3 className="font-headline-sm text-[28px] text-white tracking-wide">The Plains</h3>
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#fea12b]/80">Elevation: ~400ft</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Siliguri', 'Pradhan Nagar', 'Bagdogra', 'Naxalbari', 'Panitanki'].map(area => (
              <div key={area} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0b1a18] transition-all duration-500 cursor-default shadow-sm">
                <span className="font-label-md font-semibold tracking-wide text-[14px]">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hills Group */}
        <div className="relative group">
          <div className="flex items-baseline justify-between border-b border-white/15 pb-4 mb-6 transition-colors group-hover:border-white/30">
            <h3 className="font-headline-sm text-[28px] text-white tracking-wide">The Hills</h3>
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#fea12b]/80">Elevation: Up to 7,000ft</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Darjeeling', 'Kalimpong', 'Kurseong', 'Dooars', 'Sikkim'].map(area => (
              <div key={area} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0b1a18] transition-all duration-500 cursor-default shadow-sm">
                <span className="font-label-md font-semibold tracking-wide text-[14px]">{area}</span>
              </div>
            ))}
            <div className="px-6 py-3 rounded-full border border-transparent bg-transparent">
              <span className="font-label-md text-white/30 italic text-[14px]">+ Surrounding Regions</span>
            </div>
          </div>
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
