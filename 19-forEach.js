// It is commonly used to iterate over the elements of an array and perform some operation on each element.

// SYNTAX : array.forEach(callback(currentValue, index, array), thisArg)

const numbers = [10, 20, 30, 40, 50];

// Example 1
numbers.forEach((element) => console.log(element));
/*
10
20
30
40
50
*/

// Example 2
numbers.forEach((element, index) =>
  console.log(`Element at index ${index} is : ${element}`)
);
/*
Element at index 0 is : 10
Element at index 1 is : 20
Element at index 2 is : 30
Element at index 3 is : 40
Element at index 4 is : 50
*/

// Example 3
// # Modifying Array Elements (Not Recommended)
const nums = [10, 20, 30, 40, 50];

nums.forEach((element, index, arr) => (arr[index] = element * 2));

console.log(nums); // [ 20, 40, 60, 80, 100 ]

// Example 4
// Using thisArgs

const array = [10, 20, 30, 40, 50];

const multiplier = {
  factor: 2,
};

// cannot be used with arrow function due to this keyword behavior
// array.forEach((element) => {
//   console.log(element * this.factor);
// }, multiplier);


array.forEach(function (element) {
    console.log(element * this.factor);
}, multiplier)
/*
20
40
60
80
100
*/