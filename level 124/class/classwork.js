// 1
function setAlarm(employed, vacation){
    return employed == true && vacation == false
}

// 2
function comp(a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  const aSorted = a.map(x => x * x).sort((x, y) => x - y);
  const bSorted = b.sort((x, y) => x - y);

  for (let i = 0; i < aSorted.length; i++) {
    if (aSorted[i] !== bSorted[i]) {
      return false;
    }
  }

  return true;
}

// 3
function update_light(current){
    if (current == 'green'){
        return 'yellow'
    }
    if (current == 'yellow'){
        return 'red'
    }
    else{
        return 'green'
    }
}