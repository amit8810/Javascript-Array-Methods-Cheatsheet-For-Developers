// used to join two or more arrays
// return new array as result
// do not change in original array

const arr1 = [10,20,30];
const arr2 = [40,50,60];
const arr3 = ['a','b','c'];

const arr4 = arr1.concat(arr2).concat(arr3);

console.log(arr4); // [10,20,30,40,50,'a','b','c']