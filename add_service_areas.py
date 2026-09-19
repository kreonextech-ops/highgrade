with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

service_areas_jsx = """
{/* ================================================================= */}
{/* X. SERVICE AREAS                                                  */}
{/* ================================================================= */}
<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface relative overflow-hidden" id="service-areas">
  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="lg:col-span-5 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase tracking-wider mb-4">
          Coverage
        </div>
        <h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight mb-5">
          Service Areas
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
          From the bustling plains to the challenging terrains of the hills, we proudly bring engineering precision to:
        </p>
        
        <div className="flex flex-wrap gap-3">
          {['Siliguri', 'Pradhan Nagar', 'Bagdogra', 'Naxalbari', 'Panitanki', 'Darjeeling', 'Kalimpong', 'Kurseong', 'Dooars', 'Sikkim'].map((area, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-outline-variant/30 shadow-sm hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
              <span className="font-label-md text-on-surface font-semibold">{area}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent border border-transparent">
            <span className="font-label-md text-on-surface-variant italic">and more...</span>
          </div>
        </div>
      </div>
      
      {/* Right Map Image */}
      <div className="lg:col-span-7 relative">
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-outline-variant/20">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Topographical Map" className="w-full h-full object-cover opacity-90 grayscale" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          
          {/* Floating Map Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="bg-surface p-4 rounded-full shadow-2xl animate-bounce border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary-container text-[40px] leading-none block">pin_drop</span>
            </div>
            <div className="w-12 h-3 bg-black/20 rounded-[100%] blur-[2px] mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
"""

cta_marker = '<section className="w-full py-20 lg:py-24 bg-[#fea12b]'

if cta_marker in content:
    content = content.replace(cta_marker, service_areas_jsx + '\n' + cta_marker)
else:
    print("Could not find CTA marker!")

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
