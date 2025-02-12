function findOdd(A) {
    const map = new Map();
    A.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    for (let [key, value] of map) {
      if (value % 2 !== 0) return key;
    }
  }
  