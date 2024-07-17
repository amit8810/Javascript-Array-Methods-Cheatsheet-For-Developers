/*
The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
*/

// flatMap() = arr.map(...args).flat()
// It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

const numbers = [10, 20, 30, 40, [50]];

const newArray = numbers.flatMap((element) => element * 2);

console.log(numbers) // [ 10, 20, 30, 40, [ 50 ] ] // original doesn't affected

console.log(newArray) // [ 20, 40, 60, 80, 100 ]
