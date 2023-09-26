const score1 = 50;
const score2 = "100";
const score3 = "100abc";

// console.log(typeof score1);
// console.log(typeof score2);

// strin & boolean convert to  a number
//++++++++++++++++++++++++++++++++++++

const valueInNum1 = Number(score2);
const valueInNum2 = Number(score3);
const booleanInNum1 = Number(true);
const booleanInNum2 = Number(false);

// console.log(valueInNum1, typeof valueInNum1);
// console.log(valueInNum2, typeof valueInNum2);
// console.log(booleanInNum1,typeof booleanInNum1);
// console.log(booleanInNum2,typeof booleanInNum2);

/*

"50" => 50
"50abc" => NaN (not a number) and it's datatype  also number .
"abc" => NaN
true => 1  false => 0


*/

// convert to boolean

const valueInBool1 = Boolean(1);
const valueInBool2 = Boolean(0);
const valueInBool3 = Boolean(-1);
const valueInBool4=Boolean(1.5);
const valueInBool5=Boolean(-1.5);
const valueInBool6=Boolean("");
const valueInBool7= Boolean("abc");

// console.log(valueInBool1, typeof valueInBool1);
// console.log(valueInBool2, typeof valueInBool2);
// console.log(valueInBool3, typeof valueInBool3);
// console.log(valueInBool4,typeof valueInBool4);
// console.log(valueInBool5,typeof valueInBool5);
// console.log(valueInBool6,typeof valueInBool6);
// console.log(valueInBool7,typeof valueInBool7);


/*

1 (or any +ve/-ve number) => true 
0 => false
"" => false
"abc" => true


*/

// convert to string
const valueInStr=String(100);
console.log(valueInStr,typeof valueInStr);