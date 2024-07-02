// %s: string, %d: number, %i: integer, %o: object

const name="Yash";
const age=20;
console.log("My name is %s and I am %d years old.", name, age);
console.log();
// we can also do: console.log("My name is %s and I am %d years old.", "Yash", 20);
// console.clear() clears the console.
console.count("I am Yash");
console.count("I am Yash");
console.count("I am Yash");
console.count("Hello");
console.countReset("I am Yash");
console.count("I am Yash");
console.log();

const func1 = () => console.trace();
const func2 = () => func1();
func2();

console.log();
const sum = () => console.log(`The sum of 2 and 3 is ${2+3}`);
const multiply = () => console.log(`The product of 2 and 3 is ${2*3}`);
const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
};
measureTime();