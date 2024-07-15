// return true if array contain exact that element, else return false

const numbers = [10,20,30,40,50];

const numberIsIncluded = numbers.includes(30);
console.log(numberIsIncluded); // true

const numberIsIncluded2 = numbers.includes(100);
console.log(numberIsIncluded2); // false