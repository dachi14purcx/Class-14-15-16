def word_search(query, seq):
    res = []
    
    for i in seq:
        if query.lower() in i.lower():
            res.append(i)
            
    if len(res) == 0:
        res = ['None']
        
    return res