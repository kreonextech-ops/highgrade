import re

with open('tw_extracted.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to extract the fontSize block properly.
# Since we know the format, let's just find all font size entries directly.
font_sizes = re.findall(r'"([^"]+)":\s*\[\s*"([^"]+)",\s*\{\s*"lineHeight":\s*"([^"]+)"(?:,\s*"letterSpacing":\s*"([^"]+)")?,\s*"fontWeight":\s*"([^"]+)"\s*\}\s*\]', content)

theme_css = ""
for name, size, line_height, letter_spacing, font_weight in font_sizes:
    theme_css += f"  --text-{name}: {size};\n"
    theme_css += f"  --text-{name}--line-height: {line_height};\n"
    if letter_spacing:
        theme_css += f"  --text-{name}--letter-spacing: {letter_spacing};\n"
    theme_css += f"  --text-{name}--font-weight: {font_weight};\n"

with open('next-app/src/app/globals.css', 'r', encoding='utf-8') as f:
    globals_css = f.read()

# Insert before the closing brace of @theme
globals_css = globals_css.replace('}\n\n\n\n@layer base', theme_css + '}\n\n\n\n@layer base')

with open('next-app/src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_css)
