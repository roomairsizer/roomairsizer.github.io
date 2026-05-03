import os
import re
import glob

ga_snippet = """  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-LR0XH9QTFF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LR0XH9QTFF');
  </script>"""

html_files = glob.glob('*.html')

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        enc = 'utf-8'
    except UnicodeDecodeError:
        with open(filepath, 'r', encoding='windows-1252') as f:
            content = f.read()
        enc = 'windows-1252'

    modified = False

    # 1. Check GA
    if 'G-LR0XH9QTFF' not in content:
        print(f'[GA Missing] {filepath}')
        # Insert after <head>
        content = re.sub(r'(<head[^>]*>)', r'\1\n' + ga_snippet, content, count=1, flags=re.IGNORECASE)
        modified = True

    # 2. Check title
    if '<title>' not in content.lower():
        print(f'[Title Missing] {filepath}')
    
    # 3. Check description
    if 'name="description"' not in content.lower() and "name='description'" not in content.lower():
        print(f'[Description Missing] {filepath}')

    # 4. Canonical Link
    expected_canonical = 'https://roomairsizer.github.io/' if filepath == 'index.html' else f'https://roomairsizer.github.io/{filepath}'
    
    if '<link rel="canonical"' not in content.lower():
        print(f'[Canonical Missing] {filepath}')
        canonical_tag = f'\n  <link rel="canonical" href="{expected_canonical}">'
        # insert before </head>
        content = re.sub(r'(</head>)', canonical_tag + r'\n\1', content, count=1, flags=re.IGNORECASE)
        modified = True
    else:
        # Check if it has the RIGHT canonical
        canonical_match = re.search(r'<link rel="canonical"\s+href="([^"]+)"', content, flags=re.IGNORECASE)
        if canonical_match and canonical_match.group(1) != expected_canonical:
            print(f'[Canonical Incorrect] {filepath} -> {canonical_match.group(1)} (expected {expected_canonical})')
            # Fix it
            content = content[:canonical_match.start(1)] + expected_canonical + content[canonical_match.end(1):]
            modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {filepath}')

# 5. Generate Sitemap
sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for filepath in html_files:
    url = 'https://roomairsizer.github.io/' if filepath == 'index.html' else f'https://roomairsizer.github.io/{filepath}'
    priority = '1.0' if filepath == 'index.html' else ('0.8' if 'guide' in filepath or filepath == 'guides.html' else '0.7')
    sitemap_xml += f'''  <url>
    <loc>{url}</loc>
    <lastmod>2026-05-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>\n'''
sitemap_xml += '</urlset>'

with open('sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_xml)
print('Generated sitemap.xml')
