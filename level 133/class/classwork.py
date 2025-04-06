def row_weights(weights):
    team1_weight = 0
    team2_weight = 0
    
    for i, weight in enumerate(weights):
        if i % 2 == 0:
            team1_weight += weight
        else:
            team2_weight += weight
    
    return (team1_weight, team2_weight)