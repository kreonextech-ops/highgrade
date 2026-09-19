import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# The cards data
cards_data = [
    {
        "title": "Consultation & Site Visit",
        "desc": "Understanding your vision, land, and requirements."
    },
    {
        "title": "Planning & Estimation",
        "desc": "Budget planning and technical feasibility."
    },
    {
        "title": "Architectural Design",
        "desc": "2D layouts and premium 3D elevations."
    },
    {
        "title": "Structural Engineering",
        "desc": "Safe, optimized structural drawings."
    },
    {
        "title": "Construction Execution",
        "desc": "Quality-controlled site execution."
    },
    {
        "title": "Quality Inspection",
        "desc": "Multiple engineering checkpoints before completion."
    },
    {
        "title": "Project Handover",
        "desc": "Delivering a home built to last for generations."
    }
]

cards_html = ""
for i, card in enumerate(cards_data):
    num = f"{i+1:02d}"
    cards_html += f"""
<div className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] flex items-center justify-center font-bold mb-4 shadow-md relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
  {num}
</div>
<h3 className="font-headline-sm text-[18px] text-white font-bold mb-1 leading-tight relative z-10">{card['title']}</h3>
<p className="font-body-sm text-[14px] text-outline-variant leading-snug relative z-10 mt-1">
  {card['desc']}
</p>
</div>"""

new_section = f"""<section className="w-full py-20 lg:py-28 bg-[#0d1a19] text-white" id="process">
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
{cards_html}
</div>
</div>
</section>"""

# Find the existing process section
pattern = r'<section className="w-full py-20 lg:py-28 bg-\[\#0d1a19\] text-white" id="process">.*?</section>'
content = re.sub(pattern, new_section, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
