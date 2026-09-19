with open('tw_extracted.ts', 'r', encoding='utf-8') as f:
    tw_config = f.read()

# Write tailwind.config.ts in next-app
with open('next-app/tailwind.config.ts', 'w', encoding='utf-8') as f:
    f.write(tw_config)

# Update globals.css
css_path = 'next-app/src/app/globals.css'
with open(css_path, 'r', encoding='utf-8') as f:
    globals_css = f.read()

# Prepend @config
if '@import "tailwindcss";' in globals_css:
    globals_css = globals_css.replace('@import "tailwindcss";', '@import "tailwindcss";\n@config "../../tailwind.config.ts";')

# Read extracted css
with open('css_extracted.css', 'r', encoding='utf-8') as f:
    extra_css = f.read()

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(globals_css + "\n" + extra_css)
