# 1 ყველაზე მაღალი რიცხვი რასაც გამოიტანს არის 2
def print_number():
    print(1)
    print(2)
    return
    print(4)
    print(6)
print_number()

# 2 ეს კოდი გამოიტანს 4-ს
def sum(x):
    res = 0
    for i in range(x):
        res += 1
    return(res)

print(sum(4))

# 3
def area(x, y):
    return x * y

w = int(input())
h = int(input())

print(area(w, h))

# 4
def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total

# 5
def average_of_list(num_list):
    total = sum_of_list(num_list)  # Using the sum_of_list function to get the total
    return total / len(num_list) if len(num_list) > 0 else 0  # Return average, handle empty list case

# 6
def reverse_list(items):
    reversed_list = []
    for item in items:
        reversed_list.insert(0, item)  # Insert each item at the beginning of the reversed list
    return reversed_list

# 7
def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count