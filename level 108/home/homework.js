let n = Number(prompt('Enter arr length:'))
let arr = []

for (let i = 0; i <= n; i++){
    let number = (prompt('enter number'))
    arr.push(number)
}


let ans = [];

for (let i = 0; i <= n; i++){
    let count = 0;
    for (let j = 0; j < n; j++){
        if (i == arr[j]){
            count ++
        }
    }
    ans.push(count)
}