import re

def get_section(filepath, regex):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(regex, content, re.DOTALL)
            return match.group(0) if match else ""
    except:
        return ""

home_path = 'next-app/src/app/page.tsx'
about_path = 'next-app/src/app/about/page.tsx'
services_path = 'next-app/src/app/services/page.tsx'
projects_path = 'next-app/src/app/projects/page.tsx'
process_path = 'next-app/src/app/process/page.tsx'
consult_path = 'next-app/src/app/consultation/page.tsx'

hero = get_section(home_path, r'<section className="relative w-full min-h-screen.*?</section>')
stats = get_section(home_path, r'<section className="w-full py-16 lg:py-20 bg-\[\#0b1a18\].*?</section>')
about = get_section(about_path, r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface relative overflow-hidden" id="about">.*?</section>')
terrains = get_section(about_path, r'<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="terrains">.*?</section>')
services = get_section(services_path, r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="services">.*?</section>')
usp = get_section(services_path, r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="usp">.*?</section>')
projects = get_section(projects_path, r'<section className="w-full py-20 lg:py-28 bg-surface-container-low text-on-surface" id="projects">.*?</section>')
process = get_section(process_path, r'<section className="w-full py-20 lg:py-28 bg-\[\#0d1a19\] text-white" id="process">.*?</section>')
service_areas = get_section(home_path, r'<section className="w-full py-16 lg:py-0 lg:h-\[80vh\].*?</section>')
cta = get_section(home_path, r'<section className="w-full py-20 lg:py-24 bg-\[\#fea12b\].*?</section>')
consultation = get_section(consult_path, r'<section className="w-full py-20 lg:py-28 bg-surface text-on-surface" id="consultation">.*?</section>')

full_home = f"""\"use client\";

export default function Home() {{
  return (
    <main className="flex min-h-screen flex-col w-full bg-surface">
      {hero}
      {stats}
      {about}
      {terrains}
      {services}
      {usp}
      {projects}
      {process}
      {service_areas}
      {cta}
      {consultation}
    </main>
  );
}}
"""

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(full_home)
