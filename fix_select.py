import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove selected="" or selected={true} or selected from <option>
# We can just remove `selected=""`, `selected="selected"`, `selected` from <option ...>
content = re.sub(r'(<option[^>]*?)\s+selected(?:=["\'][^"\']*["\']|=\{[^}]*\}|\b)', r'\1', content)

# 2. Add defaultValue="" to any <select> that has an option with value="" that was acting as the placeholder
# Actually, the safest way is to just add defaultValue="" to all <select> tags if they don't have one.
# Wait, if we just remove `selected` and add defaultValue="" to <select>, it will fix the React warning.
def add_default_value(match):
    select_tag = match.group(0)
    if 'defaultValue=' not in select_tag and 'value=' not in select_tag:
        return select_tag.replace('<select', '<select defaultValue=""')
    return select_tag

content = re.sub(r'<select[^>]*>', add_default_value, content)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
