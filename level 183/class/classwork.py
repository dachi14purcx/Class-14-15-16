def perimeter(n):
    a, b = 1, 1
    total = a

    for _ in range(n):
        total += b
        a, b = b, a + b

    return 4 * total