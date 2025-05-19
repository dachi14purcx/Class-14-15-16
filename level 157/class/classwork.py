def sum_dig_pow(a, b):
    result = []
    for num in range(a, b + 1):
        digits = str(num)
        total = 0
        for i in range(len(digits)):
            total += int(digits[i]) ** (i + 1)
        if total == num:
            result.append(num)
    return result