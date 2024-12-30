# 1
def print_name_uppercase(name):
    print(name.upper())

print_name_uppercase("nika")

# 2
def print_name_lowercase(name):
    print(name.lower())

print_name_lowercase("NIKA")

# 3
def ask_password(correct_password):
    while True:
        user_input = input("გთხოვთ, ჩაწერეთ პაროლი: ")
        if user_input == correct_password:
            print("პაროლი სწორია!")
            break
        else:
            print("პაროლი არასწორია, სცადეთ ხელახლა.")
ask_password("1234")
