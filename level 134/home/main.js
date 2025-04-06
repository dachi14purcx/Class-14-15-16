import { add } from './plus.js';
import { subtract } from './minus.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

document.getElementById("calculate").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerText = "Result: " + result;
});
