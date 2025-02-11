# 1
def count_letters(word):
    letter_count = 0
    for char in word:
        if char.isalpha():
            letter_count += 1
    return letter_count
word = "Hello123!"
print(count_letters(word))

# 2
def check_number():
    number = float(input("Enter a number: "))
    
    if number > 0:
        print("The number is positive.")
    elif number < 0:
        print("The number is negative.")
    else:
        print("The number is zero.")
check_number() 

# 3
def categorize_age():
    age = int(input("Enter your age: "))
    
    if age < 13:
        print("You are a child.")
    elif 13 <= age <= 17:
        print("You are a teenager.")
    elif 18 <= age <= 64:
        print("You are an adult.")
    else:
        print("You are a senior.")
categorize_age() 

# 4
def separate_even_odd(numbers):
    even_numbers = []
    odd_numbers = []
    
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
        else:
            odd_numbers.append(num)
    
    return even_numbers, odd_numbers

numbers = [1, 2, 3, 4, 5, 6]
even, odd = separate_even_odd(numbers)
print("Even numbers:", even)
print("Odd numbers:", odd)

# 5
def average_of_list(numbers):
    if len(numbers) == 0:
        return 0
    total = sum(numbers)
    return total / len(numbers)
numbers = [10, 20, 30, 40]
print(average_of_list(numbers))
