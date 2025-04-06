def get_last_evens(arr, number):
    even_numbers = [num for num in arr if num % 2 == 0]
    return even_numbers[-number:]
