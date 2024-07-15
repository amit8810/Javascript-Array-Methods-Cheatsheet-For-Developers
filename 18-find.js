// return the first value from array that passes the test
// find is also a HOF

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
