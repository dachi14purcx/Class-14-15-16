// ნაკრებების გაერთიანება
function unionSets(sets) {
    return new Set(sets.flatMap(set => [...set]));
  }
  
  // სიმეტრიული სხვაობა
  function symmetricDifference(set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)).concat([...set2].filter(x => !set1.has(x))));
  }
  
  // ქვნენაკრების შემოწმება
  function isSubset(set1, set2) {
    return [...set1].every(x => set2.has(x));
  }
  
  // სიმბოლოების სიხშირე
  function charFrequency(str) {
    return new Map([...str].map(ch => [ch, str.split(ch).length - 1]));
  }
  
  // Map ინვერტირება
  function invertMap(map) {
    return new Map([...map].map(([k, v]) => [v, k]));
  }
  
  // მაქსიმალური მნიშვნელობის გასაღებები
  function maxKeys(map) {
    const maxVal = Math.max(...map.values());
    return [...map].filter(([_, v]) => v === maxVal).map(([k]) => k);
  }
  