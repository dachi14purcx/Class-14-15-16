// 1. ამოწმებს ლუწია თუ კენტია
function isEvenOrOdd(num: number): string {
  return num % 2 === 0 ? "ლუწია" : "კენტია";
}

// 2. ამოწმებს სრულწლოვანია თუ არასრულწლოვანი
function checkAge(age: number): string {
  return age >= 18 ? "სრულწლოვანია" : "არასრულწლოვანია";
}

// 3. ამოწმებს სტრინგი ცარიელია თუ არა
function isEmptyString(str: string): string {
  return str.length === 0 ? "ცარიელია" : "არ არის ცარიელი";
}

// 4. აბრუნებს უფრო დიდ რიცხვს
function maxNumber(a: number, b: number): number {
  return a > b ? a : b;
}

// 5. ამოწმებს პაროლის სიძლიერეს
function checkPasswordStrength(password: string): string {
  return password.length >= 8 ? "ძლიერია" : "სუსტია";
}