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
// console.log('color:', colors);

// console.log(colors.includes('green')); // true
// console.log(colors.includes('yellow'));  //false

// .indexOf()
// If indexOf() doesn't return -1, the array contains the given item.
// console.log(colors.indexOf('black') !== -1) // true
// console.log(colors.indexOf('yellow') !== -1) // false


/***************** Append an item to an array *********************************/
// .push() ==> Appends new elements to the end of an array, and returns the new length of the array.
const fruits1 = ['apple', 'mango'];
// console.log('fruits1:',fruits1);
// console.log('length:',fruits1.length);

const newLength = fruits1.push('banaba', 'guava');
// console.log('fruits1:',fruits1);
// console.log('new length:',newLength);


/******************** Remove the last item from an array **************************************/
// .pop() ==> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const fruits2 = ['mango', 'apple', 'orange'];
// console.log('fruits2:', fruits2);

const removedItem = fruits2.pop()
// console.log('fruits2:', fruits2);
// console.log('removed item:', removedItem);

/**Note:- .pop() can only be used to remove the last item from an array. To remove multiple items from the end of an array, to use .splice() **/

/*********** Remove multiple items from the end of an array **************************/
// array.splice(startIndex, deleteCount, addItem);

const numbers2 = [10, 20, 30, 40, 50, 60];
// console.log('numbers2:',numbers2);
const removedItems = numbers2.splice(-3); //to remove the last 3 items
// console.log('numbers2:',numbers2);
// console.log('removed items:',removedItems);

/********* Truncate an array down to just its first N items *****************************/
// array.splice(startIndex, deleteCount, addItem);

const numbers3 = [10, 20, 30, 40, 50, 60];
// console.log('numbers3:', numbers3);
const removed_items = numbers3.splice(2); // To truncate this array down to just its first 2 items.
// console.log('numbers3:', numbers3);
// console.log('removed items:', removed_items);

/*************** Remove the first item from an array *************************/
// .shift() => Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// Note:- shift() can only be used to remove the first item from an array. To remove multiple items from the beginning of an array, to use .splace() method.

const colorNames = ['red', 'blue', 'green'];
// console.log('colorNames:',colorNames);
const removed_item = colorNames.shift();
// console.log('colorNames:',colorNames);
// console.log('removed item:',removed_item);

/****************** Remove multiple items from the beginning of an array ***************/
// array.splice(startIndex, deleteCount, addItem);

const numbers4 = [10, 15, 20, 25, 30];
// console.log('numbers4:', numbers4);
const removed__items = numbers4.splice(0, 3); // remove the first 3 items
// console.log('numbers4:', numbers4);
// console.log('removed items:', removed__items);

// array.filter()
const myArray = [1, 2, 3, 4, 5, 6];
const new_myArray = myArray.filter((_, index) => index >= 3); // remove the first 3 items
// console.log("myArray:", myArray);
// console.log('new_myArray:', new_myArray);

// array.slice(startIndex, endIndex); // note:- endIndex is not include.
const otherNums = [1, 2, 3, 4, 5, 6];
const new_otherNums = otherNums.slice(3); // remove the first 3 items
console.log('otherNums:', otherNums);
console.log('new otherNums:', new_otherNums);