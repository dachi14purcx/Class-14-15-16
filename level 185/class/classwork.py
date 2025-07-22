def change(st):
    s = st.lower()
    result = ''
    for i in range(26):
        letter = chr(ord('a') + i)
        result += '1' if letter in s else '0'
    return result