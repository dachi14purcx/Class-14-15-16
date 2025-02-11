// ობიექტების მასივი
const objectsArray = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

// თითოეული value-ს გამოტანა
for (const obj of objectsArray) {
    for (const key in obj) {
        console.log(obj[key]);
    }
}