def unscramble_eggs(word):
    result = ''
    i = 0
    while i < len(word):
        if word[i:i+3] == 'egg':
            i += 3
        else:
            result += word[i]
            i += 1
    return result