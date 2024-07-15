// return the selected element in an array, as a new array object
// does not affect original array

const fruits = ["mango", "apple", "guava", "banana", "cherry"];

console.log(fruits.slice(0, 3)); // [ 'mango', 'apple', 'guava' ]
console.log(fruits.slice(1, 3)); // [ 'apple', 'guava' ]

/*
If you provide only one value to the slice() method, it will use that value as the start index and will extract elements from that index to the end of the array.
*/
console.log(fruits.slice(0)); // [ 'mango', 'apple', 'guava', 'banana', 'cherry' ]
console.log(fruits.slice(2)); // [ 'guava', 'banana', 'cherry' ]