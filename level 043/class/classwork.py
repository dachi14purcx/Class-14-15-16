# 1
def printBill(customer_name):
    print("------")
    print("Bill To:")
    print(customer_name)
    print("------")

name = input("Enter customer name: ")

printBill(name)

# 2
def area(length, width):
    return length * width

length = int(input("Enter length: "))
width = int(input("Enter width: "))

print("Area:", area(length, width))

# 3
def welcome(name):
    print("Welcome,", name)

welcome("Tommy")