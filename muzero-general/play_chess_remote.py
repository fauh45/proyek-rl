from glob import glob
from flask import Flask, request
from flask.ctx import copy_current_request_context
from flask_socketio import SocketIO, join_room
import json
import numpy
import ray
from muzero import MuZero

import session


class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, numpy.integer):
            return int(obj)
        elif isinstance(obj, numpy.floating):
            return float(obj)
        elif isinstance(obj, numpy.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


muzero = MuZero("chess")
pretrained_model = sorted(glob(f"results/chess/*/"), reverse=True)[0]

muzero.load_model(pretrained_model + "model.checkpoint",
                  pretrained_model + "replay_buffer.pkl")


@ray.remote(num_cpus=2)
def observer(session):
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'rahasia_banget!'
    socket = SocketIO(app, async_mode=None, cors_allowed_origins="*")

    thread = None

    def backgroud_observer():
        cond = ray.get(session.get_state.remote())
        print(cond)

        @socket.on("connect")
        def connected_handler(data):
            socket.emit("GAME_DATA", data=json.dumps(
                temp, cls=NpEncoder))

        @socket.on("GAME_ACTION")
        def handle_action(data):
            print("Setting action : ", data)

            if (int(data) in cond["legal_move"]):
                ray.get(session.set_action.remote(int(data)))
            else:
                return "Wrong Move"

            return "Ok"

        while(not cond["done"]):
            temp = ray.get(session.get_state.remote())

            if temp["user_turn"] != cond["user_turn"]:
                print(temp)

                socket.emit("GAME_DATA", data=json.dumps(temp, cls=NpEncoder))
                cond = temp

                socket.sleep(3)
                continue

    socket.on("GAME_ACTION", )

    if thread == None:
        thread = socket.start_background_task(backgroud_observer)

    socket.run(app)


session_obj = session.Session.remote()
obs = observer.options(name="socket").remote(session_obj)

muzero.test(render=True, opponent="remote",
            muzero_player=0, session=session_obj)
