arr = [1, 4, 2, 5, 3]

def bubble_sort(arr):
    for i in range(len(arr) - 1):
        swapped = False

        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr

print(bubble_sort(arr))


arr = [1, 4, 2, 5, 3]

def selection_sort(arr):
    for i in range(len(arr) - 1):
        arr[i] = min(arr[i:])

    return arr

arr = [1, 4, 2, 5, 3]

def selection_sort2(arr):
    for i in range(len(arr) - 1):
        min = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min]:
                min = j
        
        arr[i], arr[min] = arr[min], arr[i]
    
    return arr

print(selection_sort2(arr))

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr

arr = [5, 2, 4, 6, 1, 3]
print(insertion_sort(arr))


def my_sort(arr):
    res = []
    i = 0

    while len(res) < len(arr):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]

        res.append(arr[i])
        i += 1

        

    arr = res

    return arr

arr = [5, 2, 4, 6, 1, 3]
print(my_sort(arr))