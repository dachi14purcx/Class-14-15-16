def printer_error(s):
    errors = sum(1 for char in s if char < 'a' or char > 'm')
    return f"{errors}/{len(s)}"


def binary_array_to_number(arr):
    strArr = ''
    for i in range(len(arr)):
        strArr += str(arr[i])
    return int(strArr, 2)