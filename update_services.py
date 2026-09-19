import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new Services section
services_data = [
    ("Turnkey Construction", "Complete end-to-end residential construction.", "handshake"),
    ("Residential Homes", "Modern villas and family homes.", "home"),
    ("Hill Architecture", "Engineered for slopes and mountain terrain.", "terrain"),
    ("Architectural Planning", "Functional and aesthetic space planning.", "architecture"),
    ("2D Floor Plans", "Accurate technical planning drawings.", "draw"),
    ("3D Elevation Design", "Premium exterior visualization.", "view_in_ar"),
    ("Structural Design", "Safe RCC and steel structural solutions.", "foundation"),
    ("Interior Design", "Elegant interior execution.", "living"),
    ("Renovation & Remodeling", "Upgrade existing homes beautifully.", "handyman"),
    ("Project Management", "Quality, timeline, and budget supervision.", "assignment"),
    ("Landscape Development", "Outdoor living and site aesthetics.", "park"),
]

cards_html = ""
for i, (title, desc, icon) in enumerate(services_data):
    num = f"{i+1:02d}"
    cards_html += f"""
<div className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]">{icon}</span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">{num}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-2">{title}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
  {desc}
</p>
</div>
</div>"""

new_services_section = f"""<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="services">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">Our Core Services</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-3">
  Complete Construction Solutions Under One Roof
</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
  From soil testing to final key handover, our integrated engineering team eliminates subcontractor friction and assures unified quality.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
{cards_html}
</div>
</div>
</section>"""

# Find the existing services section
pattern = r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="services">.*?</section>'
content = re.sub(pattern, new_services_section, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
