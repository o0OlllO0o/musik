import requests
import re

html = requests.get('https://soundcloud.com').text
js_urls = re.findall(r'<script[^>]*src="(https://a-v2\.sndcdn\.com/assets/[^"]+\.js)"', html)

for url in js_urls[:5]: # Revisa los primeros 5 archivos para ir rápido
    js_content = requests.get(url).text
    match = re.search(r'client_id:"([a-zA-Z0-9]+)"', js_content)
    if match:
        print(f"✅ Tu Client ID: {match.group(1)}")
        break