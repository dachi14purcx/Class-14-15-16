import { toUpperCase, reverseString } from './string.mjs';
import { add, multiply } from './math.mjs';
import { getRandomInt } from './random.mjs';
import { Item } from './class.mjs';
import { findMax, findMin } from './arr.mjs';

console.log(toUpperCase("hello")); // "HELLO"
console.log(reverseString("hello")); // "olleh"
console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15
console.log(getRandomInt(1, 10)); // Random number between 1 and 10

const item1 = new Item("Laptop", 1200, "Electronics");
const item2 = new Item("Headphones", 200, "Accessories");

console.log(item1.getInfo()); // "Laptop (Electronics) - $1200"
console.log(item2.getInfo()); // "Headphones (Accessories) - $200"

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1