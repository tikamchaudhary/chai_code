/****** if_else **********/

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // console.log('user login successfully ...');
} else {
    // console.log('user login failed ...');
}

// console.log('executed !');

/*________________________________________________________*/

const temperature = 40;

if (temperature >= 50) {
    // console.log('temperature is greater than 50');
} else {
    // console.log('temperature is less than 50');
}

/*________________________________________________________*/


/*
 we are use some operators for  evaluate conditions:-
 <, >, <=, >=, ==, !=, ===, !==
*/


/*________________________________________________________*/


const score = 200;

if (score > 100) {
    const power = 'fly';
    // console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);

/*________________________________________________________*/


const age = 17;
// if (age >= 18) console.log('driving licence is allowed !'), console.log('enjoy the driving ...'), console.log('best of luck !');



// if (age >= 18)
//     console.log('driving licence is allowed !'),
// console.log('enjoy the driving ...'),
// console.log('best of luck !');


// if (age >= 18)
//     console.log('driving licence is allowed !') 
// console.log('enjoy the driving ...')
// console.log('best of luck !')


// if (age >= 18)
//     console.log('driving licence is allowed !') ;
// console.log('enjoy the driving ...');
// console.log('best of luck !');

/*________________________________________________________*/

const balance = 1000;

// if (balance < 500) {
//     console.log('less than 500');
// } else if (balance < 750) {
//     console.log('less than 750');

// } else if (balance < 900) {
//     console.log('less than 900');
// } else {
//     console.log('less than 1200');
// }


/*________________________________________________________*/


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 === 3) {
    console.log('Allow to buy course.');
}

if(loggedInFromEmail||loggedInFromGoogle){
    console.log('User loggedin.');
}