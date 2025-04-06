// 1
function unionOfSets(setsArray) {
  const result = new Set();
  for (const s of setsArray) {
    for (const item of s) {
      result.add(item);
    }
  }
  return result;
}

// 2
function symmetricDifference(setA, setB) {
  const result = new Set();

  for (const item of setA) {
    if (!setB.has(item)) result.add(item);
  }

  for (const item of setB) {
    if (!setA.has(item)) result.add(item);
  }

  return result;
}

// 3
function characterFrequency(str) {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}
