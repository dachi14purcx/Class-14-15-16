function check(setA, setB) {
  for (let elem of setA) {
    if (!setB.has(elem)) return false;
  }
  return true;
}

// 2
function invertedmap(map) {
    const inverted = new Map();
    for (let [key, value] of map) {
        inverted.set(value, key);
    }
    return inverted;
}

// 3
function maxkey(map) {
    let max = -Infinity;
    for (let value of map.values()) {
        if (value > max) max = value;
    }
    const result = [];
    for (let [key, value] of map) {
        if (value === max) result.push(key);
    }
    return result;
}