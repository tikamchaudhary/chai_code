const name = "Tikam Singh";
const repoCount = 20;

// console.log(name + " Repo Count = " + repoCount);
// console.log('My name is ' + name + '.\n' + 'and I have ' + repoCount + 'repos.');

/*********************** Template literals (Template strings) *********************************/

const userName = `Tikam Singh`;
const age = 30;

// console.log(`User Name ${userName} And Age: ${age}.`); 

// console.log(`My name is ${userName}.
// and my age: ${15+15}.`);

const str = `\${expression}`;
// console.log(str, str === '${expression}'); //${expression} true
// console.log(`\`` === "`"); // true

/*********************** String methods *********************************/

const languageName = 'javascript';
const fruitName = String('mango');
const gameName = new String('tikam-singh-hc');

// console.log(languageName, typeof languageName);
// console.log(fruitName, typeof fruitName);
// console.log(gameName, typeof gameName);

// console.log(languageName[1]);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('m'));
// console.log(gameName.includes('kam'));
// console.log(gameName.includes('ajay'));

// const subStr = gameName.substring(0, 4);
// console.log(gameName, subStr);

// const sliceStr=gameName.slice(0,4);
// console.log(gameName,sliceStr);
// console.log(gameName.slice(-14,5));

const trimStr = "   Tikam    ";
// console.log(trimStr);
// console.log(trimStr.trim());
// console.log(trimStr.trimStart());
// console.log(trimStr.trimEnd());

const url = 'https://www.tikam.com/tikam%20chaudhary';
// console.log(url.replace('%20','-'));

// console.log(gameName.split(''));
// console.log(gameName.split('-'));


// console.log(languageName.indexOf('a'));
// console.log(languageName.lastIndexOf('a',3));

const studentName = new String('vishal');
const studentNameStr = studentName.valueOf();
const studentNameStr1= studentName.toString();

// console.log(studentName, typeof studentName);
// console.log(studentNameStr, typeof studentNameStr);
// console.log(studentNameStr1, typeof studentNameStr1);

/****************** Note:- serch(),match(),matchAll() **************/