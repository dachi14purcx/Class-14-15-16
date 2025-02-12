function firstLetterCount(str) {
    let firstLetter = str[0];
    let count = 0;
    for (let char of str) {
        if (char === firstLetter) {
            count++;
        }
    }
    return count;
}

console.log(firstLetterCount("aaabbbccc"));