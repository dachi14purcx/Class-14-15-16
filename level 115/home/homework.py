# 1
def likes(names):
    if len(names) == 0:
        return 'no one likes this'
    elif len(names) >= 4:
        return f'{names[0]}, {names[1]} and {len(names)- 2} others like this'
    elif len(names) == 1:
        return f'{names[0]} likes this'
    elif len(names) == 2:
        return f'{names[0]} and {names[1]} like this'
    else:
        return f'{names[0]}, {names[1]} and {names[2]} like this'
    
# 2
def find_short(s):
    return min(len(word) for word in s.split())

# 3
def find_longest(arr):
    max_length = 0
    longest_num = arr[0]

    for num in arr:
        num_length = len(str(num))
        if num_length > max_length:
            max_length = num_length
            longest_num = num

    return longest_num