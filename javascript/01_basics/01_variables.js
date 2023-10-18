/*
Prefer not to use var
because of issue in block scope and functional scope
*/


var userName="Tikam";
let password=12345678;
const email='tikam123@gmail.com';
city='Noida';

let state;



userName="Tikam Singh";
password=87654321;
// email='tikam@gmail.com'; // not allowed reassign value with const
city='Delhi';




// console.log(userName);
// console.log(password);
// console.log(email);
// console.log(city);
// console.log(state);
console.log(userName,password,email,city,state);
console.table([userName,password,email,city,state]);

