document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username");
    let score = parseInt(localStorage.getItem("score")) || 0;
    let maxNumber = parseInt(localStorage.getItem("maxNumber")) || 2;
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    
    if (!username) {
        username = prompt("შეიყვანეთ თქვენი სახელი:");
        localStorage.setItem("username", username);
    }

    document.body.innerHTML = `
        <h1>მოგესალმები, ${username}!</h1>
        <p>შენი ქულა: <span id="score">${score}</span></p>
        <input type="color" id="colorPicker">
        <p>შეიყვანეთ რიცხვი (1-${maxNumber}):</p>
        <input type="number" id="numberInput">
        <button id="guessButton">გამოცნობა</button>
    `;
    
    document.body.style.backgroundColor = localStorage.getItem("backgroundColor") || "#ffffff";
    
    document.getElementById("colorPicker").addEventListener("input", (event) => {
        document.body.style.backgroundColor = event.target.value;
        localStorage.setItem("backgroundColor", event.target.value);
    });

    document.getElementById("guessButton").addEventListener("click", () => {
        let userGuess = parseInt(document.getElementById("numberInput").value);
        if (userGuess === randomNumber) {
            score++;
            maxNumber *= 2;
            localStorage.setItem("score", score);
            localStorage.setItem("maxNumber", maxNumber);
            alert("გილოცავ! სწორად გამოიცანი! ახალი სირთულე: 1-" + maxNumber);
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            document.getElementById("score").innerText = score;
        } else {
            alert("არასწორი პასუხი, სცადე კიდევ!");
        }
    });
});
