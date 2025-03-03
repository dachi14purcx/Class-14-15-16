def speedify(s):
    max_shift = sum(range(26)) + len(s)
    result = [" "] * max_shift

    for i, char in enumerate(s):
        shift = ord(char) - ord('A')
        pos = i + shift
        result[pos] = char

    return "".join(result).rstrip()