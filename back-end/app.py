from flask_cors import CORS
from flask import Flask, jsonify
from api_call import call_did_api

app = Flask(__name__)
CORS(app)


@app.route('/api/hello')
def hello_world():
    return jsonify(message="Hello from Flask!")


@app.route('/api/upload')
def upload():
    response = call_did_api()
    return jsonify(message=response)


if __name__ == '__main__':
    app.run(debug=True)
