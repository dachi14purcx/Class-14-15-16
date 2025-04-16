const Calculator = (a, b, op) => {
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
}

export default Calculator