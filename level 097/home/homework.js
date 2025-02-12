// 1
new Promise(resolve => setTimeout(() => resolve("Task 1 complete"), 2000));

// 2
new Promise((_, reject) => reject("Task 2 failed")).catch(console.error);

// 3
Promise.resolve(5).then(n => n * 2).then(console.log);

// 4
function delayedMessages() {
  return new Promise(resolve => setTimeout(() => resolve("First"), 2000))
    .then(msg => new Promise(resolve => setTimeout(() => resolve(msg + " Second"), 1000)))
    .then(console.log);
}

// 5
new Promise((_, reject) => setTimeout(() => reject("Task 3 failed"), 2000)).catch(console.error);
