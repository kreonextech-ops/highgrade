import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. FIX NAVBAR
content = content.replace('<div className="hidden xl:inline-flex items-center gap-1.5', '<div className="hidden 2xl:inline-flex items-center gap-1.5')

content = content.replace('<nav className="hidden xl:flex items-center gap-1 xl:gap-2 text-white/90">', '<nav className="hidden xl:flex items-center gap-0.5 xl:gap-1 text-white/90 min-w-0 flex-wrap justify-center">')
# For active link
content = content.replace('px-3.5 py-2 rounded-xl bg-primary', 'px-2 py-2 rounded-xl bg-primary')
# For other links
content = content.replace('px-3 py-2 rounded-xl text-white/80', 'px-2 py-2 rounded-xl text-white/80')

# Also change the hamburger menu breakpoints back if needed, but it's fine.
# Actually, the safest way to prevent overflow is to hide the full nav until 2xl, but let's try just shrinking the paddings first.

# 2. FIX HERO IMAGE
hero_bg_pattern = r'<div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pointer-events-none.*?</div>\s*</div>\s*</div>'

new_hero_bg = '''<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
</div>'''

content = re.sub(hero_bg_pattern, new_hero_bg, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
