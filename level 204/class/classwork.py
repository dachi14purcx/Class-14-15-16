def array(string):
    parts = string.split(',')
    
    if len(parts) < 3:
        return None
    
    middle = parts[1:-1]
    
    return " ".join(middle)