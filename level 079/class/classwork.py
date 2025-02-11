import random

def shuffle_list(lst):
    random.shuffle(lst)
    return lst

def divide_into_groups(students, num_groups):
    shuffled_students = shuffle_list(students)
    groups = [[] for _ in range(num_groups)]
    
    for i, student in enumerate(shuffled_students):
        groups[i % num_groups].append(student)
    
    return groups
