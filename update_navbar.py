import re

with open('next-app/src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <a href="#..."> with <Link href="/...">
content = content.replace('<a ', '<Link ')
content = content.replace('</a>', '</Link>')
content = content.replace('href="#"', 'href="/"')
content = content.replace('href="#about"', 'href="/about"')
content = content.replace('href="#services"', 'href="/services"')
content = content.replace('href="#projects"', 'href="/projects"')
content = content.replace('href="#process"', 'href="/process"')
content = content.replace('href="#consultation"', 'href="/consultation"')
content = content.replace('Consult an Architect', 'Consult an Expert')
content = content.replace('Contact', 'Consult an Expert')

# Remove Plains & Hills link (which uses #terrains)
content = re.sub(r'<Link[^>]*href="#terrains".*?</Link>', '', content, flags=re.DOTALL)
# Remove Reviews link (which uses #testimonials)
content = re.sub(r'<Link[^>]*href="#testimonials".*?</Link>', '', content, flags=re.DOTALL)

with open('next-app/src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
