import glob

for file in glob.glob('next-app/src/**/*.tsx', recursive=True):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix boolean attributes in React
    content = content.replace('required=""', 'required')
    content = content.replace('disabled=""', 'disabled')
    content = content.replace('rows="3"', 'rows={3}')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
