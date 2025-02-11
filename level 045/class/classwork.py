# 1
def search(text, word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"

text = input()
word = input()

print(search(text, word))

# 2
def sum(x):
    res = 0
    for i in range(x):
        res += i
    return res

# 3
def func(x):
    res = 0
    for i in range(x):
        res += i
    return res

print(func(3))

# 4
def count_vowels(text):
    return len(text)

print(count_vowels("გამარჯობა"))

# 5
def check_number_sign(number):
    if number > 0:
        return "რიცხვი დადებითია"
    elif number < 0:
        return "რიცხვი უარყოფითია"
    else:
        return "რიცხვი ნულია"

user_input = int(input("შეიყვანეთ რიცხვი: "))
print(check_number_sign(user_input))

# 6
def categorize_age(age):
    if age < 0:
        return "ასაკი არ შეიძლება იყოს უარყოფითი"
    elif age <= 12:
        return "ბავშვი"
    elif age <= 19:
        return "თინეიჯერი"
    elif age <= 64:
        return "ზრდასრული"
    else:
        return "ხანდაზმული"
    
user_age = int(input("შეიყვანეთ თქვენი ასაკი: "))
print(categorize_age(user_age))