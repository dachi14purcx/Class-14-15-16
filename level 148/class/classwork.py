def sequence(text):
    vowels = "aeiou"
    max_length = 0
    current_length = 0

    for char in text.lower():
        if char in vowels:
            current_length += 1
            max_length = max(max_length, current_length)
        else:
            current_length = 0

    return max_length

def multiplicative_persistence(n):
    count = 0
    while n >= 10:
        product = 1
        for digit in str(n):
            product *= int(digit)
        n = product
        count += 1
    return count