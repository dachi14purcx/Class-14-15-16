// 1) identity – იღებს ნებისმიერ ტიპს და აბრუნებს
function identity<T>(arg: T): T {
  return arg;
}

// გამოძახება
const numResult = identity<number>(42); 
console.log(numResult); // 42

const strResult = identity<string>("Hello");
console.log(strResult); // "Hello"


// 2) logArray – ბეჭდავს array-ს და აბრუნებს
function logArray<T>(arr: T[]): T[] {
  console.log(arr);
  return arr;
}

// გამოძახება
logArray<number>([1, 2, 3]); 
logArray<string>(["a", "b", "c"]);


// 3) makePair – ორი სხვადასხვა ტიპის ელემენტისგან ქმნის [T, U]
function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// გამოძახება
const pair1 = makePair<number, string>(1, "one");
console.log(pair1); // [1, "one"]


// 4) swap – tuple [T, U] გადაჰყავს [U, T]
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}



// 5) firstElement – აბრუნებს array-ს პირველ ელემენტს
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// გამოძახება
console.log(firstElement([100, 200, 300]));  // 100
console.log(firstElement(["alpha", "beta"])); // "alpha"
