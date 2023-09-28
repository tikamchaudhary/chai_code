
/*******Primitive datatypes ********/

// 7 Types: String, Number, Boolean,  Bigint, null, undefined, Symbol

const name = "Tikam Singh";

const score1 = 51;
const score2 = 100.5;

const isLoggedIn = true;
const isAdmin = false;

const bigintValue = 80776620528077662051n;

const outsideTemp = null;

let userEmail;

const id1 = Symbol('123');
const id2 = Symbol('123');

// console.log(id1 == id2);
// console.log(id1 === id2);


/******* Non-Primitive (Reference) datatypes ********/

// Array, Object, function

const num = [30, 40, 50, 60];

const user = { name: "tikam Singh", age: 30 };

const login = function () {
    console.log("Hell user");
}

console.log(typeof num);
console.log(typeof user);
console.log(typeof login);

// https://262.ecma-international.org/5.1/#sec-11.4.3
