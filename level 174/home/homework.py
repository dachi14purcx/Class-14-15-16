def find_array(arr1, arr2):
    result = []
    for index in arr2:
        if index < len(arr1):
            result.append(arr1[index])
    return result

def letters_to_numbers(s):
    total = 0
    for i in s:
        if i.islower():
            total += ord(i) - ord('a') + 1
        elif i.isupper():
            total += 2 * (ord(i) - ord('A') + 1)
        elif i.isdigit():
            total += int(i)
        else:
            total += 0
    return total

def alphabet_war(fight):
    left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    
    battlefield = ""
    for i in range(len(fight)):
        if fight[i] == '*':
            continue
        if (i > 0 and fight[i-1] == '*') or (i < len(fight) - 1 and fight[i+1] == '*'):
            continue
        battlefield += fight[i]

    left_score = 0
    right_score = 0
    
    for ch in battlefield:
        if ch in left:
            left_score += left[ch]
        elif ch in right:
            right_score += right[ch]

    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else:
        return "Let's fight again!"
    

def ball_test(s, r):
    pos = 0
    distance_counter = 0
    cracks_encountered = 0

    while pos < len(r):
        if s <= 0:
            return False

        tile = r[pos]
        distance_counter += 1
        if tile == 'x':
            cracks_encountered += 1
        pos += 1

        if distance_counter == s:
            s -= (1 + cracks_encountered)
            distance_counter = 0
            cracks_encountered = 0