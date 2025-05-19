const calculator = (a, b, op) => {
    a = Number(a)
    b = Number(b)

    if (op == "+"){
        return a + b
    }
    else if (op == "-"){
        return a - b
    }
    else if (op == "*"){
        return a * b
    }
    else if (op == "/"){
        return b == 0 ? "unknown value" : a / b
    }
    else if (op == '%'){
        return a * b / 100
    }
}

export default calculator