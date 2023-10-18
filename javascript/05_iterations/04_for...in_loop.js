/****** for...in *******/

const languages = {
    html: 'hypertext markup language',
    css: 'cascading style sheets',
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in languages) {
    // console.log(`full form of ${key}: ${languages[key]}`);
}

const programming = ['js', 'java', 'c++', '#c']

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');

// console.log(map);

for (const key in map) {
    // console.log(key);
}