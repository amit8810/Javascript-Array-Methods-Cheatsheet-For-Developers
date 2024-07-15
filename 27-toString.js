// convert elements of specified array into string form
// do not affect original array

const numbers = [1, 2, 3, 4, 5];

const newString = numbers.toString();

console.log(newString) // "1,2,3,4,5"
console.log(typeof(newString)) // string


console.log(newString[0]); // 1
console.log(newString[1]); // ,