const user = {
    userName: 'Tikam Singh',
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website !`);
        // console.log(this);
    }
}

// user.welcomeMessage();
user.userName = 'Tikam Chaudhary';
// user.welcomeMessage();

// console.log(this); // empty object 

/*_________________________________________________________________*/

function chai() {
    const userName = 'Tikam Singh';

    console.log(`Hello ${this.userName} !`); //Hello undefined !
    console.log(this); // global object (we are using node)
}
// chai()

const chai2 = function () {
    const userName = 'Tikam Singh';

    console.log(`Hello ${this.userName} !!`); //Hello undefined !!
    console.log(this); // global object (we are using node);
}
// chai2()

const chai3 = () => {
    const userName = 'Tikam Singh';

    console.log(`Hello ${this.userName} !!!`); //Hello undefined !!!
    console.log(this); // empty object (we are using arrow function in node);
}
// chai3()

/*________________________________________________________________________*/

// const addTwoNum = (num1, num2) => {
//     // return (num1 + num2);
//     return num1 + num2;
// }


// const addTwoNum = (num1, num2) => num1 + num2;


// const addTwoNum = (num1, num2) => (num1 + num2);


const addTwoNum = (num1, num2) => ({ userName: 'Ajay' });

// console.log(addTwoNum(4, 5));

const squar = num => num ** 2;
// console.log(squar(4));

/*_______________________________________________________________________________*/

function normal(){
    console.log('normal',this);
}

const arrow=()=>{
    console.log('arrow',this);
}

normal();
arrow();
