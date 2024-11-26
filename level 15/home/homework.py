#1

num = 1
sum = 0

while num <= 100:
    sum += num
    num += 1

print(sum / 100)

#2

num = int(input('num ='))

if num < 0:
    print('negative')
elif num > 0:
    print('positive')
else:
    print('0')

#3

year = int(input('year: '))

if year % 4 == 0:
    print('leap year')
else:
    print('normal year')

#4

points = int(input('Exam points = '))

if points < 60:
    print('You get: F')
elif points >= 60 and points <= 69:
    print('You get: D')
elif points >= 70 and points <= 79:
    print('You get: C')
elif points >= 80 and points <= 89:
    print('You get: B')
elif points > 100:
    print('LIAR')
else:
    print('You get: A')