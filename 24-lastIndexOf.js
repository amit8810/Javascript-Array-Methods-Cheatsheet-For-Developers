// return the last index at which a given element can be found
// if element not found then return -1

const numbers = [10, 20, 30, 30, 40, 50];

console.log(numbers.lastIndexOf(30)); // 3
console.log(numbers.lastIndexOf(50)); // 5
console.log(numbers.lastIndexOf(10)); // 0
console.log(numbers.lastIndexOf(60)); // -1