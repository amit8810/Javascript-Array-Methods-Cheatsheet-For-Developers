# JS Array Methods

## Map()
- The map method lets you loop on each element inside the array, and manipulate them as per the requirement.
```Javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];
const newArray = numbers.map((element) => element * 2);
console.log(newArray);//[2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
```

## Filter()
-The filter method lets you create a new array based on conditions that evaluate to true from the original array.
```Javascript
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
```

## Reduce()
- The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.
```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.reduce((sum , curr) => {
    sum = sum + curr;
    return sum;
}, 0)

console.log(result); // 55

// we are doing this with above reduce method
function calculateSumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const ans = calculateSumOfArray(numbers);
console.log(ans); // 55
```

## ReduceRight()
- The reduceRight method executes a reducer function that you provide on each element of the array resulting in a single output value(from right to left).
```javascript
const numbers = [1,2,3,4,5];

const sum = numbers.reduceRight((accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator;
}, 0);

console.log(sum) // 15
```

## Push()
- The push method adds a new element to the end of an array and returns the new length. It modifies the original array.
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7); 
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
```

## Pop()
- The pop method removes the last element of an array and returns that element. It modifies the original array.
```javascript
const numbers = [1,2,3,4,5];

const element = numbers.pop();

console.log("removed element : ", element); // 5

console.log(numbers); // [1,2,3,4]
```

## Shift()
- The shift method removes the first element of an array and returns the first element of an array. It changes the original array.
```javascript
const numbers = [1,2,3,4,5];

const element = numbers.shift();

console.log("removed element : ", element); // 1

console.log(numbers); // [ 2, 3, 4, 5 ]
```

## UnShift()
- The unshift method adds new items to the beginning of an array and returns the new length. It changes the original array.
```javascript
const numbers = [1,2,3,4,5];

const newLength = numbers.unshift(20);

console.log(numbers); // [ 20, 1, 2, 3, 4, 5 ]
console.log(newLength); // 6
```

## Splice()
- splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- SYNTAX : ```array.splice(start, deleteCount, item1, item2, ...) ```
1. start: The index at which to start changing the array.
2. deleteCount: The number of elements to remove from the array.
3. item1, item2, ...: The elements to add to the array, starting from the start index. If not specified, splice() will only remove elements.

```javascript
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

```

## Slice()
- The slice method returns the selected elements in an array, as a new array object. This does not affect the original array.
```javascript
const fruits = ["mango", "apple", "guava", "banana", "cherry"];

console.log(fruits.slice(0, 3)); // [ 'mango', 'apple', 'guava' ]
console.log(fruits.slice(1, 3)); // [ 'apple', 'guava' ]

/*
If you provide only one value to the slice() method, it will use that value as the start index and will extract elements from that index to the end of the array.
*/
console.log(fruits.slice(0)); // [ 'mango', 'apple', 'guava', 'banana', 'cherry' ]
console.log(fruits.slice(2)); // [ 'guava', 'banana', 'cherry' ]

```

## concat()
- The concat method is used to join two or more arrays. It does not change the existing arrays but returns a new array, containing the values of the joined array.
```javascript
const arr1 = [10,20,30];
const arr2 = [40,50,60];
const arr3 = ['a','b','c'];

const arr4 = arr1.concat(arr2).concat(arr3);

console.log(arr4); // [10,20,30,40,50,'a','b','c']
```

## some()
- This method returns true if at least one element in the array passes the test implemented by the provided function.
```javascript
const numbers = [1,2,3,4,5];

console.log(numbers.some((element) => element === 3)); // true
console.log(numbers.some((element) => element === 6)); // false

console.log(numbers.some((element) => element >= 6)); // false
```

## every()
- In an array, this method checks every element in the array that passes the condition, returning true or false as appropriate.

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.every((element) => element > 20)); // false
console.log(numbers.every((element) => element < 60)); // true
```

## fill()
- The fill method fills the specified elements in an array with a static value. We can specify the position of where to start and end the filling.
- SYNTAX :  ```array.fill(value, startIndex, endIndex)```
```javascript
const numbers = [10,20,30,40,50];

numbers.fill(0, 2, 4);

console.log(numbers); // [10, 20, 0, 0, 50]
```

## Reverse()
- The reverse method reverses the order of the elements in an array. It modifies the original array.
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // [5, 4, 3, 2, 1]
numbers; // [5, 4, 3, 2, 1]
```

## Includes()
- The includes method takes an element as an input and returns true or false if the array indeed contains this exact element.
```javascript
const numbers = [10,20,30,40,50];

const numberIsIncluded = numbers.includes(30);
console.log(numberIsIncluded); // true

const numberIsIncluded2 = numbers.includes(100);
console.log(numberIsIncluded2); // false

```

## At()
- This method returns a value at the specified index. It does not modify the original array.
```javascript
const numbers = [10,20,30,40,50];

console.log(numbers.at(2)); // 30
```

## Find()
- The find method returns the value of the first element in an array that passes the test in a testing function.
```javascript

