
function sayHi() {
    console.log("t");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("m");
}
// sayHi();



function addTwoNum(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNum(4, 5);



function sum(num1, num2) {
    // const total = num1 + num2;
    // return total;

    return num1 + num2;
}
const result = sum(4, 5);
// console.log(result);




function loginUserMessage(userName) {
    if (!userName) {
        return ('please enter your userName !');
    }
    return (`'${userName}' just logged in...`);
}
// console.log(loginUserMessage());
// console.log(loginUserMessage('Tikam Singh'));




function calculateCartPrice(val1, val2, ...values) {
    // console.log(val1, val2);
    return (values);
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));


const user = { name: 'Tikam', age: 30 }

function handleObject({ name, age }) {
    // console.log(`User: ${name} & age: ${age} `);
}
// handleObject(user);
handleObject({ name: 'Tikam Singh', age: 30 });

const data = [200, 300, 400];
function handleArray(arr) {
    console.log(arr[1]);
}
// handleArray(data);
handleArray([200, 300, 400]);