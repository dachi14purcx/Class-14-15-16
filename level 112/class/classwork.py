def my_rstrip(s):
    i = len(s) - 1
    while i >= 0 and s[i] == ' ':
        i -= 1
    return s[:i+1]

print(my_rstrip("   Hello World   "))
print(my_rstrip("NoSpaces"))
print(my_rstrip("    "))


def my_lstrip(s):
    i = 0
    while i < len(s) and s[i] == ' ':
        i += 1
    return s[i:]

print(my_lstrip("   Hello World   "))
print(my_lstrip("NoSpaces"))
print(my_lstrip("    "))


def my_strip(s):
    i = 0
    while i < len(s) and s[i] == ' ':
        i += 1

    j = len(s) - 1
    while j >= 0 and s[j] == ' ':
        j -= 1

    return s[i:i+1]

print(my_lstrip("   Hello World   "))