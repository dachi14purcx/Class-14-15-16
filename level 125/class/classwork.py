def similarity(a, b):
    sim = []
    
    for i in a:
          for j in b:
                if i == j:
                    sim.append(i)
                    
    return len(sim) / (len(a) + len(b) - len(sim)) if len(sim) > 0 else 0