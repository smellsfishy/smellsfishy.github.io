from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('.', path)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5678)