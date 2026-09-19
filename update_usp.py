import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# The cards data
cards_data = [
    {
        "title": "Civil Engineer Supervision",
        "desc": "Every project is monitored by qualified engineers—not only site contractors.",
        "icon": "engineering",
        "bg_color": "bg-secondary-container/20",
        "text_color": "text-secondary"
    },
    {
        "title": "Design-to-Reality Accuracy",
        "desc": "We execute according to approved drawings with minimal deviation.",
        "icon": "design_services",
        "bg_color": "bg-primary-container/20",
        "text_color": "text-primary"
    },
    {
        "title": "Transparent Material Usage",
        "desc": "Clients know what materials are being used at every stage.",
        "icon": "visibility",
        "bg_color": "bg-secondary-container/20",
        "text_color": "text-secondary"
    },
    {
        "title": "Weekly Progress Updates",
        "desc": "Receive regular site photos, videos, and progress reports.",
        "icon": "update",
        "bg_color": "bg-primary-container/20",
        "text_color": "text-primary"
    },
    {
        "title": "IS Code Based Construction",
        "desc": "Structural practices follow recognized engineering standards.",
        "icon": "rule",
        "bg_color": "bg-secondary-container/20",
        "text_color": "text-secondary"
    },
    {
        "title": "Single Point Responsibility",
        "desc": "Planning, design, construction, interiors, and renovation under one team.",
        "icon": "account_tree",
        "bg_color": "bg-primary-container/20",
        "text_color": "text-primary"
    }
]

cards_html = ""
for card in cards_data:
    cards_html += f"""
<div className="p-7 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-xl {card['bg_color']} {card['text_color']} flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-[26px]">{card['icon']}</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">{card['title']}</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
  {card['desc']}
</p>
</div>"""

new_section = f"""<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="usp">
<div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-2">USP</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-3">
              Why Choose Highgrade
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              These are stronger than generic contractor claims.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{cards_html}
</div>
</div>
</section>"""

# Using regex to replace the section from the comment to the closing section tag.
pattern = r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface">\s*<div className="max-w-\[1360px\] mx-auto px-4 sm:px-6 lg:px-8">\s*<div className="max-w-2xl mx-auto text-center mb-16">\s*<span className="font-label-caps.*?</section>'
content = re.sub(pattern, new_section, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
