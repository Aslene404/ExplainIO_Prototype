from flask_cors import CORS
from flask import Flask, jsonify

app = Flask(__name__)
CORS(app)
@app.route('/api/hello')
def hello_world():
    return jsonify(message="Hello from Flask!")

if __name__ == '__main__':
    app.run(debug=True)
