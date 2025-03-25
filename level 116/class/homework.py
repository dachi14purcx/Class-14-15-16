def comfortable_word(word):
    left_hand = 'qwertasdfgzxcvb'
    right_hand = 'yuiophjklnm'
    
    last_hand = 'left' if word[0] in left_hand else 'right'
    
    for i in range(1, len(word)):
        current_hand = 'left' if word[i] in left_hand else 'right'
        
        if current_hand == last_hand:
            return False
        
        last_hand = current_hand
    
    return True