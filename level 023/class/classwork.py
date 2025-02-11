# 1
def calculator(x, y, operators):
    if operators == '+':
        return x + y
    elif operators == '-':
        return  x - y
    elif operators == '*':
        return x * y
    elif operators == '//':
        return x // y
    else:
        return 'Invalid operation'
    
# 2
def hello(name):
    return 'hello ' + name
print(hello('დაჩი'))

# 3
def love_letter(name, message):
    return  message + f" ,სიყვარულით {name}"
print(love_letter('ნუგზარი' ,'მე შენ მიყვარხარ'))