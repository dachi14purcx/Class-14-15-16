# 1

fruits =['apple', 'banana', 'cherry', 'date', 'elderberry']
print(fruits)

print(fruits[0])
print(fruits[4])

fruits.append('fig')
fruits.remove('banana')
fruits[1] = 'blueberry'
print(len(fruits))

# 2

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers.append(100)
numbers.insert(0, 5)
numbers.remove(30)
numbers.reverse()
print(numbers.index(50))
print(numbers.count(20))

# 3

integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
first_half = integers[:5]
second_half = integers[5:]
squares = [x ** 2 for x in integers]
print(squares, integers, first_half, second_half)

# 4

temperature = [72, 68, 75, 70, 78, 74, 71]
print(max(temperature))
print(min(temperature))
print(sum(temperature) / len(temperature))
above_70 = [x for x in temperature if x > 70]
print(above_70)