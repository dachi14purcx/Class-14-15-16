// 1
function greetWithDelay(name, callback) {
  setTimeout(() => {
    console.log(`გამარჯობა, ${name}!`);
    if (callback) callback();
  }, 2000);
}

// 2
function simulateProcess(message, callback) {
    setTimeout(() => {
        console.log(`პროცესი: ${message}`);
        if (callback) callback("პროცესი დასრულდა წარმატებით");
    }, 2000);
}