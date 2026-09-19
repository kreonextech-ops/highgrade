import glob

for file in glob.glob('next-app/src/app/**/*.tsx', recursive=True):
    if file.endswith('page.tsx'):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '"use client"' not in content and "'use client'" not in content:
            content = '"use client";\n\n' + content
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
