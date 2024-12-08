1
lst = ['Js', 'Css', 'HTML', 'py', 1 , 283.36, True, False, 2345, 12] 
print(lst[0], lst[1], lst[2])

lst[3] = 'C#'
lst[4] = 123
lst[5] = 21.12
print(lst[3], lst[4], lst[5])

lst += ['hello', 'world', 121, 26.96, 987654]

print(lst)

#2
num = int(input('number = '))

user_numbers = [num]

while num != '':
    num = input('number = ')
    user_numbers += [num]

if len(user_numbers) > 10:
    print('სიაში არის 10-ზე მეტი რიცხვი')
else:
    print('სიაში ათზე მეტი რიცხვი არ არი')