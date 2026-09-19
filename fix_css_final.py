import re

with open('next-app/src/app/globals.css', 'r', encoding='utf-8') as f:
    globals_css = f.read()

# 1. Reorder imports: @import "tailwindcss" should be first if not already
globals_css = globals_css.replace('@import "tailwindcss";\n', '')
globals_css = '@import "tailwindcss";\n' + globals_css

# 2. Inject font sizes
with open('tw_extracted.ts', 'r', encoding='utf-8') as f:
    tw_content = f.read()

font_sizes = re.findall(r'"([^"]+)":\s*\[\s*"([^"]+)",\s*\{\s*"lineHeight":\s*"([^"]+)"(?:,\s*"letterSpacing":\s*"([^"]+)")?,\s*"fontWeight":\s*"([^"]+)"\s*\}\s*\]', tw_content)

theme_css = ""
for name, size, line_height, letter_spacing, font_weight in font_sizes:
    theme_css += f"  --text-{name}: {size};\n"
    theme_css += f"  --text-{name}--line-height: {line_height};\n"
    if letter_spacing:
        theme_css += f"  --text-{name}--letter-spacing: {letter_spacing};\n"
    theme_css += f"  --text-{name}--font-weight: {font_weight};\n"

# Replace before closing brace of @theme
globals_css = re.sub(r'(\n@theme\s*\{.*?)(?=\n\})', r'\1\n' + theme_css, globals_css, flags=re.DOTALL)

with open('next-app/src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_css)
