// used to fill all the elements of an array from start index to an end index with a static value
// make changes in original array

// SYNTAX : array.fill(value, startIndex, endIndex)

const numbers = [10,20,30,40,50];

numbers.fill(0, 2, 4);

console.log(numbers); // [10, 20, 0, 0, 50]

