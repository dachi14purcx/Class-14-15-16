def is_pangram(st):
    return len(set(char for char in st.lower() if 'a' <= char <= 'z')) == 26