"use strict" // treat all js code as newer verson.

// alert(4+4)  // we are using node.js , not browser

// console.log(3+
//     5)  // code readablity should be high

// console.log("Tikam Singh")



let name = "Tikam Chaudhary";
let age = 30;
let isLoggedIn = true;
let state;



/*

1. string => ""
2. number => (2**53)-1
3. bigint => > 1n
4. boolean => true/false
5. null => standalone value
6. undefined => 
7. symbol => unique

*/

// object

// const logo= Symbol('Chaudhary')

// console.log(typeof "Tikam") // string
// console.log(typeof 55) // number
// console.log(typeof (2**53-1)) // number
// console.log(typeof 1n) // bigint
// console.log(typeof true) // boolean
// console.log(typeof(null)) // object
// console.log(typeof undefined) // undefined
// console.log(typeof logo) // symbol

//1. note:-
// console.log(null==undefined)
// console.log(null===undefined)

//2. note:- bigint

// // create bigint
// const bigintNum1 = 55n
// const bigintNum2=BigInt(88)
// const bigintNum3=BigInt('99')
// console.table([bigintNum1,bigintNum2,bigintNum3]);

// Type information
//=====================
// console.log(typeof bigintNum1)
// console.log(typeof bigintNum2)
// console.log(typeof bigintNum3)

console.log( typeof 1n === 'bigint')
console.log( typeof BigInt('1') === 'bigint')
console.log(typeof Object(5n)==='object')

