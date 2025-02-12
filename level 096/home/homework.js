// Counter element
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Retrieve the counter value from localStorage or default to 0
let counter = parseInt(localStorage.getItem("counter")) || 0;
counterDisplay.textContent = counter;

// Function to update the counter and save it to localStorage
function updateCounter(value) {
    counter = value;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter);
}

// Event listeners
incrementBtn.addEventListener("click", () => updateCounter(counter + 1));
decrementBtn.addEventListener("click", () => updateCounter(counter - 1));
resetBtn.addEventListener("click", () => updateCounter(0));
