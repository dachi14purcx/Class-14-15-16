def char_concat(word):
    res = ''
    for i in range(len(word) // 2):
        res += f"{word[i]}{word[-(i + 1)]}{i + 1}"
    
    return res