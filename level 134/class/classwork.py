# 1
def dollars_to_lari(dollars):
    return [round(d * 2.8, 2) for d in dollars]

# 2
def filter_palindromes(words):
    return [word for word in words if word == word[::-1]]

# 3
def mask_credit_cards(cards):
    return ['*' * (len(card) - 4) + card[-4:] for card in cards]

# 4
def toObj(matrix):
    return {key: value for key, value in matrix}

# 5
def sort_by_name(objects):
    return sorted(objects, key=lambda obj: obj["name"])