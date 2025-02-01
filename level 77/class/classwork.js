// 1
const quarterOf = (month) => {
    if (month > 0 && month <=3){
      return 1
    } else if (month <= 6){
      return 2
    } else if (month <= 9){
      return 3
    } else {
      return 4
    }    
}

// 2
function paperwork(n, m) {
    if (n < 0 || m < 0){
        return 0
    } else {
        return n * m
    }
}

// 3
function main (verb, noun){
    return verb + noun
}

// 4
function booleanToString(b){
    return b.toString()
}

// 5
function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
}