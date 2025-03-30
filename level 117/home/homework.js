// 1
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

// 2
async function connectDatabase() {
    await db.connect();
    console.log('Connected to database');
}

// 3
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function waitForTimeout() {
    console.log('Waiting...');
    await delay(2000);
    console.log('Done');
}

// 4
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://api.invalidurl.com');
        const data = await response.json();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// 5
async function processItems(items) {
    for (const item of items) {
        await handleItem(item);
    }
}

// 1
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// 2
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// 3
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

// 4
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set dimensions(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
}

// 5
class Counter {
    #count = 0;
    increment() {
        this.#count++;
        console.log(this.#count);
    }
}