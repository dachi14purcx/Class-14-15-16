# 1 homework

points = int(input('Exam points = '))

if points < 60:
    print('You get: F')
elif points >= 60 and points <= 69:
    print('You get: D')
elif points >= 70 and points <= 79:
    print('You get: C')
elif points >= 80 and points <= 89:
    print('You get: B')
else:
    print('You get: A')

# 2 homework

age = int(input('Your age: '))

if age > 0 and age < 13:
    print('Child')
elif age >= 13 and age <= 19:
    print('Teenager')
else:
    print('adult')

# 3

num = int(input('Number = '))

if num == 0:
    print('Zero')
elif num > 0:
    print('Positive number')
else:
    print('Negative Number')

# 4 homework

price = int(input('Price of the product: '))

if price < 20:
    print('No discount.')
elif price >= 20 and price <= 50:
    print('5% discount')
    print(str(price * 95 / 100) + 'GEL')
else:
    print('10% discount')
    print(str(price * 90 / 100) + 'GEL')