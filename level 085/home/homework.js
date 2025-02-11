// Task 1: Check if a character is a vowel or consonant
let ch = prompt("Enter a character:");
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(ch.toLowerCase())) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is a consonant.");
}

// Task 2: Find the maximum product of two numbers that are multiples of 2
let nums = [];
for (let i = 0; i < 4; i++) {
    nums.push(parseInt(prompt(`Enter integer ${i+1}:`)));
}

// Filter out numbers that are multiples of 2
let evenNumbers = nums.filter(num => num % 2 === 0);

// If there are less than two even numbers, we can't find a product
if (evenNumbers.length < 2) {
    console.log("There are less than two even numbers.");
} else {
    // Sort even numbers in descending order to get the maximum product
    evenNumbers.sort((a, b) => b - a);
    let maxProduct = evenNumbers[0] * evenNumbers[1];
    console.log("The maximum product of two even numbers is:", maxProduct);
}
