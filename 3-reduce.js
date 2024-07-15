// reduced whole array in single value
// as a result give single value not array;

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