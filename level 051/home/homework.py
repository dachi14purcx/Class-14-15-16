# 1
def summation(num):
    res = 0
    for i in range(1, num+1):
        res += i
    return res

# 2
def greet(language):
    greetings = [
        ("english", "Welcome"),
        ("czech", "Vitejte"),
        ("danish", "Velkomst"),
        ("dutch", "Welkom"),
        ("estonian", "Tere tulemast"),
        ("finnish", "Tervetuloa"),
        ("flemish", "Welgekomen"),
        ("french", "Bienvenue"),
        ("german", "Willkommen"),
        ("irish", "Failte"),
        ("italian", "Benvenuto"),
        ("latvian", "Gaidits"),
        ("lithuanian", "Laukiamas"),
        ("polish", "Witamy"),
        ("spanish", "Bienvenido"),
        ("swedish", "Valkommen"),
        ("welsh", "Croeso")
    ]
    
    try:
        if not isinstance(language, str):
            return "Welcome"  
        
        language = language.lower()

        for i in greetings:
            if i[0] == language:
                return i[1]
        
        return "Welcome"
    
    except Exception:
        return "Welcome"