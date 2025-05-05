def is_vow(inp):
    vowel_codes = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    }
    return [vowel_codes.get(num, num) for num in inp]