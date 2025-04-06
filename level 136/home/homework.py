def convert(st):
    res = ''
    
    for i in st:
        letter = i
        if i == "a":
            letter = "o"
        elif i == "o":
            letter = "u"
        res += letter
    
    return res