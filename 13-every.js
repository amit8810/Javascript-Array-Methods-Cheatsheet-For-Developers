// return true if every element in the array satisfy the test
// else return false


const numbers = [10, 20, 30, 40, 50];

console.log(numbers.every((element) => element > 20)); // false
console.log(numbers.every((element) => element < 60)); // true