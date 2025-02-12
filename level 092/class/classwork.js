// 1
function unionOfSets(sets) {
    return new Set([].concat(...sets.map(set => [...set])));
}

console.log(unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));

// 2
function charFrequency(str) {
    let map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}

console.log(charFrequency("hello"));