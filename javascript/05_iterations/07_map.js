// map()
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((num) => { return num + 10 });

// console.log(newNumbers);

// method chaining
const myNum = numbers
    .map((num) => num * 10)
    .map(num => num + 1)
    .filter(num => num >= 40);

console.log(myNum);
