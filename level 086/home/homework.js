document.getElementById("calculateBtn").addEventListener("click", function() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (day && month && year) {
        let birthDate = new Date(year, month - 1, day);
        let today = new Date();

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDays += previousMonth.getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById("years").textContent = ageYears;
        document.getElementById("months").textContent = ageMonths;
        document.getElementById("days").textContent = ageDays;
    } else {
        alert("Please enter a valid date!");
    }
});
