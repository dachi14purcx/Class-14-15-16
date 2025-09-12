function mergeArrays(a, b) {
  for (let i of b) {
    a.push(i);
  }
  return [... new Set(a)].sort((x, y) => x - y);
}

// def ensure_question(s):
//     if not s:
//         return '?'
//     if s[-1] != '?':
//         return s + '?'
//     return s

function automorphic(n){
  if(String(n ** 2).endsWith(String(n))){
    return 'Automorphic'
  }
  
  return 'Not!!'
}

// def greet():
//      return 'hello world!