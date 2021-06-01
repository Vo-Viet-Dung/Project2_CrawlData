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
    app.config['JSON_AS_ASCII'] = False  # cho phep doc chuoi utf8
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
            abstract = i["abstract"].decode()
            o.append({"_ID": str(ObjectId(
                i["_id"])), "link": i["link"], "title": str(title), "abstract": str(abstract), "content": str(content), "image": i["image"]})
            json.dumps(o, ensure_ascii=False).encode('utf8')
        return jsonify(o)
    except:
        print(Exception)

# ---------------------------------------------------------


@app.route("/laws", methods=["GET"])
def get_LawNews():
    try:
        col = db.lawNews
        o = []
        for i in col.find():
            title = i["title"].decode()
            content = i["content"].decode()
            abstract = i["abstract"].decode()
            o.append({"_ID": str(ObjectId(
                i["_id"])), "link": i["link"], "title": str(title), "abstract": str(abstract), "content": str(content), "image": i["image"]})
            json.dumps(o, ensure_ascii=False).encode('utf8')
        return jsonify(o)
    except:
        print(Exception)
# ---------------------------------------------------------------


@app.route("/business", methods=["GET"])
def get_BusinessNews():
    try:
        col = db.businessNews
        o = []
        for i in col.find():
            title = i["title"].decode()
            content = i["content"].decode()
            abstract = i["abstract"].decode()
            o.append({"_ID": str(ObjectId(
                i["_id"])), "link": i["link"], "title": str(title), "abstract": str(abstract), "content": str(content), "image": i["image"]})
            json.dumps(o, ensure_ascii=False).encode('utf8')
        return jsonify(o)
    except:
        print(Exception)
# ---------------------------------------------------------------


@app.route("/deleteNews", methods=["DELETE"])
def delete_News(id):
    try:
        col = db.news
        col.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "delete"})
    except:
        print(Exception)


if __name__ == '__main__':
    app.run(debug=True)
