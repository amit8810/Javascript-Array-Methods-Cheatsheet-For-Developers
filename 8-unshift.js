// add new element to the beginning of the array and return new length
// it changes the original array

const numbers = [1,2,3,4,5];

const newLength = numbers.unshift(20);

console.log(numbers); // [ 20, 1, 2, 3, 4, 5 ]
console.log(newLength); // 6