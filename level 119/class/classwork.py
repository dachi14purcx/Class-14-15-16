def CheckIfFlush(cards):
    x = set()
    for i in cards:
        x.add(i[-1])
    return len(x) == 1