with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("''FILL' 1'", "\"'FILL' 1\"")

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
