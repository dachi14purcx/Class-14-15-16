def correct_tail(body, tail):
    sub = body[-len(tail):]
    return sub == tail

def duty_free(price, discount, holiday_cost):
    return holiday_cost // (price * (discount / 100))

def position(letter):
    return f'Position of alphabet: {ord(letter) - 96}'