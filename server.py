from flask import Flask, send_file, request, jsonify
import os

app = Flask(__name__)

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def home():
    return send_file("index.html")

@app.route("/<path:filename>")
def serve_file(filename):
    file_path = os.path.join(PROJECT_DIR, filename)

    if os.path.isfile(file_path):
        return send_file(file_path)

    return f"File '{filename}' not found!", 404

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000
    )