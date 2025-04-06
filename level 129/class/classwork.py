# 1
def elimination(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return arr[i]
    return None

# 2
def elevator_distance(array):
    res = 0
    for i in range(len(array) - 1):
        res += abs(array[i] - array[i + 1])
    return res