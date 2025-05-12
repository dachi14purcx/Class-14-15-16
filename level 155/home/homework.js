function solve(a, b) {
  const notInB = [...a].filter(char => !b.includes(char)).join('');
  const notInA = [...b].filter(char => !a.includes(char)).join('');
  return notInB + notInA;
}