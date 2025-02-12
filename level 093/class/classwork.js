document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    
    if (!userData) {
        const email = prompt("შეიყვანეთ თქვენი იმეილი:");
        const password = prompt("შეიყვანეთ თქვენი პაროლი:");
        const age = prompt("შეიყვანეთ თქვენი ასაკი:");
        const gender = prompt("შეიყვანეთ თქვენი სქესი:");

        const newUserData = { email, password, age, gender };
        localStorage.setItem("userData", JSON.stringify(newUserData));
        alert("მონაცემები შენახულია! ხელახლა შედით გვერდზე.");
        location.reload();
    } else {
        document.body.innerHTML = `
            <h2>მომხმარებლის ინფორმაცია</h2>
            <p><strong>იმეილი:</strong> ${userData.email}</p>
            <p><strong>ასაკი:</strong> ${userData.age}</p>
            <p><strong>სქესი:</strong> ${userData.gender}</p>
        `;
    }
});
