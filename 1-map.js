// used to transform whole array
// as output give new array
// do not make changes in original array
// map is a higher order function

const numbers = [1,2,3,4,5,6,7,8,9,10];

// way 1
const newArray = numbers.map((element) => element * 2);
console.log(newArray); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]


// way 2
function multiplyBy2(element){
    return element * 2;
}

const newArray2 = numbers.map(multiplyBy2);
console.log(newArray2); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]