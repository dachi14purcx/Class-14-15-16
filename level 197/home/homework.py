import time

def first(arr):
    return arr[0] #O(1)

def sum(arr):
    return sum(arr) #0(n)

def find(e, arr):
    return e in set(arr) #O(1)

def print_all_pairs(arr):
    for i in arr:
        for j in arr:
            print(i, j) #O(n2)


def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return False #0(log n)

def linear_search(arr, target):
    for num in arr:
        if num == target:
            return True
    return False #O(n)

arr = list(range(100000000))
target = 9999999999

# Linear Search
start = time.time()
linear_search(arr, target)
print("Linear Search Time:", time.time() - start)

# Binary Search
start = time.time()
binary_search(arr, target)
print("Binary Search Time:", time.time() - start)