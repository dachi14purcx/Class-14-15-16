# 1
def create_array(n):
    return list(range(1, n + 1))

# 2
def grow(arr):
    res = 1
    for i in arr:
        res *= i
    return res

# 3
def fake_bin(x):
    return ''.join('0' if int(d) < 5 else '1' for d in x)