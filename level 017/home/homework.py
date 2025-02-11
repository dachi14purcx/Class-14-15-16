# 1 program where costumer can creates list of numbers, program stops when it gets number 0

num = int(input('number '))
numbers = [num]

while num != 0:
    num = int(input('number '))
    numbers += [num]

sum = 0
for i in numbers:
    sum += i

print(sum)

# 2

numb = int(input('number = '))
number = [numb]

while numb != 0:
    numb = int('number = ')
    number += [numb]

sums = 0

for a in number:
    sum += a

print(sum)