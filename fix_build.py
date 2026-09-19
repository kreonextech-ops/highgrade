import os
import re

tw_path = 'next-app/tailwind.config.ts'
with open(tw_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix tailwind.config.ts
# We need to make sure the brackets match.
# The theme value should just be the theme object.
# Let's extract exactly what's inside theme: { ... }
# since it's just a dict, let's fix it manually with regex.
# Actually, the problem is just too many closing braces.
content = re.sub(r'\}\s*\}\s*\}\s*\}\s*\}\s*export default config', r'}\n  }\n}\nexport default config', content)

with open(tw_path, 'w', encoding='utf-8') as f:
    f.write(content)

page_path = 'next-app/src/app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

# Add 'use client' and useEffect for scripts
if "'use client';" not in page:
    page = "'use client';\nimport { useEffect } from 'react';\n" + page

# Replace the <script> tags with useEffect
script_content_match = re.search(r'<script>\s*\(function\(\)\s*\{(.*?)\}\)\(\);\s*</script>', page, re.DOTALL)
if script_content_match:
    script_logic = script_content_match.group(1)
    
    # Insert inside the component
    # Find the start of the component
    comp_start = page.find('export default function Home() {')
    comp_body_start = page.find('{', comp_start) + 1
    
    use_effect_str = f"\n  useEffect(() => {{{script_logic}\n  }}, []);\n"
    
    page = page[:comp_body_start] + use_effect_str + page[comp_body_start:]
    
    # Remove the old script tag
    page = re.sub(r'<script>\s*\(function\(\)\s*\{.*?\}\)\(\);\s*</script>', '', page, flags=re.DOTALL)

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)
