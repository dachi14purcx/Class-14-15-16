def interval_insert(myl: list[tuple[int, int]], interval: tuple[int, int]) -> list[tuple[int, int]]:
    res: list[tuple[int, int]] = []
    i = 0
    n = len(myl)
    start, end = interval

    while i < n and myl[i][1] < start:
        res.append(myl[i])
        i += 1

    while i < n and myl[i][0] <= end:
        start = min(start, myl[i][0])
        end = max(end, myl[i][1])
        i += 1

    res.append((start, end))

    while i < n:
        res.append(myl[i])
        i += 1

    return res