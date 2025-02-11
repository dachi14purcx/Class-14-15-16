let ch = prompt("Enter a character:");
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(ch.toLowerCase())) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is a consonant.");
}

let nums = [];
for (let i = 0; i < 4; i++) {
    nums.push(parseInt(prompt(`Enter integer ${i+1}:`)));
}

let evenNumbers = nums.filter(num => num % 2 === 0);

if (evenNumbers.length < 2) {
    console.log("There are less than two even numbers.");
} else {
    evenNumbers.sort((a, b) => b - a);
    let maxProduct = evenNumbers[0] * evenNumbers[1];
    console.log("The maximum product of two even numbers is:", maxProduct);
}
