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

