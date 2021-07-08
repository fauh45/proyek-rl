import datetime

import ray


class GetActionError(Exception):
    def __init__(self, args: str) -> None:
        super().__init__(args)


@ray.remote
class Session:
    def __init__(self) -> None:
        self.last_action = None

        self.user_turn = False
        self.done = False
        self.last_fen = None
        self.last_legal_move = None

        self.stats = {
            "moves": 0,
            "start_time": datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc).isoformat()
        }

    def increment_move(self, n: int = 1):
        self.stats["move"] += n

    def set_action(self, action):
        self.last_action = action
        self.user_turn = False

    def get_action_and_reset(self):
        if (self.last_action == None):
            raise GetActionError("Action has not been set yet")

        last_action = self.last_action
        self.last_action = None

        return last_action

    def set_state(self, fen, legal_move, done, user_turn=False):
        self.last_fen = fen
        self.user_turn = user_turn
        self.last_legal_move = legal_move
        self.done = done

        self.stats["moves"] += 1

    def get_state(self):
        return {
            "user_turn": self.user_turn,
            "fen": self.last_fen,
            "legal_move": self.last_legal_move,
            "done": self.done,
            "stats": self.stats
        }
