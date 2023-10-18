// Object.create() => singleton

// object literals
const student = {};

student.name = "Akash Chaudhary";
student["roll no."] = '0294518';
student["email"] = 'akash@gmil.com';
student.score = 450;
// console.log('student:', student);

/*_________________________________________________________________________________*/
const key = 'mobile no.';

const userId = Symbol('userId');
const userId2 = Symbol('userId');
// console.log('typeof userId:,', typeof userId);
// console.log(userId === userId2);

const user = {
    [userId]: '0294518',
    userName: 'tikam_singh',
    password: '@123singh',
    "email id": 'tikam@google.com',
    [key]: 8077662051,
    age: 30,
    isLoggedIn: true,
    lastLoginingDays: ['sun', 'mon', 'tue', 'wed'],
    address: {
        city: 'Noida',
        state: 'UP'
    }
}

// console.log('user:',user);
// console.log(user[userId]);
// console.log(user.userName);
// console.log(user.password);
// console.log(user["password"]);
// console.log(user["email id"]);
// console.log(user["mobile no."]);
// console.log(user[key]);
// console.log(user.lastLoginingDays[0]);
// console.log(user.address.city);

/*____________________________________________________________________________________*/

user.greeting = function () {
    console.log('Hello user');
}
user.greetingTwo = function () {
    console.log(`Welcome ${this.userName}!`);
}

console.log(user.greeting());
console.log(user.greetingTwo());


/*____________________________________________________________________________________*/
// console.log('user:', user,'\n\n');
user.userName = 'tikam_chaudhary';
// console.log('user:', user,'\n\n');

Object.freeze(user);

user.userName = 'tikam_chaudhary123';
// console.log('user:', user);

