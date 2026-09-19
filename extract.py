import re
import os

with open('code.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract Tailwind Config
tw_match = re.search(r'tailwind\.config\s*=\s*(\{.*?\})\s*<\/script>', html, re.DOTALL)
tw_config_str = tw_match.group(1) if tw_match else '{}'

theme_match = re.search(r'theme:\s*(\{.*\})', tw_config_str, re.DOTALL)
theme_str = theme_match.group(1) if theme_match else '{}'

tw_config = f"""import type {{ Config }} from 'tailwindcss'

const config: Config = {{
  darkMode: 'class',
  content: [
    './src/pages/**/*.{{js,ts,jsx,tsx,mdx}}',
    './src/components/**/*.{{js,ts,jsx,tsx,mdx}}',
    './src/app/**/*.{{js,ts,jsx,tsx,mdx}}',
  ],
  theme: {theme_str}
}}
export default config
"""

with open('tw_extracted.ts', 'w', encoding='utf-8') as f:
    f.write(tw_config)

# Extract CSS
css_match = re.search(r'<style>(.*?)<\/style>', html, re.DOTALL)
css_content = css_match.group(1) if css_match else ''

with open('css_extracted.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Extract body class
body_cls_match = re.search(r'<body[^>]*class="([^"]*)"', html, re.IGNORECASE)
body_cls = body_cls_match.group(1) if body_cls_match else ''
with open('body_class.txt', 'w', encoding='utf-8') as f:
    f.write(body_cls)

# Extract body
body_match = re.search(r'<body.*?>(.*?)<\/body>', html, re.DOTALL | re.IGNORECASE)
body_html = body_match.group(1) if body_match else ''

with open('body_extracted.html', 'w', encoding='utf-8') as f:
    f.write(body_html)
