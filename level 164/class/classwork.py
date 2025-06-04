def whose_move(last_player, win):
    return last_player if win else ("white" if last_player == "black" else "black")