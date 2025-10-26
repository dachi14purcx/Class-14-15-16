// writeArg.js
const fs = require("fs");

// process.argv[2] — მომხმარებლის შეყვანილი არგუმენტი
const userInput = process.argv[2];

if (!userInput) {
  console.log("გთხოვ შეიყვანო არგუმენტი. მაგალითად: node writeArg.js Hello");
  process.exit();
}

// ვწერთ ტექსტს ფაილში userText.txt
fs.writeFileSync("userText.txt", userInput);
console.log("ტექსტი ჩაიწერა ფაილში userText.txt");
