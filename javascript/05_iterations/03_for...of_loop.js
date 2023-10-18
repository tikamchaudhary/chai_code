/****** for...of **********/

// ["","",""]
// [{},{},{}]

const nums = [4, 8, 12, 16, 20];

for (const num of nums) {
    // console.log(num);
}

const greetings = "hello user !";

for (const greet of greetings) {
    // console.log(` each char: ${greet}`);
}

for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }

    // console.log(` each char: ${greet}`);
}


/**** Map *******/

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');
map.set('IN', 'Bharat');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
}

const user = { name: 'tikam singh', age: 30, city: 'Noida' }

// for (const [key, value] of user) {
//     console.log(key, ':', value);
// }