# 1
queue = ['John', 'Amy', 'Bob', 'Adam']
new_person = input()
queue.append(new_person)

print(queue)

# 2
nums = [2, 4, 8, 9, 5]
nums.insert(1, 3)
nums.remove(9)
nums.insert(0, nums.count(8))
print(nums[3])

# 3
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print("Entire list:", fruits)

print("First item:", fruits[0])
print("Last item:", fruits[-1])

fruits.append("fig")
print("List after adding 'fig':", fruits)

fruits.remove("banana")
print("List after removing 'banana':", fruits)

fruits[1] = "blueberry"
print("List after changing the second item to 'blueberry':", fruits)

print("Length of the list:", len(fruits))
queue = ['John', 'Amy', 'Bob', 'Adam']

new_person = input()
queue.append(new_person)
print(queue)

# 4

queue = ['John', 'Amy', 'Bob', 'Adam']

new_person = input()

queue.append(new_person)

print(queue)