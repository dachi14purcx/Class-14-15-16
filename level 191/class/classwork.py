def borrow(s):
    marks = "?.!,;:'"
    
    res = ''
    
    for i in s:
        if i != ' ' and i not in marks:
            res += i.lower()
            
    return res