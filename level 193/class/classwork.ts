export function simpleMultiplication(num: number): number{
  return num % 2 == 0 ? num * 8 : num * 9;
}

export function firstNonConsecutive (arr: number[]) : null | number {
  for(let i: number = 1; i < arr.length; i++){
    if(arr[i] - arr[i - 1] !== 1) return arr[i]
  }
  
  return null
}

export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
  return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1]
}

export function oddOrEven(array: number[]) {
  let sum: number = 0
  
  for(let i: number = 0; i < array.length; i++) sum += array[i]
  
  return sum % 2 == 0 ? 'even' : 'odd'
}

export function persistence(num: number): number {
  let current: string = `${num}`
  let res: number = 0
  
  while(current.length > 1){
    let number: string = current
    
    current = `${current[0]}`
    for(let i: number = 1; i < number.length; i++){
      let mult: number = Number(current)
      current = `${mult * Number(number[i])}`
    }
    
    res += 1
  }
  
  return res
}