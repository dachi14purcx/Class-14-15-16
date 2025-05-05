def most_frequent_item_count(collection):
    res = []
    
    if len(collection) == 0:
        return 0
    
    for i in collection:
        count = 0
        for j in collection:
            if i == j:
                count += 1
        res.append(count)
        
    return max(res)   