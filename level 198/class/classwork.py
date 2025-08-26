def window(length, offset, lst):
    if length == 0:
        return [[] for _ in range(0, len(lst) + 1, offset)]
    
    result = []
    i = 0
    while i + length <= len(lst):
        result.append(lst[i:i+length])
        i += offset
    return result