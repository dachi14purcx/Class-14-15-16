// 1
function switchItUp(number){
    if (number === 1){
      return 'One'
    } else if (number === 2){
      return 'Two'
    } else if (number === 3){
       return 'Three'
    } else if (number === 4){
       return 'Four'
    } else if (number === 5){
       return 'Five'
    } else if (number === 6){
       return 'Six'
    } else if (number === 7){
       return 'Seven'
    } else if (number === 8){
       return 'Eight'
    } else if (number === 9){
       return 'Nine'
    } else if (number === 0){
       return 'Zero'
    }
}

// 2
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
  
    if (average >= 90 && average <= 100) {
      return 'A';
    } else if (average >= 80 && average < 90) {
      return 'B';
    } else if (average >= 70 && average < 80) {
      return 'C';
    } else if (average >= 60 && average < 70) {
      return 'D';
    } else {
      return 'F';
    }
}

// 3
function simpleMultiplication(number) {
    if (number % 2 == 0){
      return number * 8
    } else {
      return number * 9
    }
}

// 4
function makeNegative(num) {
  if (num > 0){
    return -num
  } else {
    return num
  }
}