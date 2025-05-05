def matrixfy(st):
    if len(st) == 0:
        return "name must be at least one letter"
    
    res = []
    size = 1
    while size * size < len(st):
        size += 1
    
    colsize = size * size
    addition = st + (colsize - len(st)) * '.'
    
    for i in range(0, colsize, size):  # Go in jumps of 'size'
        resappend = []
        for j in range(size):
            resappend.append(addition[i + j])  # i is already positioned at the row start
        res.append(resappend)
        
    return res
