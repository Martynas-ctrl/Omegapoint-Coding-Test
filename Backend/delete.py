import requests, sys

id = sys.argv[1]
url = f'http://192.168.1.106:105/remove_product_by_id/?id={id}'
x = requests.delete(url)

print(x.text)
