from pettingzoo.classic import chess_v3
import random
import numpy as np

env = chess_v3.env()

env.reset()
for agent in env.agent_iter():
    print(agent)
    obs, reward, done, _ = env.last()
    if done:
        env.step(None)
        print("Game reward: ", reward)
    else:
        action = random.choice(np.flatnonzero(obs['action_mask']))
        env.step(action)

        print(obs["action_mask"])
        print(action)

    env.render()
    print()