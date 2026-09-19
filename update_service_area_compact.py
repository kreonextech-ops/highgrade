import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_service_areas = """
{/* ================================================================= */}
{/* X. SERVICE AREAS (COMPACT SCREEN-SIZED VERSION)                   */}
{/* ================================================================= */}
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
        
        <a href="#consultation" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-label-md font-semibold hover:bg-primary/90 transition-colors shadow-sm">
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
"""

# The previous section block starts with {/* ================================================================= */}
# and {/ * X. SERVICE AREAS... */}
# Let's use a regex to replace it
pattern = r'\{/\*\s*=================================================================\s*\*/\}\s*\{/\*\s*X\.\s*SERVICE AREAS.*?</section>'
content = re.sub(pattern, new_service_areas, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
