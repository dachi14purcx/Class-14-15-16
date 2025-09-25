function interest(p, r, n) {
  const simple = Math.round(p * (1 + r * n));

  const compound = Math.round(p * Math.pow(1 + r, n));

  return [simple, compound];
}