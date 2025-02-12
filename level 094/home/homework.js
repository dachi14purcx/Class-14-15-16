// 1. Callback ფუნქცია დაგვიანებით
function delayedMessage(name, callback) {
    setTimeout(() => callback(`Hello, ${name}`), 2000);
  }
  
  // 2. Callback პროცესის სიმულაცია
  function processWithDelay(msg, callback) {
    setTimeout(() => {
      console.log(msg);
      callback();
    }, 2000);
  }
  
  // 3. მასივის კვადრატების გამოთვლა
  function squareNumbers(arr, callback) {
    setTimeout(() => callback(arr.map(num => num ** 2)), 2000);
  }
  
  // 4. ფონის ფერის ცვლილება
  function changeColor(color, callback) {
    setTimeout(() => callback(color), 2000);
  }
  
  // 5. მომხმარებლის სახელი შეყვანის შემდეგ
  function askUserName(callback) {
    setTimeout(() => {
      const name = prompt("Enter your name:");
      callback(`Welcome, ${name}!`);
    }, 3000);
  }
  