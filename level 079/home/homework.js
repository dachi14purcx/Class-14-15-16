// ალტერნატიული shuffle მეთოდი
Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - 0.5);
};

// ფუნქცია, რომელიც სტუდენტებს ჯგუფებად ყოფს
function divideIntoGroups(students, numGroups) {
    students.shuffle(); // მასივის შერევა
    let groups = Array.from({ length: numGroups }, () => []);
    
    students.forEach((student, index) => {
        groups[index % numGroups].push(student);
    });
    
    return groups;
}

// გამოყენების მაგალითი:
let students = ["Anna", "Ben", "Chris", "Diana", "Eli", "Finn", "Gina", "Hugo", "Ivy", "Jack"];
let numGroups = 3;
console.log(divideIntoGroups(students, numGroups));
