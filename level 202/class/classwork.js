function isUpperCase(str) {
  // if string has no lowercase letters, it's all caps
  return !/[a-z]/.test(str);
}

function largestPower(N) {
  let k = 0;
  while (3 ** (k + 1) < N) {
    k++;
  }
  return k;
}