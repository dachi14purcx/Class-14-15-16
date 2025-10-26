// fs_examples.js

// 1) fs მოდული
const fs = require("fs");

// fs (File System) მოდული Node.js-ში გამოიყენება ფაილებთან სამუშაოდ.
// მისი საშუალებით შეგვიძლია ფაილების წაკითხვა, ჩაწერა, დამატება, წაშლა და სხვა ოპერაციები.

console.log("=== 1) fs მოდული ახსნა ===");
console.log("fs მოდული საშუალებას გვაძლევს ვიმუშაოთ ფაილებზე — წავიკითხოთ, ჩავწეროთ, ან შევცვალოთ ისინი.");

// ------------------------------------------------------------

// 2) განსხვავება readFileSync() და readFile() შორის
console.log("\n=== 2) readFileSync() vs readFile() ===");
console.log("readFileSync() არის სინქრონული — ბლოკავს პროგრამას სანამ ფაილი არ წაიკითხება.");
console.log("readFile() არის ასინქრონული — კითხულობს ფონურად და იყენებს callback-ს.");

// ------------------------------------------------------------

// 3) განსხვავება writeFileSync() და writeFile() შორის
console.log("\n=== 3) writeFileSync() vs writeFile() ===");
console.log("writeFileSync() არის სინქრონული და ბლოკავს პროცესს.");
console.log("writeFile() არის ასინქრონული და მუშაობს callback-ის გამოყენებით.");

// ------------------------------------------------------------

// 4) ფუნქცია readFileContent(filePath) — fs.readFile-ის გამოყენებით
function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("შეცდომა ფაილის წაკითხვისას:", err.message);
    } else {
      console.log("ფაილის შიგთავსი:\n" + data);
    }
  });
}

// ------------------------------------------------------------

// 5) ფუნქცია writeToFile(filePath, content) — ჩაწერა ფაილში
function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("შეცდომა ჩაწერისას:", err.message);
    } else {
      console.log("ფაილი ჩაიწერა წარმატებით!");
    }
  });
}

// ------------------------------------------------------------

// 6) მომხმარებლის არგუმენტის მიღება და ჩაწერა ფაილში
const userArg = process.argv[2];
const fileName = "text.txt";

if (!userArg) {
  console.log("\nგთხოვ შეიყვანო არგუმენტი. მაგალითი:");
  console.log("node fs_examples.js HelloWorld");
  process.exit();
}

console.log("\n=== 6) არგუმენტი ჩაიწერება ფაილში ===");

fs.writeFile(fileName, userArg + "\n", (err) => {
  if (err) throw err;
  console.log("ტექსტი ჩაიწერა ფაილში:", userArg);

  // ------------------------------------------------------------
  // 7) დამატება სხვა ტექსტის (appendFile)
  fs.appendFile(fileName, "ეს არის დამატებული ტექსტი!\n", (err) => {
    if (err) throw err;
    console.log("დაემატა ტექსტი ფაილში!");

    // ------------------------------------------------------------
    // 8) ფაილის წაკითხვა
    console.log("\n=== 8) ფაილის წაკითხვა ===");
    readFileContent(fileName);
  });
});