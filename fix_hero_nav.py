import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Navbar changes: lg:flex -> xl:flex, lg:hidden -> xl:hidden, h-20 -> h-auto min-h-[5rem] py-3
# Change the navigation matrix breakpoint
content = content.replace('<nav className="hidden lg:flex', '<nav className="hidden xl:flex')
# Change the hamburger menu breakpoint
content = content.replace('<a className="lg:hidden p-2 rounded-xl', '<a className="xl:hidden p-2 rounded-xl')

# Change h-20 to h-auto min-h-[5rem] py-2 to prevent any overflow clipping just in case
content = content.replace('<div className="h-20 px-4', '<div className="h-auto min-h-[5rem] py-2 px-4')

# 2. Hero Section green layer removal
# Replace bg-[#0a1514] with bg-[#000000] in the hero section to remove the green tint from the background
content = content.replace('bg-[#0a1514]', 'bg-[#000000]')
# Remove the bg-primary/25 green spotlight
content = re.sub(r'<div className="absolute top-20 left-1/4 -translate-x-1/2 w-\[650px\] h-\[400px\] bg-primary/25 blur-\[140px\] rounded-full pointer-events-none"></div>\n?', '', content)

# 3. There is another green tint on the navbar maybe? bg-[#0b1a18]/85.
# Let's leave it unless specified, since "hero section" was explicitly mentioned.

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
