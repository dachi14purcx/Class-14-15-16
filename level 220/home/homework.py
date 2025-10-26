# რეკურსია არის ფუნქციაში საკუთარი თავის გამოძახება

# def func(n):
#     if n == 0:
#         return
#     func(n - 1)
#     print(n)

# func(10)

# def func1(n): 
#     if n == 0:
#         return
#     print(n)
#     func1(n - 1)

# func1(10)


# def total(n):
#     if n == 0:
#         return 0
#     return n + total(n - 1)

# print(total(10))


# def length(arr):
#     if arr == []:
#         return 0
#     return 1 + length(arr[1:])

# print(length([1,2,3]))


# def reverse(string):
#     if string == '':
#         return ''
    
#     return string[-1] + reverse(string[:-1])

# print(reverse('reverse'))

# def maximum(arr):
#     if len(arr) == 1:
#         return arr[0]
#     max_rest = maximum(arr[1:])
#     return arr[0] if arr[0] > max_rest else max_rest

# print(maximum([3, 9, 2, 7, 11, 5]))

def vowels(string):
    vowels = 'aeiou'
    if string == '':
        return ''

    first = string[0]
    rest = vowels(string[1:])

    res = ''

    if first in vowels:
        return first + rest
    else:
        return rest

print(vowels('asdfgiop'))