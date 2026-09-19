import os

css_path = 'next-app/src/app/globals.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Add fonts import and plugins
imports = """@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
@import "tailwindcss";
@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/container-queries";
"""

css = css.replace('@import "tailwindcss";', imports)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
