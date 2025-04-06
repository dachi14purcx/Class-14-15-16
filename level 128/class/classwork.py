# 1
def char_concat(word):
    res = ''
    for i in range(len(word) // 2):
        res += f"{word[i]}{word[-(i + 1)]}{i + 1}"
    
    return res

# 2
def smallest_integer(matrix):
    fullArr = []
    not_in_arr = []

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            fullArr.append(matrix[i][j])
            
    for i in range(max(fullArr) + 2):
        if i not in fullArr:
            not_in_arr.append(i)
            
    return min(not_in_arr)