# 1
def between(a,b):
    res = [x for x in range(a, b+1)]
    return res

# 2
def repeats(arr):
    res = 0
    for i in arr:
        if arr.count(i) == 1:
            res += i
    return res