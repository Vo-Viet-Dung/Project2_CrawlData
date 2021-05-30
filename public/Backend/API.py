from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
import mongoengine
import pymongo
import json

app = Flask(__name__)

#app.config['MONGO_DBNAME'] = 'mydatabase'
#app.config['MONGO_URI'] = 'mongodb://localhost:27017/'
# try:
#     # db = mongoengine()
#     app.config['MONGO_DBNAME'] = 'mydatabase'
#     app.config['MONGO_URI'] = 'mongodb://localhost:27017/'
#     mongo = PyMongo(app)
# except:
#     print(Exception)

try:
    mongo = pymongo.MongoClient(host="localhost",
                                port=27017,
                                serverSelectionTimeoutMS=1000)
    db = mongo.database_names
except:
    print(Exception)


@app.route("/news", methods=["GET"])
def get_News():
    try:
        News = list(db.news.find())
        for new in News:

            return Response(
                response=json.dumps(News),
                status=500,
                mimetype="application/json"

            )
    except:
        print(Exception)


if __name__ == '__main__':
    app.run(port=80, debug=True)
