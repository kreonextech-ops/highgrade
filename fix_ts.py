import re

page_path = 'next-app/src/app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

# 1. Fix style="--index: 1;" or similar style="width: 100%;"
def style_replacer(match):
    style_str = match.group(1)
    props = style_str.split(';')
    obj_props = []
    for p in props:
        if not p.strip(): continue
        key, val = p.split(':', 1)
        key = key.strip()
        val = val.strip()
        # Convert snake-case to camelCase for key, except for css variables
        if key.startswith('--'):
            key_str = f"'{key}'"
        else:
            key_parts = key.split('-')
            key_str = key_parts[0] + ''.join(x.title() for x in key_parts[1:])
        
        # If val is purely numeric (or a string)
        if val.isdigit():
            obj_props.append(f"{key_str}: {val}")
        else:
            obj_props.append(f"{key_str}: '{val}'")
    
    return "style={{" + ", ".join(obj_props) + "}}"

page = re.sub(r'style="([^"]+)"', style_replacer, page)

# 2. Fix onsubmit
page = re.sub(r'onsubmit="[^"]*"', r'onSubmit={(e) => e.preventDefault()}', page, flags=re.IGNORECASE)

# 3. Fix required="required" or boolean attributes
page = re.sub(r'\brequired="[^"]*"', r'required', page, flags=re.IGNORECASE)
page = re.sub(r'\bdisabled="[^"]*"', r'disabled', page, flags=re.IGNORECASE)
page = re.sub(r'\bchecked="[^"]*"', r'checked', page, flags=re.IGNORECASE)

# 4. Fix maxlength
page = re.sub(r'\bmaxlength="(\d+)"', r'maxLength={\1}', page, flags=re.IGNORECASE)

# 5. Fix viewBox (if it was somehow skipped, standard SVG attributes)
# we don't know if there's any, but in HTML they might be lowercase
page = re.sub(r'\bviewbox=', r'viewBox=', page, flags=re.IGNORECASE)

# 6. Type errors in the script:
# src/app/page.tsx(22,61): error TS2345: Argument of type 'string | null' is not assignable to parameter of type 'string'.
# Let's fix the useEffect logic. It has some DOM manipulation.
# Replace document.querySelector(..) with `document.querySelector(...) as HTMLElement` where necessary
page = re.sub(r'(document\.querySelector\([^)]+\))', r'(\1 as HTMLElement)', page)
page = re.sub(r'(document\.getElementById\([^)]+\))', r'(\1 as HTMLElement)', page)

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)
