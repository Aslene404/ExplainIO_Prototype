import os

from flask_cors import CORS
from flask import Flask, jsonify, request
from api_call import call_did_api

app = Flask(__name__)
CORS(app)


@app.route('/api/hello')
def hello_world():
    return jsonify(message="Hello from Raqmwave!")


@app.route('/api/upload')
def upload():
    # data = request.get_json()
    # img_data = data.get('img_data')
    # avatar_url=data.get('avatar_url')
    # voice_id=data.get('voice_id')
    response = call_did_api()
    return jsonify(message=response)


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))
