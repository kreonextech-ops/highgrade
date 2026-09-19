import os

jsx_path = 'body_extracted.jsx'
page_path = 'next-app/src/app/page.tsx'

with open(jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()

# page.tsx content
page_tsx = f"""
export default function Home() {{
  return (
    {jsx_content}
  );
}}
"""

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page_tsx)

# layout.tsx modification to add font classes to body
with open('body_class.txt', 'r', encoding='utf-8') as f:
    body_cls = f.read().strip()

layout_path = 'next-app/src/app/layout.tsx'
if os.path.exists(layout_path):
    with open(layout_path, 'r', encoding='utf-8') as f:
        layout_content = f.read()
    
    # We will replace className="..." with our body_cls if it's there
    import re
    # Find the body tag
    # Just simpler: read the file, replace the body's className
    layout_content = re.sub(r'<body[^>]*className=\{[^}]*\}[^>]*>', f'<body className="{{`{body_cls} antialiased`}}">', layout_content)
    # Also add the Google fonts link
    fonts_links = '''
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
'''
    layout_content = layout_content.replace('</head>', f'{fonts_links}</head>')
    
    with open(layout_path, 'w', encoding='utf-8') as f:
        f.write(layout_content)
