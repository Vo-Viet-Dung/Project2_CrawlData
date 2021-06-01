from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId
import mongoengine
import pymongo
import json

app = Flask(__name__)
try:
    # db = mongoengine()
    app.config['MONGO_DBNAME'] = 'mydatabase'
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/mydatabase'
    mongo = PyMongo(app)
except:
    print(Exception)

CORS(app)
db = mongo.db


@app.route("/news", methods=["GET"])
def get_News():
    try:
        col = db.news
        o = []
        for i in col.find():
            title = i["title"].decode()
            content = i["content"].decode()
            o.append({"_ID": str(ObjectId(
                i["_id"])), "link": i["link"], "title": str(title), "content": str(content)})
        return jsonify(o)
    except:
        print(Exception)


if __name__ == '__main__':
    app.run(debug=True)
