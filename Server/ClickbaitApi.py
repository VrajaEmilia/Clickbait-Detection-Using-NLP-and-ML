import pickle

import xgboost
from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from util import cleanHeadline

app = Flask("ClickbaitApi")
CORS(app)
api = Api(app)


class ClickbaitController(Resource):

    def __init__(self):
        multinomialNb = pickle.load(open("Models/MultinomialNb.pickle", 'rb'))
        gradientBoost = pickle.load(open("Models/GradientBoost.pickle", 'rb'))
        randomForest = pickle.load(open("Models/RandomForest.pickle", 'rb'))
        self.__models = {
                          "GradientBoost": gradientBoost,
                          "MultinomialNb": multinomialNb,
                          "RandomForest": randomForest
                          }
        self.__tfidf = pickle.load(open("Models/tfidf.pickle", 'rb'))

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('headline', required=True)
        parser.add_argument('model', required=True)
        args = parser.parse_args()
        headline = cleanHeadline(args.get("headline"))
        model = args.get("model")
        headline_vectorized = self.__tfidf.transform([headline])
        prediction = self.__models[model].predict(headline_vectorized)[0]
        if prediction == 1:
            return {'prediction': "clickbait"}
        else:
            return {'prediction': "not clickbait"}


api.add_resource(ClickbaitController, '/')

if __name__ == '__main__':
    app.run()
