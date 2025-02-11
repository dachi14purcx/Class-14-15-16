// Task 1: Manually fill a 5-element array and print the elements at index 2 and 4.
let arr1 = [10, 20, 30, 40, 50];
console.log("Task 1:");
console.log("Element at index 2:", arr1[1]);
console.log("Element at index 4:", arr1[3]);

// Task 2: Input N, then N numbers, fill the array with those numbers and print elements at odd indices (a[1], a[3], a[5]...).
let N2 = parseInt(prompt("Enter number of elements for Task 2:"));
let arr2 = [];
for (let i = 0; i < N2; i++) {
    arr2.push(parseInt(prompt(`Enter element ${i+1}:`)));
}
console.log("Task 2:");
console.log("Elements at odd indices:");
for (let i = 1; i < N2; i += 2) {
    console.log(arr2[i]);
}

// Task 3: Define a 10-element array, input 10 numbers using a loop, double each number, and print them.
let arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3.push(parseInt(prompt(`Enter element ${i+1} for Task 3:`)));
}
console.log("Task 3:");
arr3.forEach(num => {
    console.log(num * 2);
});

// Task 4: Input N, then N numbers, store them in an array and print them in reverse order.
let N4 = parseInt(prompt("Enter number of elements for Task 4:"));
let arr4 = [];
for (let i = 0; i < N4; i++) {
    arr4.push(parseInt(prompt(`Enter element ${i+1} for Task 4:`)));
}
console.log("Task 4:");
for (let i = N4 - 1; i >= 0; i--) {
    console.log(arr4[i]);
}

// Task 5: Input N, then N numbers, swap the first and last elements, and print the array.
let N5 = parseInt(prompt("Enter number of elements for Task 5:"));
let arr5 = [];
for (let i = 0; i < N5; i++) {
    arr5.push(parseInt(prompt(`Enter element ${i+1} for Task 5:`)));
}
let temp = arr5[0];
arr5[0] = arr5[N5 - 1];
arr5[N5 - 1] = temp;
console.log("Task 5:");
console.log(arr5);