
var c = 300;
let d = 500;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    let d = 400;
    // console.log('local d:', d);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log('global d:', d);



function one() {
    const useName = 'Tikam Singh';

    function two() {
        const password = 12345;
        console.log(useName);
    }
    // console.log(password);
    two();
}
// one();




if (true) {
    const userName = 'Tikam Singh ';

    if (userName === 'Tikam Singh ') {
        const password = 12345;
        // console.log(userName + password);
    }
    // console.log(password);
}
// console.log(useName);



/**************************** Interesting ******************************/
addOne(5);

function addOne(num) {
    return num + 1;
}



addTwo(5);

const addTwo = function (num) {
    return num + 2;
}
