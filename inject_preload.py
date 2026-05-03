import os
import glob

html_files = glob.glob('R:/Documents/2_VirtualEcommerce_SCorp/Affiliate_websites/roomairsizer/*.html')
tag = b'  <link rel="preload" as="image" href="images/mascot-icon.png">\n</head>'

for file_path in html_files:
    with open(file_path, 'rb') as f:
        content = f.read()
        
    if b'mascot-icon.png' in content:
        continue
        
    if b'</head>' in content:
        content = content.replace(b'</head>', tag)
        with open(file_path, 'wb') as f:
            f.write(content)
        print(f"Updated {file_path}")
    else:
        print(f"Could not find </head> in {file_path}")
