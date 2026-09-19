import re

with open('tw_extracted.ts', 'r', encoding='utf-8') as f:
    content = f.read()

theme_css = "@theme {\n"

# 1. Colors
color_block = re.search(r'colors:\s*\{([^}]+)\}', content)
if color_block:
    for match in re.finditer(r'"([^"]+)":\s*"([^"]+)"', color_block.group(1)):
        theme_css += f"  --color-{match.group(1)}: {match.group(2)};\n"

# 2. Border Radius
radius_block = re.search(r'borderRadius:\s*\{([^}]+)\}', content)
if radius_block:
    for match in re.finditer(r'"([^"]+)":\s*"([^"]+)"', radius_block.group(1)):
        name = match.group(1)
        if name == "DEFAULT":
            theme_css += f"  --radius: {match.group(2)};\n"
        else:
            theme_css += f"  --radius-{name}: {match.group(2)};\n"

# 3. Spacing
spacing_block = re.search(r'spacing:\s*\{([^}]+)\}', content)
if spacing_block:
    for match in re.finditer(r'"([^"]+)":\s*"([^"]+)"', spacing_block.group(1)):
        theme_css += f"  --spacing-{match.group(1)}: {match.group(2)};\n"

# 4. Font Family
font_block = re.search(r'fontFamily:\s*\{([^}]+)\}', content)
if font_block:
    for match in re.finditer(r'"([^"]+)":\s*\[\s*"([^"]+)",\s*"([^"]+)"\s*\]', font_block.group(1)):
        theme_css += f"  --font-{match.group(1)}: '{match.group(2)}', {match.group(3)};\n"

# 5. Font Size
font_size_block = re.search(r'fontSize:\s*\{([^}]+)\}', content)
if font_size_block:
    for match in re.finditer(r'"([^"]+)":\s*\[\s*"([^"]+)",\s*\{\s*"lineHeight":\s*"([^"]+)"(?:,\s*"letterSpacing":\s*"([^"]+)")?,\s*"fontWeight":\s*"([^"]+)"\s*\}\s*\]', font_size_block.group(1)):
        name = match.group(1)
        size = match.group(2)
        line_height = match.group(3)
        letter_spacing = match.group(4)
        font_weight = match.group(5)
        
        theme_css += f"  --text-{name}: {size};\n"
        theme_css += f"  --text-{name}--line-height: {line_height};\n"
        if letter_spacing:
            theme_css += f"  --text-{name}--letter-spacing: {letter_spacing};\n"
        theme_css += f"  --text-{name}--font-weight: {font_weight};\n"

theme_css += "}\n"

with open('next-app/src/app/globals.css', 'r', encoding='utf-8') as f:
    globals_css = f.read()

# Remove old theme if present
globals_css = re.sub(r'@theme \{.*?\}', '', globals_css, flags=re.DOTALL)
globals_css = globals_css.replace('@config "../../tailwind.config.ts";', '')

if '@import "tailwindcss";' in globals_css:
    globals_css = globals_css.replace('@import "tailwindcss";', '@import "tailwindcss";\n' + theme_css)
else:
    globals_css = theme_css + globals_css

with open('next-app/src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_css)
