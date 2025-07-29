def wave_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        if i % 2 == 0:
            if arr[i] < arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
        else:
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]