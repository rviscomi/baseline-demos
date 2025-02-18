// Example JavaScript code to test Babel transpilation

// Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3));

// Template literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`My name is ${this.name}`);
  }
}

const person = new Person("Bob");
person.sayHello();

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Optional chaining
const obj = { a: { b: { c: 42 } } };
const value = obj?.a?.b?.c;
console.log(value);

// Nullish coalescing operator
const nullishValue = null ?? "default";
console.log(nullishValue);

// const and let
let changeable = 10;
changeable = 20;
const constant = 30;
console.log(changeable, constant);

// for...of loop
const iterable = [10, 20, 30];
for (const item of iterable) {
  console.log(item);
}
