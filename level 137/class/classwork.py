def battle(str1, str2):
    def calculate_power(s):
        return sum(ord(char) - ord('A') + 1 for char in s)

    power1 = calculate_power(str1)
    power2 = calculate_power(str2)

    if power1 > power2:
        return str1
    elif power1 < power2:
        return str2
    else:
        return "Tie!"