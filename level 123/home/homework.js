// 5.
function task3Reject() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Task 3 failed"), 2000);
  });
}
task3Reject().catch(console.error);

// 6.
function task1RandomResolve() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 1 complete"), delay);
  });
}

// 7.
function chainTasks() {
  const delay = () => Math.floor(Math.random() * 3000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("First");
      setTimeout(() => {
        console.log("Second");
        resolve();
      }, delay());
    }, delay());
  });
}

// 8.
function randomReject() {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((_, reject) => {
    setTimeout(() => reject("Task 3 failed"), delay);
  });
}
randomReject().catch(console.error);

// 9.
function conditionalResolve() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.5 ? "Task 1 complete" : "Task 1 was quick");
    }, delay);
  });
}

// 10.
function resolveOrReject() {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Math.random() < 0.3) reject("Task 3 failed");
        else resolve("Task 3 complete");
        }, delay);
    });
}
resolveOrReject().then(console.log).catch(console.error);
