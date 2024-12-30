def capitalize_first_letter(input_list):
    return [word[0].upper() + word[1:] if word else word for word in input_list]

my_list = ['hello', 'world', 'python']
capitalized_list = capitalize_first_letter(my_list)
print(capitalized_list)
