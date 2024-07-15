// same as reduce function but, it traverse on array from
// right to left

const numbers = [1,2,3,4,5];

const sum = numbers.reduceRight((accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator;
}, 0);

console.log(sum) // 15