import requests, sys, json
id = sys.argv[1]
url = 'http://192.168.1.106:105/add_product/'
data = {
        'id' : id,
        'title' : 'Harry Potter', 
        'category' : 'Fantasy', 
        'description' : 'Bra Film',
        'image' : 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'rating' : { 'count' : 555, 'rate' : 1.2 },
        'price' : 150
        }
data = data
x = requests.post(url, json=data)

print(x.text)