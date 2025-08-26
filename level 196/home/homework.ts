// Union Types
function printId(id: number | string): string{
    if (typeof id === "number") {
        return `ID number: ${id}`
    }
    return `ID string: ${id}`
}

function getLength(value: string | string[]): number {
    return value.length;
}

function checkValue(value: number | string): boolean {
    if (typeof value === "number") {
        return value !== 0;
    } 
    
    return value !== "";
}

type Circle = { kind: "circle", radius: number };
type Rectangle = { kind: "rectangle", width: number, height: number };

function getArea(shape: Circle | Rectangle): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }

    return shape.width * shape.height;
}

function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}


// Literal Types
function move(direction: "up" | "down" | "left" | "right"): string {
    return `Moving ${direction} direction`
}

let role: "admin" | "user" | "guest" = "user";
console.log(`Your role is: ${role}`);

function trafficLight(color: "red" | "yellow" | "green"): string {
    if (color === "red") return "Stop";
    if (color === "yellow") return "Wait";
    return "Go";
}

function makeRequest(method: "GET" | "POST" | "PUT" | "DELETE"): string {
    return `Making ${method} request`
}

function rollDice(): "one" | "two" | "three" | "four" | "five" | "six" {
    const values = ["one", "two", "three", "four", "five", "six"] as const;
    return values[Math.floor(Math.random() * 6)];
}

// Classes
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow");
    }
}

class BankAccount {
    private balance: number = 0;
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

class MathHelper {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
    static multiply(a: number, b: number): number {
        return a * b;
    }
    static divide(a: number, b: number): number {
        return b !== 0 ? a / b : NaN;
    }
}