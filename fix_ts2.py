import re

page_path = 'next-app/src/app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

# Fix 1 & 2: script DOM manipulation types
# `(btn.getAttribute('data-filter') as string)` or similar
page = re.sub(r'(btn\.getAttribute\([^)]+\))', r'(\1 as string)', page)

# Fix 2: Property 'style' does not exist on type 'Element'.
page = re.sub(r'card\.style\.', r'(card as HTMLElement).style.', page)

# Fix 3: Type 'string' is not assignable to type 'boolean | undefined'. (likely `checked="true"`)
page = re.sub(r'\bchecked="[^"]*"', r'defaultChecked', page) # React prefers defaultChecked
page = re.sub(r'\bchecked(?!.*=)', r'defaultChecked', page) 

# Let's just fix any `checked="true"` to `defaultChecked={true}`
page = re.sub(r'checked="true"', 'defaultChecked={true}', page, flags=re.IGNORECASE)
page = re.sub(r'checked="checked"', 'defaultChecked={true}', page, flags=re.IGNORECASE)

# Or maybe it's `required="true"`
page = re.sub(r'required="true"', 'required={true}', page, flags=re.IGNORECASE)

# Or maybe `aria-hidden="true"`? aria attributes are fine as strings.

# Let's fix line 1015: probably disabled="disabled" or something.
page = re.sub(r'disabled="true"', 'disabled={true}', page, flags=re.IGNORECASE)
page = re.sub(r'disabled="disabled"', 'disabled={true}', page, flags=re.IGNORECASE)
page = re.sub(r'disabled=""', 'disabled={true}', page, flags=re.IGNORECASE)

# Fix 4: maxlength="50" is already handled? Or maybe `tabindex="0"` -> `tabIndex={0}`
page = re.sub(r'tabIndex="(\d+)"', r'tabIndex={\1}', page, flags=re.IGNORECASE)
page = re.sub(r'maxlength="(\d+)"', r'maxLength={\1}', page, flags=re.IGNORECASE) # just in case

# Fix SVG stroke-width="1.5" to strokeWidth={1.5}
# SVG attributes should be camelCase and numbers where possible but string is ok for strokeWidth.
# The error says Type 'string' is not assignable to type 'number'. Let's find any `="123"` that Next expects to be a number.
page = re.sub(r'strokeWidth="([\d.]+)"', r'strokeWidth={\1}', page)
page = re.sub(r'width="([\d.]+)"', r'width={\1}', page)
page = re.sub(r'height="([\d.]+)"', r'height={\1}', page)

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)
