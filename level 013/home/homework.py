# 1

x = 10
y = int(input('num between 1 and 10: '))

while x > y or x < y:
    if y > 10 or y < 1:
        print('I told you 1 to 10!')
    y = int(input('write again: '))
    
while x == y:
    print('You won the game')
    x += 1

# 2

z = 0
while x < 100:
    if x % 5 == 0:
        print(x)
    x += 1

# 3

h = 'group55'
g = input('Password: ')

while h != g:
    print('Try again')
    g = input('Password: ')

if h == g:
    print('Verified')