import { toUpperCase, reverseString } from './string.mjs';
import { add, multiply } from './math.mjs';
import { getRandomInt } from './random.mjs';
import { Person } from './class.mjs';
import { findMax, findMin } from './arr.mjs';

console.log(toUpperCase("hello")); // "HELLO"
console.log(reverseString("hello")); // "olleh"
console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15
console.log(getRandomInt(1, 10)); // Random number between 1 and 10

const person = new Person("Alice", 25);
console.log(person.greet()); // "Hello, my name is Alice and I am 25 years old."

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1