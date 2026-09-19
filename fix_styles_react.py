import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix style strings left over from html
# We'll just manually replace the specific cases we know are in there
# usually style="display: none;" or style="background-image: url('...');"
def replace_style(match):
    style_str = match.group(1)
    # Very basic parser for style mapping
    # Note: if there are complex styles, this might fail, but for simple ones it's fine.
    if 'display: none' in style_str:
        return 'style={{ display: "none" }}'
    elif 'background-image' in style_str:
        url_match = re.search(r"url\('([^']+)'\)", style_str)
        if url_match:
            return f"style={{{{ backgroundImage: \"url('{url_match.group(1)}')\" }}}}"
    elif 'font-variation-settings' in style_str:
        return 'style={{ fontVariationSettings: "\\\'FILL\\\' 1" }}'
    return match.group(0)

content = re.sub(r'style="([^"]+)"', replace_style, content)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
