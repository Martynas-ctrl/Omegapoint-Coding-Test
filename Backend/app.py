import json, requests, sys
from flask import Flask, request, jsonify, abort

app = Flask('kodtest')
DB_FILE = 'databas.json'
DATABASE = []

@app.route("/")
def start():
    return ('possible api calls: <br> GET  /all_products/<br>GET  /get_product_by_id/?id=<id><br>DELETE  /remove_product_by_id/?id=<id><br>POST  /add_product/')

@app.route('/all_products/', methods=['GET'])
def api_get_all():
    return jsonify(DATABASE) 

@app.route('/get_product_by_id/', methods=['GET'])
def api_get_by_id():
    id = request.args.get('id')
    for item in DATABASE:
        if int(item['id']) == int(id):
            return jsonify(item)
    return abort(404, {"error":"Page not found"})

@app.route('/remove_product_by_id/', methods=['DELETE'])
def api_remove_by_id():
    id = request.args.get('id')
    for item in DATABASE:
        if int(item['id']) == int(id):
            DATABASE.remove(item)
            return jsonify(f'Item with id{id} deleted')
    return abort(404, {"error":f"No item with id {id}"})

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

def load_database():
    response = requests.get("https://kodtest.azurewebsites.net/api/products?code=MWZOJunmBNEPDGxldyIKSplsqq/8Sv4c6KvgZ1vyh4Z9wCaw6rqJIA==")
    DATABASE.extend(response.json())
    return response.status_code

if __name__ == '__main__':

    if load_database() != 200:
        print('Database couldnt load')
        sys.exit(1)    


    app.run(host='0.0.0.0', port=105)