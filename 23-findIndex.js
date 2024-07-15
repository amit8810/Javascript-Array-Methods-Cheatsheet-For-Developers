// The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, it returns -1.

// SYNTAX: array.findIndex(callback(element, index, array), thisArg)

const numbers = [10, 20, 30, 40, 50];

const value1 = numbers.findIndex((element) => element === 30);
console.log(value1); // 2

const value2 = numbers.findIndex((element) => element > 30);
console.log(value2); // 3

const value3 = numbers.findIndex((element) => element === 60);
console.log(value3); // -1