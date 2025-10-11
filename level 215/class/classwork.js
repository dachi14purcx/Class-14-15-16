class PrimeFactorizer {
  constructor(n) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('Input must be a positive integer')
    }

    this.factor = {}
    let num = n
    let divisor = 2

    while (num > 1) {
      while (num % divisor === 0) {
        this.factor[divisor] = (this.factor[divisor] || 0) + 1
        num /= divisor
      }
      divisor++
      if (divisor * divisor > num && num > 1) {
        this.factor[num] = (this.factor[num] || 0) + 1
        break
      }
    }
  }
}