const numbers = [10, 20, 30, 40, 50];
const value = numbers.find((element) => element > 20);
console.log(value); // 30

// :)
const obj = [
  { id: 1, name: "Alex" },
  { id: 2, name: "James" },
  { id: 3, name: "Carla" },
];

const val = obj.find((element) => element.id == 2);
console.log(val) // { id: 2, name: 'James' }
```

## forEach()
- The forEach method helps to loop over an array by executing a provided callback function for each element in an array.
```javascript
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
```

## Flat()
- The flat method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. It does not modify the original array.
- used to flatten the nested array
```javascript
// used to flatten the nested array
// return new array do not make changes in the original array

// SYNTAX : array.flat(depth) , default depth value is 1

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
console.log("res : ", res);
```

## flatMap()
- The flatMap method returns a new array formed by applying a given callback function to each element of the array.
```javascript
// work similar to map , but flatMap return newArray as result , do not make change in original Array

const numbers = [10, 20, 30, 40, 50];

const newArray = numbers.flatMap((element) => element * 2);

console.log(numbers) // [ 10, 20, 30, 40, 50 ] // original doesn't affected

console.log(newArray) // [ 20, 40, 60, 80, 100 ]
```

## indexOf()
- The findIndex method returns the index of the element in an array that passes a condition or -1 if it is not present. It executes the function once for each element present in the array.
```javascript
const numbers = [10,20,30,30,40,50];

console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(10)); // 0
console.log(numbers.indexOf(50)); // 5
console.log(numbers.indexOf(60)); // -1
```

## findIndex()
- The findIndex method returns the index of the element in an array that passes a condition or -1 if it is not present. It executes the function once for each element present in the array.
```javascript
// SYNTAX: array.findIndex(callback(element, index, array), thisArg)

const numbers = [10, 20, 30, 40, 50];

const value1 = numbers.findIndex((element) => element === 30);
console.log(value1); // 2

const value2 = numbers.findIndex((element) => element > 30);
console.log(value2); // 3

const value3 = numbers.findIndex((element) => element === 60);
console.log(value3); // -1
```

## lastIndexOf()
- The lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backward, starting at fromIndex.
```javascript
// return the last index at which a given element can be found
// if element not found then return -1

const numbers = [10, 20, 30, 30, 40, 50];

console.log(numbers.lastIndexOf(30)); // 3
console.log(numbers.lastIndexOf(50)); // 5
console.log(numbers.lastIndexOf(10)); // 0
console.log(numbers.lastIndexOf(60)); // -1
```

## Join()
- The join method joins all elements of an array into a string. It does not modify the original array.
```javascript
const numbers = [1, 2, 3, 4, 5];

const output = numbers.join('');

console.log(output); // "12345"
```

## Sort()
- The sort method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending or descending.
```javascript
// used to sort elements in the array
// modifies the original array

const numbers = [1, 5, 3, 6, 2];
numbers.sort();

console.log(numbers); // [ 1, 2, 3, 5, 6 ]

const alphabeticalSort = ['Virginia', 'Cary', 'Tennessee', 'Alaska'];
alphabeticalSort.sort();

console.log(alphabeticalSort); // ['Alaska', 'Cary', 'Tennessee', 'Virginia']
```

## toString
- This method converts the elements of a specified array into string form, without affecting the original array.
```javascript
// convert elements of specified array into string form
// do not affect original array

const numbers = [1, 2, 3, 4, 5];

const newString = numbers.toString();

console.log(newString) // "1,2,3,4,5"
console.log(typeof(newString)) // string


console.log(newString[0]); // 1
console.log(newString[1]); // ,
```

## From()
- The from method creates a new array from an array-like or iterable object.
```javascript
// The Array.from() method in JavaScript is used to create a new, shallow-copied array instance from an array-like or iterable object. This method is especially useful for converting objects that are not true arrays (like NodeLists, arguments objects, or strings) into arrays.

const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

const array1 = Array.from(arrayLike);
console.log(array1); // [ 'a', 'b', 'c' ]

const str = "amit";
const array2 = Array.from(str);
console.log(array2); // [ 'a', 'm', 'i', 't' ]


```

## Entries()
- It creates an iterator object and a loop that iterates over each key/value pair.
```javascript
// returns a new Array Iterator object that contains the key/value pairs for each index in the array. This method can be particularly useful when you need to iterate over both the indices and values of an array.

const numbers = [10, 20, 30, 40, 50];

const iterator = numbers.entries();

for (const x of iterator) {
    console.log(x);
}
/*
[ 0, 10 ]
[ 1, 20 ]
[ 2, 30 ]
[ 3, 40 ]
[ 4, 50 ]
 */

```

## isArray()
- This method returns true if the given value is an array.
```javascript
const numbers = [10, 20, 30, 40, 50];
const str = "123"
const a = 10;

console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(str)); // false
console.log(Array.isArray(a)); // false
```