from glob import glob
from muzero import MuZero

muzero = MuZero("chess")
pretrained_model = sorted(glob(f"results/chess/*/"), reverse=True)[0]

muzero.load_model(pretrained_model + "model.checkpoint",
                  pretrained_model + "replay_buffer.pkl")

muzero.train()
