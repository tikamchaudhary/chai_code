/************** switch ******************/

// const month = 2;

// switch (month) {
//     case 1:
//         console.log('Jan');
//     case 2:
//         console.log('feb'); // fall-through
//     case 3:
//         console.log('mar');
//     case 4:
//         console.log('apr');
//     default:
//         console.log('no case match');
// }


// const month = 4;
// // const month = '4'; // Switch cases use strict comparison (===).

// switch (month) {
//     case 1:
//         console.log('Jan');
//         break;
//     case 2:
//         console.log('feb');
//         break;
//     case 3:
//         console.log('mar');
//         break;
//     case 4:
//         console.log('apr');
//         break;
//         default:
//             console.log('no case match');
//     }



// const month = 'feb';

// switch (month) {
//     case 'jan':
//         console.log('jan');
//         break;
//     case 'feb':
//         console.log('feb');
//         break;
//     case 'mar':
//         console.log('mar');
//         break;
//     case 'apr':
//         console.log('apr');
//         break;
//     default:
//         console.log('no case match');
// }

/*_______________________________________________________________________________*/

// const group = 2;

// switch (group) {
//     case 1:
//         console.log('apple');
//         console.log('mango');
//         break;
//     case 1:
//         console.log('rose');
//         console.log('lotus');
//         break;
//         case 2:
//             const total=10+20;
//             console.log(total);
//         break;
//     default:
//         console.log('no case match');
// }


/*_______________________________________________________________________________*/


// const fruitName = 'guava';

// switch (fruitName) {
//     case 'apple':
//         console.log(`${fruitName} price is 100 rs/kg`);
//         break;
//     case 'banana':
//     case 'mango':
//     case 'guava':
//         console.log(`${fruitName} price is 60 rs/kg`);
//         break;
//     default:
//         console.log('no case match');
// }

/*_______________________________________________________________________________*/


// Lexical scoping in switch statement

const action = 'say_hello';

// switch (action) {
//     case 'say_hello': {
//         const message = 'Hello';
//         console.log(message);
//         break;
//     }
//     case 'say_hi': {
//         const message = 'Hi';
//         break;
//     }
//     default: {
//         console.log('empty action received.');
//     }
// }

// An alternative to if...else chains

const isLoggedIn = true;

switch (false) {
    case isLoggedIn:
        console.log('user login.');
        break;
    case !isLoggedIn:
        console.log('user login failed.');
        break;
    default:
        console.log('user is not registered.');
}