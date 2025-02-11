// Babel Sort (JavaScript)
function babelSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}



// Count odd digits in a number
function countOddDigits(num) {
    let count = 0;
    let strNum = num.toString();
    for (let char of strNum) {
        if (parseInt(char) % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// Find numbers satisfying conditions
function findNumbers(n, numbers) {
    let validNumbers = numbers.filter(num => (num < 100) && ((num % 3 === 0 && num % 6 !== 0) || (num % 5 === 0 && num % 10 !== 0)));
    console.log(validNumbers.length);
    console.log(validNumbers.join(' '));
}

// Count occurrences of each character to its left
function countLeftOccurrences(n, symbols) {
    let countMap = {};
    let result = [];
    for (let symbol of symbols) {
        result.push(countMap[symbol] || 0);
        countMap[symbol] = (countMap[symbol] || 0) + 1;
    }
    console.log(result.join(' '));
}