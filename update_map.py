import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_map_html = """{/* Right Map Image */}
      <div className="lg:col-span-7 relative h-full min-h-[400px]">
        <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-outline-variant/30 bg-surface group">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Siliguri,%20West%20Bengal&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="absolute inset-0 w-full h-full grayscale-[0.8] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[6px] border-surface/20 rounded-3xl mix-blend-overlay"></div>
        </div>
      </div>"""

pattern = r'\{/\*\s*Right Map Image\s*\*/\}.*?(?=    </div>\s*</div>\s*</section>)'
content = re.sub(pattern, new_map_html + '\n', content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
