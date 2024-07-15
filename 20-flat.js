// used to flatten the nested array
// return new array do not make changes in the original array

// SYNTAX : array.flat(depth)

const numbers = [1, [2, [3, [4, [5]]]]];

const newArray = numbers.flat(); 
console.log(newArray); // [ 1, 2, [ 3, [ 4, [Array] ] ] ]

const newArray2 = numbers.flat(2); 
console.log(newArray2); // [ 1, 2, 3, [ 4, [ 5 ] ] ]

const newArray3 = numbers.flat(Infinity); 
console.log(newArray3); // [ 1, 2, 3, 4, 5 ]

// also remove the empty slot in the array
const array = [1,2,,,4,5,,,6];
const newFlattenedArray = array.flat();
console.log(newFlattenedArray); // [ 1, 2, 4, 5, 6 ]