const messageQueue = [];
let isRunning = false;

function addMessageToQueue(text, delay) {
  messageQueue.push({ text, delay });
  if (!isRunning) runQueue();
}

function runQueue() {
  if (messageQueue.length === 0) {
    isRunning = false;
    return;
  }

  isRunning = true;
  const { text, delay } = messageQueue.shift();
  setTimeout(() => {
    console.log(text);
    runQueue();
  }, delay);
}
