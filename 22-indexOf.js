// returns the first index at which a given element can be found in the array, or -1 if it is not present.

const numbers = [10,20,30,30,40,50];

console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(10)); // 0
console.log(numbers.indexOf(50)); // 5
console.log(numbers.indexOf(60)); // -1