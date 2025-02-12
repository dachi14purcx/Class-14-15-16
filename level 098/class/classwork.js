// Function to set the background color from localStorage
function setBackgroundColor() {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

// Function to handle color selection
function changeColor(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("backgroundColor", selectedColor);
}

// Create color picker element
document.addEventListener("DOMContentLoaded", () => {
    setBackgroundColor();
    
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.addEventListener("input", changeColor);
    
    document.body.appendChild(colorPicker);
});