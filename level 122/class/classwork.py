# 1
def min_max(lst):
    return[min(lst), max(lst)]

# 2
def number(lines):
    res = []
    for i in range(1, len(lines) + 1):
        res.append(f"{i}: {lines[i - 1]}")
    return res

# 3
def bonusTime(salary, bonus):
  if bonus == True:
    return '£' + salary * 10
  else:
    return '£' + salary
  
# 4
def maskify(cc):
    res = ""
    
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res += "#"
        else:
            res += cc[i]
            
    return res
