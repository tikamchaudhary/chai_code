const score1 = 400;
const score2 = 400.000000;
// console.log(score1, typeof (score1));

const balance1 = Number(5000);
// console.log(balance1, typeof (balance1));

const balance2 = new Number(6600);
// console.log(balance2, typeof (balance2));


// console.log(score1.toString(),score1.toString().length);
// console.log(score2.toString(),score2.toString().length);

// console.log(score1.toFixed(2));
// console.log(score2.toFixed(2));

const totalBalance1 = 5;
const totalBalance2 = 50.00123456;
const totalBalance3 = 5123.00123456;
const totalBalance4 = 0.000123;
const totalBalance5 = 0.100123;

// console.log(totalBalance1.toPrecision(),typeof(totalBalance1.toPrecision()));
// console.log(totalBalance1.toPrecision(2));
// console.log(totalBalance2.toPrecision(5));
// console.log(totalBalance3.toPrecision(2));
// console.log(totalBalance4.toPrecision(6));
// console.log(totalBalance5.toPrecision(7));

const depositAmount1 = 1000000000000;
const depositAmount2 = 10_00_00_00_00_000; // User of numeric separator underscores(_)

// console.log(depositAmount1, depositAmount1.toLocaleString(), "us format");
// console.log(depositAmount2, depositAmount2.toLocaleString('en-IN'), 'indian format');


/********************************** Math *******************************************/
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-5));

// console.log(Math.cbrt(1331));
// console.log(Math.sqrt(225));

// console.log(Math.round(5.49));
// console.log(Math.round(5.50));
// console.log(Math.round(5.50001));

// console.log(Math.floor(5.49));
// console.log(Math.floor(5.50));
// console.log(Math.floor(5.59999));


// console.log(Math.ceil(5.0001));
// console.log(Math.ceil(5.50));
// console.log(Math.ceil(5.59999));

const values = [11, 10, 8, 34, 12, 55, 88];
// console.log(Math.max(...values));
// console.log(Math.min(...values));

// console.log(Math.pow(3,4));

// console.log(Math.random()); // return the value 0 to 1

// console.log((Math.random())+1); // return the value 1 to 3

// console.log((Math.random()*10)+1); // return the value 1 to 10

// console.log(Math.floor(Math.random() * 10) + 1); // return an integer vlue 1 to 10


const max = 10;
const min = 5;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // return an integer vlue 5 to 10
