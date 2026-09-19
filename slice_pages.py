import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the Testimonials section entirely
content = re.sub(r'\{/\*\s*=================================================================\s*\*/\}\s*\{/\*\s*8\.\s*TESTIMONIALS.*?</section>', '', content, flags=re.DOTALL)
# Remove Header
content = re.sub(r'<header className="fixed top-0.*?</header>', '', content, flags=re.DOTALL)
# Remove Floating WhatsApp
content = re.sub(r'\{/\*\s*=================================================================\s*\*/\}\s*\{/\*\s*FLOATING WHATSAPP CTA.*?</main>', '</main>', content, flags=re.DOTALL)

# Extract chunks using regex based on their IDs or unique classes
def get_section(regex):
    match = re.search(regex, content, re.DOTALL)
    return match.group(0) if match else ""

hero = get_section(r'<section className="relative w-full min-h-screen.*?</section>')
stats = get_section(r'<section className="w-full py-16 lg:py-20 bg-\[\#0b1a18\].*?</section>')
about = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface relative overflow-hidden" id="about">.*?</section>')
terrains = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="terrains">.*?</section>')
services = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="services">.*?</section>')
usp = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="usp">.*?</section>')
projects = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="projects">.*?</section>')
process = get_section(r'<section className="w-full py-20 lg:py-28 bg-\[\#0d1a19\] text-white" id="process">.*?</section>')
service_areas = get_section(r'<section className="w-full py-16 lg:py-0 lg:h-\[80vh\].*?</section>')
cta = get_section(r'<section className="w-full py-20 lg:py-24 bg-\[\#fea12b\].*?</section>')
consultation = get_section(r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="consultation">.*?</section>')

wrapper_top = """export default function Page() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface pt-20">
"""
wrapper_bottom = """
    </main>
  );
}"""

home_wrapper_top = """export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
"""

# Write to files
with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(home_wrapper_top + hero + stats + service_areas + cta + wrapper_bottom)

with open('next-app/src/app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(wrapper_top + about + terrains + wrapper_bottom)

with open('next-app/src/app/services/page.tsx', 'w', encoding='utf-8') as f:
    f.write(wrapper_top + services + usp + wrapper_bottom)

with open('next-app/src/app/projects/page.tsx', 'w', encoding='utf-8') as f:
    f.write(wrapper_top + projects + wrapper_bottom)

with open('next-app/src/app/process/page.tsx', 'w', encoding='utf-8') as f:
    f.write(wrapper_top + process + wrapper_bottom)

with open('next-app/src/app/consultation/page.tsx', 'w', encoding='utf-8') as f:
    f.write(wrapper_top + consultation + wrapper_bottom)
