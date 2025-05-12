def halving_sum(n):
    res = 0
    div = 1
    
    while n / div > 1:
        res += n // div
        div *= 2
        
    if res == 0:
        return 1
    return res