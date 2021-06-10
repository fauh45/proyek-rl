from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on("message")
def message_handler(data):
    print(f"Got data from client {data}")

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)

