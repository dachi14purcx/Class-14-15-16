def maxArea(self, height):
    areas = []
    for i in range(len(height)):
        for j in range(i+1, len(height)):
            area = min(height[i], height[j]) * (j - i)
            areas.append(area)
    return max(areas)