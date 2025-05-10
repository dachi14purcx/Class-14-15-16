def strong_enough(earthquake, age):
    shockwave_sums = [sum(shockwave) for shockwave in earthquake]
    
    magnitude = 1
    for value in shockwave_sums:
        magnitude *= value

    initial_strength = 1000
    decay_rate = 0.99
    strength = initial_strength * (decay_rate ** age)
    
    if strength >= magnitude:
        return "Safe!"
    else:
        return "Needs Reinforcement!"