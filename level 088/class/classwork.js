function findOdd(arr) {
    const count = new Map();
    
    for (const num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    for (const [key, value] of count) {
        if (value % 2 !== 0) return key;
    }
}