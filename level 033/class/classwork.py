# 1
def calculate(x, y, operator):
    if operator == '+':
        return x + y
    elif operator == '-':
        return x - y
    elif operator == '*':
        return x * y
    elif operator == '//':
        return x // y if y != 0 else "დაყოფა ნულზე შეუძლებელია"
    else:
        return "უცნობი ოპერატორი"

print(calculate(10, 5, '+'))  
print(calculate(10, 5, '-'))  
print(calculate(10, 5, '*'))  
print(calculate(10, 5, '//'))  

# 2
def greet_user(name):
    return f"გამარჯობა {name}, კეთილი იყოს შენი მობრძანება, გისურვებ წარმატებას და წინ სვლას"
print(greet_user("ლელა"))


# 3
def love_letter(name, message):
    return  message, "სიყვარულით " + name
print(love_letter("დაჩი", "მინდა გითხრა, რომ ჩემი დღეები შენით უფრო ნათელი და მშვენიერი გახდა. შენ ჩემი შთაგონების წყარო ხარ."))
