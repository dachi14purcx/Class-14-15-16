// os_path_example.js

// 📦 OS მოდული
const os = require("os");
const path = require("path");

console.log("=== OS მოდული ===");

// 1) os.type() → აბრუნებს ოპერაციული სისტემის სახეობას
console.log("OS ტიპი:", os.type());

// 2) os.arch() → აბრუნებს სისტემის არქიტექტურას (x64 ან ia32)
console.log("არქიტექტურა:", os.arch());

// 3) os.platform() → აბრუნებს პლატფორმას (win32, linux, darwin)
console.log("პლატფორმა:", os.platform());

// 4) os.hostname() → აბრუნებს კომპიუტერის/სერვერის სახელს
console.log("ჰოსტის სახელი:", os.hostname());

// 5) os.totalmem() → აბრუნებს სისტემის საერთო მეხსიერებას ბაიტებში
console.log("სრული მეხსიერება (ბაიტებში):", os.totalmem());
console.log("სრული მეხსიერება (გიგაბაიტებში):", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");


console.log("\n=== PATH მოდული ===");

// 6) path.basename() → აბრუნებს ფაილის სახელს
const filePath = "/home/user/docs/app.js";
console.log("ფაილის სახელი:", path.basename(filePath)); // → app.js

// 7) path.extname() → აბრუნებს ფაილის გაფართოებას (.js)
console.log("ფაილის გაფართოება:", path.extname(filePath)); // → .js

// 8) path.join() → აერთებს ბილიკებს ერთ მთლიან ბილიკად
const joinedPath = path.join("user", "docs", "file.txt");
console.log("შეერთებული ბილიკი:", joinedPath);