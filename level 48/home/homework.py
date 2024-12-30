# 1
def solution(string):
    return string[::-1]

print(solution('hello'))

# 2
def number_to_string(num):
    return str(num)

# 3
def summation(num):
    res = 0
    for i in range(1, num+1):
        res += i
    return res
    
print(summation(8))

# 4
def find_smallest_int(arr):
    return min(arr)