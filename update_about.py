import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace About High Grade Construction (badge)
content = content.replace('About High Grade Construction', 'About Highgrade Construction')

# Replace the heading
content = re.sub(
    r'<h2 className="font-headline-xl[^>]+>.*?</h2>',
    '<h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight mb-5">\n                We\\\'re Engineers Before We\\\'re Builders.\n              </h2>',
    content,
    count=1,
    flags=re.DOTALL
)

new_paragraphs = """<p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Founded in 2018, Highgrade Constructions was created with one belief: quality should never be compromised in construction.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Too often, homeowners place their lifetime savings into projects managed by contractors who prioritize shortcuts over precision. The result is poor workmanship, structural issues, budget overruns, and unnecessary stress for families.
              </p>
              <p className="font-body-lg text-body-lg text-primary font-bold mb-4 leading-relaxed">
                Highgrade takes a different approach.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                As a team of civil engineers, every project is designed and executed with technical accuracy, structural integrity, and strict adherence to engineering standards. From foundation to finishing, every detail is measured, planned, and built exactly as intended—because great homes deserve engineering, not guesswork.
              </p>"""

content = re.sub(
    r'<p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">.*?</p>',
    new_paragraphs,
    content,
    count=1,
    flags=re.DOTALL
)

# Remove the Quote card because the text above is now substantial, but keep the 3 feature badges.
content = re.sub(r'\{/\*\s*Quote Card in warm frame\s*\*/\}.*?\{/\*\s*3 Feature Badges', '{/* 3 Feature Badges', content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
