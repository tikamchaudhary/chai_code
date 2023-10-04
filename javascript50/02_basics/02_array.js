const fruits = ['apple', 'mango', 'banana'];
const colors = ['white', 'black', 'red'];

// fruits.push(colors);
// console.log('fruits:',fruits);
// console.log(fruits[3][1]);

// .concat() => Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const combinedArray1 = fruits.concat(colors);
const combinedArray2 = [...fruits, ...colors, 'Tikam Singh'];

// console.log("fruits:", fruits);
// console.log("colors:", colors);
// console.log("combinedArray1:", combinedArray1);
// console.log("combinedArray2:", combinedArray2);

//.flat(depth) => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const numbers = [1, 2, [3, 4, 5], 6, [7, [8, 9]], 0];
const flatedArray = numbers.flat(Infinity);
// console.log(flatedArray);

//Array.isArray()
// console.log(Array.isArray('Tikam'));

// Array.from()
// console.log(Array.from('Tikam'));
// console.log(Array.from({name:'Tikam'})) // return [] // interesting case

// Array.of()
const score1 = 100;
const score2 = 200;
const score3 = 300;
// console.log(Array.of(score1,score2,score3,score1));

// array.every(callback(element, index, array), thisArg);
const values = [2, 4, 6, 8, 10];
const values1 = [2, 4, 6, 8, 10,13];
const isEven1 = values.every(item => item % 2 === 0);
const isEven2 = values1.every(item => item % 2 === 0);

// console.log(isEven1 ? "all items'even'." : "all items not 'even'.");
// console.log(isEven2 ? "all items'even'." : "all items not 'even'.");

// .reduce()
