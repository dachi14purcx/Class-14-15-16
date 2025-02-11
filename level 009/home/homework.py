#1
num = 152
text = 'hello'
decimal = 2.76
complex = 3263j
bulioni = bool('hello')

print(type(num))
print(type(text))
print(type(decimal))
print(type(complex))
print(type(bulioni))


#2
print(10 < 5)
print(8 < 24)
print(72 < 1539)
print(2.372836 < 1.32435252644)
print(2 < 3)

print(46 <= 46)
print(576 <= 12345)
print(63 <= 53)
print(4 <= 4)
print(76 <= 769)

print(12345 > 4)
print(32.65 > 478)
print(45 > 45)
print(356 > 23456)
print(566 > 35567)

print(5 >= 5)
print(5 >= 7)
print(9654 >= 459)
print(8908 >= 4789)
print(234567 >= 234567)

print(12 == 21)
print(43256 == 43256)
print(31 == 62 )
print(45 == 45)
print(3.3 == 3.3)

print(1234 != 123)
print(12345 != 987 )
print(0 != 0)
print(-9 != -9)
print(43 != 2)


#3
print(True or False)
print(False or False)
print(bulioni or False)
print(False and True)
print(bulioni and bulioni)


#4
age = input('your age: ')
print(type(age))

age = int(input('your age: '))
print(type(age))

age = float(input('your age: '))
print(type(age))


#5
name = input('username: ')
password = input('password: ')
if name == name :
    print(name)

if password == password:
    print(password)


#კონკატინაცია არის ორის სტრინგის ერთმანეთთან მიმატება.