# 1
def create_introduction():
    name = "დაჩი"
    surname = "ფურცხვანიძე"
    age = 14
    country = "საქართველო"
    city = "ქუთაისი"
    hobby = "ჩოგბურთი"

    introduction = f"გამარჯობა! ჩემი სახელია {name} {surname}. მე {age} წლის ვარ და ვცხოვრობ {city}, {country}-ში. ჩემი საყვარელი ჰობი არის {hobby}."
    return introduction

print(create_introduction())

# 2
def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        if num2 == 0:
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია"
        return num1 / num2
    else:
        return "შეცდომა: გაუგებარი ოპერაცია"

print(simple_calculator(10, 5, "დამატება"))
print(simple_calculator(10, 5, "გამოკლება"))
print(simple_calculator(10, 5, "გამრავლება"))
print(simple_calculator(10, 0, "გაყოფა"))
print(simple_calculator(10, 5, "გაყოფა"))
print(simple_calculator(10, 5, "არასწორი"))
