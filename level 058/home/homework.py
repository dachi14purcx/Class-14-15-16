# 1
def human_years_cat_years_dog_years(human_years):
    cat_years = 0
    dog_years = 0

    if human_years >= 1:
        cat_years += 15
        dog_years += 15
    
    if human_years >= 2:
        cat_years += 9
        dog_years += 9

    if human_years > 2:
        cat_years += (human_years - 2) * 4
        dog_years += (human_years - 2) * 5

    return [human_years, cat_years, dog_years]

# 2
def solution(string):
    return string[::-1]