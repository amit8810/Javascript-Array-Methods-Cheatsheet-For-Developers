// remove first element from the array and return the first element
// it changes  the original array

const numbers = [1,2,3,4,5];

const element = numbers.shift();

console.log("removed element : ", element); // 1

console.log(numbers); // [ 2, 3, 4, 5 ]