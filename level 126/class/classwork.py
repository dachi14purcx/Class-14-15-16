def order(words, n):
    # Split the string into words
    word_list = words.split(", ")
    
    # Define a custom key function for sorting
    def sort_key(word):
        return (word[n-1].lower(), word.lower())
    
    # Sort the list using the custom key function
    sorted_words = sorted(word_list, key=sort_key)
    
    # Join the sorted words back into a string
    return ", ".join(sorted_words)