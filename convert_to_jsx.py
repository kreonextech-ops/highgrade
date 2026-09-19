import re

def html_to_jsx(html):
    # Replace class with className
    html = re.sub(r'\bclass=', 'className=', html)
    # Replace for with htmlFor
    html = re.sub(r'\bfor=', 'htmlFor=', html)
    # Replace tabindex with tabIndex
    html = re.sub(r'\btabindex=', 'tabIndex=', html)
    
    # Close common self-closing tags
    tags = ['img', 'br', 'hr', 'input', 'meta', 'link']
    for tag in tags:
        # Match <tag ... > but not <tag ... />
        pattern = re.compile(r'<' + tag + r'([^>]*?)(?<!/)>', re.IGNORECASE)
        html = pattern.sub(r'<' + tag + r'\1 />', html)

    # Convert stroke-width to strokeWidth, stroke-linecap to strokeLinecap, stroke-linejoin to strokeLinejoin
    html = re.sub(r'stroke-width=', 'strokeWidth=', html)
    html = re.sub(r'stroke-linecap=', 'strokeLinecap=', html)
    html = re.sub(r'stroke-linejoin=', 'strokeLinejoin=', html)
    html = re.sub(r'fill-rule=', 'fillRule=', html)
    html = re.sub(r'clip-rule=', 'clipRule=', html)

    # Replace inline styles if any style="..."
    # Note: inline styles need to be converted to objects in JSX.
    # We will just strip them or hopefully there are few.
    # I'll convert style="background-image: url('...');" manually if found
    
    def style_replacer(match):
        style_str = match.group(1)
        # simplistic conversion for background-image
        if "background-image" in style_str:
            url_match = re.search(r"url\('([^']+)'\)", style_str)
            if url_match:
                return f"style={{{{ backgroundImage: \"url('{url_match.group(1)}')\" }}}}"
        return match.group(0) # Keep original if complex, might cause error but we can fix manually
    html = re.sub(r'style="([^"]+)"', style_replacer, html)

    # Convert HTML comments to JSX comments
    html = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', html, flags=re.DOTALL)
    
    return html

with open('body_extracted.html', 'r', encoding='utf-8') as f:
    html = f.read()

jsx = html_to_jsx(html)

# Wrap in a fragment
jsx = f"<>\n{jsx}\n</>"

with open('body_extracted.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx)
