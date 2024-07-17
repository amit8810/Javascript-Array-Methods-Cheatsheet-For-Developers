// used to flatten the nested array
// return new array do not make changes in the original array

// SYNTAX : array.flat(depth)

const numbers = [1, [2, [3, [4, [5]]]]];

const newArray = numbers.flat(); 
console.log(newArray); // [ 1, 2, [ 3, [ 4, [Array] ] ] ]

const newArray2 = numbers.flat(2); 
console.log(newArray2); // [ 1, 2, 3, [ 4, [ 5 ] ] ]

const newArray3 = numbers.flat(Infinity); 
console.log(newArray3); // [ 1, 2, 3, 4, 5 ]

// also remove the empty slot in the array
const array = [1,2,,,4,5,,,6];
const newFlattenedArray = array.flat();
console.log(newFlattenedArray); // [ 1, 2, 4, 5, 6 ]


// flat array with custom function :: WAY 1
let result = [];
function flattenArray(arr) {
    arr.map((item) => {
        if(Array.isArray(item)){
            flattenArray(item);
        } else {
            result.push(item);
        }
    })
    return result;
}


let res = flattenArray(numbers);
console.log("res : ", res); // res :  [ 1, 2, 3, 4, 5 ]

// Flatten the nested object
let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        postalCode: "10001"
    },
};

let resultObj = {};
function flattenObj(data) {
    for (const key in data) {

        if(typeof data[key] === 'object') {
            flattenObj(data[key])
        } else {
            resultObj[key] = data[key];
        }
    }
}

flattenObj(person);
console.log(resultObj);

/*
{
  name: 'John',
  age: 30,
  street: '123 Main St',
  city: 'New York',
  postalCode: '10001'
}
*/
