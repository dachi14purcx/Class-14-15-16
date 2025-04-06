const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2)); // უბრალოდ გავლა
const doubled = numbers.map(num => num * 2);  // აბრუნებს ახალ მასივს
const sum = numbers.reduce((acc, num) => acc + num, 0); // აგროვებს ერთ მნიშვნელობად