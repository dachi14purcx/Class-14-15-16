import random

def create_groups(elements, num_groups):
    random.shuffle(elements)

    groups = [[] for _ in range(num_groups)]
    
    for i, element in enumerate(elements):
        groups[i % num_groups].append(element)
    
    return groups

elements = ['გიორგი', 'მარიამი', 'ნინო', 'თამარი', 'ლუკა', 'მიხეილ']
num_groups = 3
groups = create_groups(elements, num_groups)

for i, group in enumerate(groups):
    print(f"ჯგუფი {i+1}: {group}")
