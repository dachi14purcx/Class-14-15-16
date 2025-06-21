def get_villain_name(birthdate): 
    first = [ "The Evil","The Vile","The Cruel", "The Trashy","The Despicable", "The Embarrassing", "The Disreputable","The Atrocious", "The Twirling",  "The Orange","The Terrifying", "The Awkward"]
    last = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
    
    month_index = birthdate.month - 1
    day_last_digit = birthdate.day % 10
    
    return f"{first[month_index]} {last[day_last_digit]}"