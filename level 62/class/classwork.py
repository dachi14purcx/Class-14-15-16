# 1
def switch_it_up(number):
    if number == 0:
        return 'Zero'
    elif number == 1:
        return 'One'
    elif number == 2:
        return 'Two'
    elif number == 3:
        return 'Three'
    elif number == 4:
        return 'Four'
    elif number == 5:
        return 'Five'
    elif number == 6:
        return 'Six'
    elif number == 7:
        return 'Seven'
    elif number == 8:
        return 'Eight'
    elif number == 9:
        return 'Nine'
    
# 2
def even_numbers(arr, n):
    even_nums = [num for num in arr if num % 2 == 0]

    return even_nums[-n:]