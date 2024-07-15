// return true if at least 1 element in the array passes the test implement by the provided function

const numbers = [1,2,3,4,5];

console.log(numbers.some((element) => element === 3)); // true
console.log(numbers.some((element) => element === 6)); // false

console.log(numbers.some((element) => element >= 6)); // false

