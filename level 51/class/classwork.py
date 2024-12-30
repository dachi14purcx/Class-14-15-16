# 1
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
    
# 2
def check_alive(health):
    return health > 0

# 3
def positive_sum(arr):
        res = 0
        for i in arr:
            if i > 0:
                res += i 
        return res