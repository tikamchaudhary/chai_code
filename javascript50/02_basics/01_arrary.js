/************************** Create an array ************************************/
const numbers = [2, 4, 6, 8, 10]; // created using array literal notation
const numbers1 = [2, 4, 7, 8, 9];

const fruits = new Array('apple', 'orange', 'mango', 'orange', 'banana', 'orange');//created using Array() constructor

const names = "Tikam,Shivam,Aman,Rahul,Vishal".split(',');//created using String.prototype.split() 

// console.log('numbers: ', numbers, " length: ", numbers.length);
// console.log('numbers1: ', numbers1,);
// console.log('fruits: ', fruits);
// console.log('names: ',names);


/*********** Create a string from an array ****************************/
// console.log(numbers.toString(),typeof(numbers.toString())); // 2,4,6,8,10 string
// console.log(numbers.join(),typeof(numbers.join())); // 2,4,6,8,10 string
// console.log(numbers.join('*')); // 2*4*6*8*10


/******************* Access an array item by its index *****************************/
/* Access the frist & second element:-*/

// console.log(numbers[0]) // frist element
// console.log(numbers[1]) // second element

/*Access the last & second-last element:- */

// console.log(numbers[numbers.length-1]) // last element
// console.log(numbers[numbers.length-2]) // second-last element

/* #if index_value >= array.lenth:- returns 'undefined'.
 and index_value < 0 (mean's negative value):- returns 'undefined'.*/

// console.log(numbers[99]) ;
// console.log(numbers[-1])

// console.log(numbers[2]); //6
// console.log(numbers['2']); //6
// console.log(numbers['02']); //undefined
// console.log(numbers['2'] !== numbers['02']) // true
// console.log(numbers[2] === numbers['2']) // true

/*********** Find the index of an item in an array **********************/
// .indexOf()
const firstIndex = fruits.indexOf('orange');
// console.log('1st index of orange: ',firstIndex ); // 1

const secondIndex = fruits.indexOf('orange', 2);
// console.log('2nd index of orange: ',secondIndex); //3

/*(note:- if return -1 that mean's element is not found)*/
// console.log(numbers.indexOf('guava')) // -1

// .lastIndexOf()
const lastIndex = fruits.lastIndexOf('orange');
// console.log('last Index of orange:',lastIndex); // 5

const secondLastIndex = fruits.lastIndexOf('orange', 4);
// console.log('second last Index of orange:',secondLastIndex); //3

/*(note:- if return -1 that mean's element is not found)*/
// console.log(fruits.lastIndexOf('guava')) ;

// .findIndex()
const first_odd_num_index = numbers1.findIndex((number) => number % 2 !== 0);
// console.log('first_odd_num_index:', first_odd_num_index);

/*(note:- if return -1 that mean's element is not found)*/
const first_large_num_index = numbers1.findIndex((number) => number >= 10);
// console.log('number >= 10 indexOf: ', first_large_num_index);

// .find()

const data = [10, 20, 30, 40, 50];
// console.log('data:',data);

const result1 = data.find((num) => num > 35);
const result2 = data.find((num) => num > 60);
// console.log(result1);  //40
// console.log(result2); // undefined

// .filter()

const filterData1 = data.filter(item => item > 35);
// console.log(filterData1);

const filterData2 = data.filter(item => item > 60);
// console.log(filterData2);

/*********** Check if an array contains a certain item *****************/

// .includes()
const colors = ['red', 'green', 'black'];
console.log('color:', colors);

// console.log(colors.includes('green')); // true
// console.log(colors.includes('yellow'));  //false

// .indexOf()
// If indexOf() doesn't return -1, the array contains the given item.
console.log(colors.indexOf('black') !== -1) // true
console.log(colors.indexOf('yellow') !== -1) // false