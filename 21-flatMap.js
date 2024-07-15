// work similar to map , but flatMap return newArray as result , do not make change in original Array

const numbers = [10, 20, 30, 40, 50];

const newArray = numbers.flatMap((element) => element * 2);

console.log(numbers) // [ 10, 20, 30, 40, 50 ] // original doesn't affected

console.log(newArray) // [ 20, 40, 60, 80, 100 ]
