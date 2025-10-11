def count_odd_pentaFib(n: int) -> int:
    if n < 0:
        return 0

    cycle = [0, 1, 1, 0, 0, 0]
    total_terms = n + 1
    full_cycles = total_terms // 6
    rem = total_terms % 6

    odd_terms = full_cycles * sum(cycle) + sum(cycle[:rem])
    if n >= 2:
        return odd_terms - 1
    return odd_terms