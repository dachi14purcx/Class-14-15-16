# 1
def even_numbers(arr, n):
    even_nums = [num for num in arr if num % 2 == 0]

    return even_nums[-n:]

# 2
def sum_of_n(n):
    is_negative = n < 0
    n = abs(n)
    
    sequence = [sum(range(i + 1)) for i in range(n + 1)]
    
    if is_negative:
        sequence = [-x for x in sequence]
    
    return sequence
