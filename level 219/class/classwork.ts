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