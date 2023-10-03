/************************** Create an array ************************************/
const numbers = [2, 4, 6, 8, 10]; // created using array literal notation
const numbers1 = [2, 4, 7, 8, 9];

const fruits = new Array('apple', 'orange', 'mango', 'orange', 'banana', 'orange');//created using Array() constructor

const names = "Tikam,Shivam,Aman,Rahul,Vishal".split(',');//created using String.prototype.split() 

console.log('numbers: ', numbers, " length: ", numbers.length);
console.log('numbers1: ', numbers1,);
console.log('fruits: ', fruits);
console.log('names: ',names);

/************* update array elements by index *********************/
// numbers1[2]='five';
// console.log(numbers1);

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

fruits1[fruits1.length] = "ORANGE";
// console.log('fruits1:',fruits1);


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
// console.log('otherNums:', otherNums);
// console.log('new otherNums:', new_otherNums);

/************** Add a new first item to an array ******************/
// array.unshift() => Inserts new elements at the start of an array, and returns the new length of the array.
const numbers5 = [4, 5, 6];
// console.log('number5:', numbers5, 'length:', numbers5.length);
const new_length = numbers5.unshift(100, 200);
// console.log('number5:', numbers5, "new_length", new_length);

/****************** Remove a single item by index *****************************/

// array.splice(startIndex, deleteCount, addItem);
const fruits3 = ['mango', 'apple', "Banana", 'orange'];
// console.log('fruits3:', fruits3);
//to remove the string "Banana" from the fruits array — by specifying the index position of "Banana".
const bananaIndex = fruits3.indexOf('Banana');
const removed__item = fruits3.splice(bananaIndex, 1);
// console.log('fruits3:', fruits3);
// console.log('removed item:',removed__item);

/************** Remove multiple items by index ***************************/

// array.splice(startIndex, deleteCount, addItem);
const fruits4 = ["Apple", "Banana", "Strawberry", "Mango"];
// console.log('fruits4:', fruits4);
const remove_items = fruits4.splice(1, 2);
// console.log('fruits4:', fruits4);
// console.log('remove_items:', remove_items);

/******************* Replace multiple items in an array************************/
const fruits5 = ["Apple", "Banana", "Strawberry", "Mango"];
// console.log('fruits5:', fruits5);
const remove__items = fruits5.splice(-2, 2); // replace the last 2 items
// console.log('fruits5:', fruits5);
// console.log('remove__items:', remove__items);

/******************* insert/replace new  items in an array************************/
const fruits6 = ['mango', 'banana', 'apple'];
// console.log('fruits6:',fruits6);
const addItems = fruits6.splice(1, 0, 'papaya', 'orange'); //  insert items

// console.log('fruits6:',fruits6);
// console.log('add items:',addItems);

const remove_Items = fruits6.splice(1, 2, 'GUAVA', 'GRAPES'); // replace items
// console.log('fruits6:',fruits6);
// console.log('remove_Items:',remove_Items);

/************************ Iterate over an array **********************************/
//  for loop
const users = ['Tikam', 'Ajay', 'Shivam', 'Rahul'];

for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
}

// for...of loop
for (const user of users) {
    // console.log(user);
}


/****************** Call a function on each element in an array ******************/
/* 
array.forEach(callback[, thisArg]);
(or)
array.forEach(callback(currentValue[, index[, array]])[, thisArg]);
note:- forEach() method return always 'undefined'.
*/

const userNames = ['Tikam', 'Ajay', 'Shivam', 'Rahul'];
userNames.forEach((currentName, index, array) => {

    // index === 0 && console.log('userNames:', array);
    // console.log(`index ${index}: ${currentName}`);

});

// use case for the thisArg parameter:-

//1. Preserving the Context:-
const myObject = {
    value: 2,
    process: function (item) {
        // console.log(item * this.value);
    }
};

const array = [1, 2, 3];
array.forEach(myObject.process, myObject);

// 2.Working with Asynchronous Code:-
const dataProcessor = {
    data: [1, 2, 3],
    processAsync: function () {
        // 'this' is available here.
        this.data.forEach(function (item) {
            // 'this' is availavle here.
            const _this = this;
            setTimeout(function () {
                // console.log(item);
                // item === 1 && console.log(_this.data);
            }, 100);
        }, this);

    }
};

dataProcessor.processAsync();

// 3.Using Functions with Specific Contexts:-
const userObj = { name: 'Tikam Singh', age: 30 }
function printValue(_, index) {
    // console.log(index, this.name);
}

const values = [10, 20, 30];
values.forEach(printValue, userObj);

// other use case:-
const num = [1, 2, 3];
num.forEach(function () {
    // console.log(this);
}, num);

/*************************** Merge multiple arrays together**************************/
// .concat()
const arr1 = [0, 1, 2];
const arr2 = [3, 4];
const arr3 = [5];
const arrMain = arr1.concat(arr2, arr3, 'Tikam');
// console.log('arr1', arr1);
// console.log('arr2', arr2);
// console.log('arr3', arr2);
// console.log('arrMain', arrMain);

// spread operator (...)
// console.log([...arr1,...arr2,...arr3,"mango"]);

// .push()
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [];
for (const element of array1) {
    array3.push(element);
}
for (const element of array2) {
    array3.push(element);
}

// console.log('array1:', array1);
// console.log('array2', array2);
// console.log('array3', array3);


/*********************** Copy an array ***************************************/
const languages = ['html', 'css', 'javascript', 'python'];

// 1.spread operator (...)
const copy_languages1 = [...languages];

//2. slice()
const copy_languages2 = languages.slice();
const copy_slice = languages.slice(1, 3); // last index is not includes

//3. Array.from() => Creates an array from an iterable object.
const copy_languages3 = Array.from(languages);

//4. concat()
const copy_languages4 = [].concat(languages);


// console.log('languages:', languages);
// console.log('copy_languages1:', copy_languages1);
// console.log('copy_languages2:', copy_languages2);
// console.log('copy_slice:', copy_slice);

// console.log('copy_languages3:', copy_languages3);
// console.log('copy_languages4:', copy_languages4);

/*
All built-in array-copy operations (spread syntax, Array.from(), Array.prototype.slice(),
and Array.prototype.concat()) create shallow copies. 
If you instead want a deep copy of an array,
you can use JSON.stringify() to convert the array to a JSON string, 
and then JSON.parse() to convert the string back into a new array that's completely independent from the original array.

const arrayDeepCopy = JSON.parse(JSON.stringify(array));
*/

const main_array = ['Tikam', 'Pavan', ['mango', 'apple']];

const main_arrayAlias = main_array;
main_arrayAlias.push('red');

const shallow_copy = [...main_array];
shallow_copy[0] = 'Chaudhary';
shallow_copy[2][0] = 'orange';

const deep_copy = JSON.parse(JSON.stringify(main_array));
deep_copy[2].push('guava');

// console.log(main_array === main_arrayAlias);
// console.log('main array:', main_array);
// console.log('main_arrayAlias:', main_arrayAlias);
// console.log('shallow_copy:', shallow_copy);
// console.log('deep_copy:', deep_copy);


/*********************** Creating a two-dimensional array **********************************/
const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
];

//   console.log(`${board.join("\n")}\n\n`);

board[4][4] = board[6][4];
board[6][4] = " ";
//   console.log(board.join("\n"));

/************ Using an array to tabulate a set of value *****************/
const tableValues = [];
for (let x = 0; x < 10; x++) {
    tableValues.push([2 ** x, 2 * x ** 2]);
}
// console.table(tableValues);

/**Creating an array using the result of a match**/
// RegExp