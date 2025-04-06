const jokeDiv = document.getElementById("joke");
const btn = document.getElementById("getJokeBtn");

async function fetchJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
    const data = await response.json();

    if (data.type === "single") {
      jokeDiv.textContent = data.joke;
    } else if (data.type === "twopart") {
      jokeDiv.innerHTML = `<p>${data.setup}</p><p class="mt-2 font-semibold">${data.delivery}</p>`;
    } else {
      jokeDiv.textContent = "Couldn't load a joke right now 😢";
    }
  } catch (error) {
    jokeDiv.textContent = "Error loading joke 😢";
    console.error("Fetch failed:", error);
  }
}

// Fetch first joke on load
window.addEventListener("DOMContentLoaded", fetchJoke);

// Add click listener
btn.addEventListener("click", fetchJoke);
