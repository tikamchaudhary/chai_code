/*
// truthy vlues:- true, any number, any string, " ",  "0", "false",  [], {}, function(){}

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

The logical AND operator, &&
If the first operand is truthy, the logical AND operator returns the second operand:-

true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"


// falsy values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN

*/

// const action = []
// if (action) {
//     console.log('find user ...');
// } else {
//     console.log('no user found');
// }


// note:-
// console.log(false == 0); // true
// console.log(false == ""); // true
// console.log(0 == ""); // true




// console.log(true && "dog") // returns "dog"
// console.log([] && "dog" && undefined && {} && false) // returns undefined

// console.log(false || "dog" || null) // returns "dog"
// console.log(0 || NaN || undefined || null || false) // returns false

const users = [];

if (users.length === 0) {
    // console.log('user is empty.');
}

const myObj = {};
if (Object.keys(myObj).length === 0) {
    // console.log('myObj is empty.');
}


// Nullish coalescing operator (??) : null, undefined

let value;
value = 5 ?? 10;
value = null ?? 10;
value = undefined ?? 15;
value = null ?? 10 ?? 15;
value = null ?? [] ?? 10 ?? 15;
// console.log(value);

// Terniary Operator

// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")