// 1
let age = prompt('Enter your age:')

if (age <= 5) {
    console.log('შენ ხარ ბავშვი')
}  else if (age <= 18){
    console.log('შენ ხარ მოზარდი')
}  else if (age <= 80) {
    console.log('შენ ხარ სრულწლოვანი')
}  else {
    console.log('დაბერდი ძმაო')
}

// 2
let num = Number(prompt('Enter num'))

if (num % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}