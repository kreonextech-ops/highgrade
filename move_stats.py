import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the statistics section
stats_pattern = r'\{/\*\s*=================================================================\s*\*/\}\n\{/\*\s*X\.\s*STATISTICS\s*\*/\}\n\{/\*\s*=================================================================\s*\*/\}\n<section className="w-full py-16 lg:py-20 bg-\[\#0b1a18\].*?</section>\n'

match = re.search(stats_pattern, content, re.DOTALL)
if not match:
    print("Could not find stats section!")
else:
    stats_block = match.group(0)
    # Remove from current position
    content = content.replace(stats_block, '')
    
    # Insert before About section (which currently is below Hero)
    about_marker = '<section className="w-full py-20 lg:py-28 bg-surface text-on-surface relative overflow-hidden" id="about">'
    
    if about_marker in content:
        content = content.replace(about_marker, stats_block + '\n' + about_marker)
        with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully moved!")
    else:
        print("Could not find About section marker!")
