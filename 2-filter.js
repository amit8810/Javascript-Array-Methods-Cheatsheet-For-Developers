// used to filter some elements from the array on the basis of some condition
// as output give new array
// do not make changes in original array

const numbers = [1,2,3,4,5,6,7,8,9,10];
// find all the even numbers from the array
// way 1
const evenNumbers = numbers.filter((element) => element%2 === 0);
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

// way 2
function findEvenNumbers(num){
    if(num % 2 === 0) return num;
    return null;
}
const newArr = numbers.filter(findEvenNumbers);
console.log(newArr); // [ 2, 4, 6, 8, 10 ]

