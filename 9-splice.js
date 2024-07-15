// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// it modifies the original array

/* 
SYNTAX: array.splice(start, deleteCount, item1, item2, ...)

- start: The index at which to start changing the array.
- deleteCount: The number of elements to remove from the array.
- item1, item2, ...: The elements to add to the array, starting from the start index. If not specified, splice() will only remove elements.
*/

// The splice method in JavaScript can be used in various ways to manipulate arrays. Here are all the common use cases:

// 1.Removing Elements
const array = [10,20,30,40,50];
const removedElements = array.splice(1, 2);

console.log(removedElements); // [20, 30]
console.log(array); // [10, 40, 50]   original array affected!!!

// 2.Adding Elements
const numbers = [10,20,30,40,50];
numbers.splice(3, "a", "b", "c");

console.log(numbers); // [10, 20, 30, "a", "b", "c", 40, 50]

// 3.Replacing Elements
const items = ["bag", "eraser", "pencil", "ruler"];
items.splice(2, 2, "pen", "compass");

console.log(items); //[ 'bag', 'eraser', 'pen', 'compass' ]

// 4.Removing Elements from the END
const randomNumbers = [10,20,30,40,50];
randomNumbers.splice(-2, 2);
console.log(randomNumbers); // [ 10, 20, 30 ]

// 5.Removing Elements from start
const array2 = [10,20,30,40,50];
array2.splice(0, 3);
console.log(array2); // [40, 50]

// 6.Adding Elements to the End
const array3 = [10,20,30,40,50];
array3.splice(array3.length, 0, "a", "b");
console.log(array3); // [10,20,30,40,50,'a','b']

// 7.Adding Elements to the START
const array4 = [10,20,30,40,50];
array4.splice(0, 0, 'a', 'b');
console.log(array4); // ['a', 'b', 10,20,30,40,50];

// 8.Removing all elements
const array5 = [10,20,30,40,50];
array5.splice(0, array5.length);
console.log(array5); // []
