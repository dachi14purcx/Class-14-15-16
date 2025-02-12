# 1. ციფრთა ჯამი
def sum_digits(n):
    n = abs(n)
    result = 0
    while n > 0:
        result += n % 10
        n //= 10
    return result

# 2. ორი უდიდესი განსხვავებული რიცხვის ჯამი
def sum_two_largest(lst):
    if len(lst) < 2:
        return None
    unique_lst = list(set(lst))
    unique_lst.sort(reverse=True)
    return unique_lst[0] + unique_lst[1]
