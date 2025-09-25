def invite_more_women(arr):
    men = 0
    women = 0
    
    for i in arr:
        if i == -1:
            women += 1
        else:
            men += 1
            
    if women < men:
        return True
    
    return False