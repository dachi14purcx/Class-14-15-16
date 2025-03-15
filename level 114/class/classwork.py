def elevator_distance(array):
    res = 0
    for i in range(len(array) - 1):
        res += abs(array[i] - array[i + 1])
    return res