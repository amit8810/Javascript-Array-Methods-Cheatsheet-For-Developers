// used to sort elements in the array
// modifies the original array

const arr = [1, 5, 3, 6, 2];
arr.sort(); // to sort in ascending order
console.log(arr); // [ 1, 2, 3, 5, 6 ]

const nums = [1, 5, 3, 6, 2];
nums.sort((a, b) => b - a); // to sort in descending order
console.log(nums); // [ 6, 5, 3, 2, 1 ]

const alphabets = ["a", "d", "c", "e"];
alphabets.sort(); // to sort in alphabetically ascending order
console.log(alphabets); // [ 'a', 'c', 'd', 'e' ]

const alphabets2 = ["a", "d", "c", "e"];
alphabets2.sort((a, b) => b - a); // to sort in alphabetically descending order
console.log(alphabets2); // [ 'a', 'd', 'c', 'e' ]

const fruits = ["mango", "dates", "pineapple", "orange"];
fruits.sort(); // for ascending order
console.log(fruits); // [ 'dates', 'mango', 'orange', 'pineapple' ]

const fruits2 = ["mango", "dates", "pineapple", "orange"];
fruits2.sort((a, b) => b.localeCompare(a)); // for descending order
console.log(fruits2); // [ 'pineapple', 'orange', 'mango', 'dates' ]

const students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 95 },
];

students.sort((a, b) => a.score - b.score); // for ascending order
console.log(students);

/*
[
  { name: 'Bob', score: 85 },
  { name: 'Alice', score: 90 },
  { name: 'Charlie', score: 95 }
]
*/

const employees = [
  { name: "Alice", salary: 10200 },
  { name: "Bob", salary: 65820 },
  { name: "Charlie", salary: 15252 },
];

employees.sort((a,b) => b.salary - a.salary); // for descending order
console.log(employees);
/*
[
  { name: 'Bob', salary: 65820 },
  { name: 'Charlie', salary: 15252 },
  { name: 'Alice', salary: 10200 }
]
*/
