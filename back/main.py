import pymongo

from flask import Flask, request, jsonify
from flask_cors import CORS

import json
from bson import json_util
from bson.objectid import ObjectId

from dotenv import load_dotenv
import os

from server.db_connect import get_mongo_collection

# Create the Flask app
app = Flask(__name__)
CORS(app)

mycol = get_mongo_collection()


@app.route("/")
def home():
    return "<p>API Running !</p>"


@app.route("/getAllAnimaux")
def get_all_animaux():
    data = []
    for x in mycol.find():
        # Convertir l'ObjectId en une chaîne de caractères
        x['_id'] = str(x['_id'])
        data.append(x)
    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/getAnimal/<id>")
def get_animal(id):
    data = []
    for x in mycol.find({"_id": ObjectId(id)}):
        # Convertir l'ObjectId en une chaîne de caractères
        x['_id'] = str(x['_id'])
        data.append(x)
    response = jsonify({'results': data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    # Run the app
    app.run(debug=True, host='localhost', port=5000)
