import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

stats_html = """
{/* ================================================================= */}
{/* X. STATISTICS                                                     */}
{/* ================================================================= */}
<section className="w-full py-16 lg:py-20 bg-[#0b1a18] text-white relative overflow-hidden" id="statistics">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
  
  <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
      
      {/* Stat 1 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[56px] lg:text-[72px] font-bold text-[#fea12b] mb-3 leading-none tracking-tight">25+</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Projects Completed</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Residential, turnkey & renovation</p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[56px] lg:text-[72px] font-bold text-[#fea12b] mb-3 leading-none tracking-tight">5</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Ongoing Projects</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Currently under execution</p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[56px] lg:text-[72px] font-bold text-[#fea12b] mb-3 leading-none tracking-tight">50+</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Happy Clients</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Families across North Bengal</p>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col items-center text-center pt-6 sm:pt-0 sm:px-6 lg:px-8">
        <span className="font-headline-xl text-[56px] lg:text-[72px] font-bold text-[#fea12b] mb-3 leading-none tracking-tight">2018</span>
        <h3 className="font-headline-sm text-[18px] lg:text-[20px] font-bold text-white mb-2">Established</h3>
        <p className="font-body-sm text-[14px] text-white/60 leading-snug">Engineering-led construction company</p>
      </div>

    </div>
  </div>
</section>
"""

marker = "{/* ================================================================= */}\n{/* 7. WHY HIGH GRADE: 6 TRUST PILLARS                                */}"

if marker in content:
    content = content.replace(marker, stats_html + '\n' + marker)
    with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success!")
else:
    print("Marker not found.")
