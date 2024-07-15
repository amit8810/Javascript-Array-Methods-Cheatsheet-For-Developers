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

