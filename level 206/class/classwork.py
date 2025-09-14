def prev_mult_of_three(n):
    strN = str(n)
    
    while len(strN) > 0:
        if int(strN) % 3 == 0:
            return int(strN)
        strN = strN[:-1]
    
    return None