nums =[]

while len(nums) < 10:
    num = int(input('num:'))
    nums.append(num)

print(max(nums))

nums.remove(nums[2])

nums.reverse()

print(nums)

print(nums.index(2445))