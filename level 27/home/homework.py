# 1

data_list = [42, 3.14, "ტექსტი", True, None, 1, "ანა",  5, 2, "bytes"]

data_list[0] = 100
data_list[2] = "ახალი ტექსტი" 
data_list[5] = [9, 8, 7]
data_list[6] = 25
data_list[8] =  20

print("განახლებული სია:", data_list)

# 2

num = [10, 20, 30, 40, 50]

total = sum(num)

print("სიის ელემენტების ჯამი:", total)

# 3
nums = [1, 2, 3, 4, 5]

doubled_numbers = [x * 2 for x in nums]

print("გაორმაგებული სია:", doubled_numbers)

# 4

numbers = [2, 3, 4, 5]
product = numbers[1] * numbers[2] * numbers[3] * numbers[0]


print("სიის ელემენტების ნამრავლი:", product)
