// 1
let num = Number(prompt('Enter num'))

if (num % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}

// 2
let cels = prompt('enter degree:')

if (cels < 10){
    console.log('cold')
} else if (cels < 30){
    console.log('normal')
} else {
    console.log('hot')
}

// 3
let grade = prompt('Enter grade: ')

if (grade > 0, grade < 59){
    console.log('F')
}else if (grade > 60, grade < 70){
    console.log('D')
}else if (grade > 70, grade < 80){
    console.log('C')
}else if (grade > 80, grade < 90){
    console.log('B')
}else if (grade > 90, grade < 100){
    console.log('A')
}else{
    console.log('Liar')
}