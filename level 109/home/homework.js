// 1
var number=function(array){
    let res = []
    for(let i = 0; i < array.length; i++){
      res.push(`${i+1}: ${array[i]}`)
    }
    return res
}

// 2
function bonusTime(salary, bonus) {
    if (bonus == true){
      return '£' + salary * 10
    } else {
      return '£' + salary
    }
}

// 3
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
}