import json, requests, sys
from flask import Flask, request, jsonify, abort

app = Flask('kodtest')
DATABASE = []

#default
@app.route("/")
def start():
    return jsonify({'guide' : 'possible api calls: <br> GET  /all_products/<br>GET  /get_product_by_id/?id=<id><br>DELETE  /remove_product_by_id/?id=<id><br>POST  /add_product/'})

#lämnar alla produkter som en lista av dictionaries
@app.route('/all_products/', methods=['GET'])
def api_get_all():
    return jsonify(DATABASE) 

#hämtar och skickar en produkts info
@app.route('/get_product_by_id/', methods=['GET'])
def api_get_by_id():
    id = request.args.get('id')
    for item in DATABASE:
        if int(item['id']) == int(id):
            return jsonify(item)
    return abort(404, {"error":f"No product with id {id}"})

#tar bort produkt med id
@app.route('/remove_product_by_id/', methods=['DELETE'])
def api_remove_by_id():
    id = request.args.get('id')
    for item in DATABASE:
        if int(item['id']) == int(id):
            DATABASE.remove(item)
            return jsonify(f'Item with id{id} deleted')
    return abort(404, {"error":f"No item with id {id}"})

#postar en produkt till databasen i minnet
@app.route('/add_product/', methods=['POST'])
def api_add_product():
    user_request = request.get_json()
    expected = ['id', 'title', 'price', 'description', 'category', 'image', 'rating']

    if len(user_request) != len(expected):
        return abort(404, {"error":"Invalid data length"})

    new_item = {}
    for key in expected:
        if user_request.get(key) == None:
            return abort(404, {"error":f"Key {key} not found"})  
        new_item[key] = user_request[key]

    for item in DATABASE:
        if item['id'] == new_item['id']:
            return abort(404, {"error": f"Item with id {item['id']} already exists"})

    DATABASE.append(new_item)
    return jsonify('Item added')

#hämtar all produktinfo och laddar den till minnet i variablen DATABASE som en lista av dictionaries
def load_database():
    response = requests.get("https://kodtest.azurewebsites.net/api/products?code=MWZOJunmBNEPDGxldyIKSplsqq/8Sv4c6KvgZ1vyh4Z9wCaw6rqJIA==")
    DATABASE.extend(response.json())
    return response.status_code


if __name__ == '__main__':
    status = load_database()
    if status != 200:
        print(f'Database couldnt load. error code: {status}')
        sys.exit(1) 

    app.run(host='0.0.0.0')
    