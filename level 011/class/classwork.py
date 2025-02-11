age = int(input('Your age: '))
experience = int(input('Your experience: '))

if age > 1 and age < 18:
    print('you are too little')
elif age >= 18 and experience >= 1:
    print('congratulation you have driver license')
else:
    print('you do not have expierence')