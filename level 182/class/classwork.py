def generate_pairs(n):
    res = []
    for i in range(n + 1):
        for j in range(i, n + 1):
            res.append([i,j])
            
    return res