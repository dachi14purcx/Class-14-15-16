let studentsMap = new Map([
    ["გრემიო", "ლუკა"],
    ["დინამო", "გიო"],
    ["ბარსელონა", "ნიკო"],
    ["რეალი", "დავით"],
    ["ლივერპული", "თორნიკე"]
]);

console.log(studentsMap.size); // ზომა
studentsMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // საუკეთესო მოსწავლეების სახელი
});
