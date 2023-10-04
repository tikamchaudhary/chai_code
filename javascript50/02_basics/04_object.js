const user = new Object();
// console.log('user:', user);

const employee = {};
employee.id = '123abc';
employee.name = 'Tiakm Singh';
employee.age = 30;
employee.isWorking = true;

// console.log('employee:',employee);

const person = {
    email: 'some@gmail.com',
    address: {
        permanent_address: { city: 'Noida' },
        office_address: { city: 'Delhi' }
    }
}

// console.log(person.address.office_address.city);
// console.log(person?.address?.office_address?.state);
// console.log(person.myAddress?.office_address.state);

const students = [
    { name: 'tikam' },
    { name: 'rahul' },
    { name: 'vishal' }
]

// console.log(students[1]['name']);
// console.log(students[2].name);


// merge objects

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd', 5: 'e' };
const obj3 = { 6: 'f' };

const combined_object1 = { obj1, obj2, obj3 };
const combined_object2 = { ...obj1, ...obj2, ...obj3 };
const combined_object3 = Object.assign({}, obj1, obj2, obj3);

// console.log('combined object1:', combined_object1);
// console.log('combined object2:', combined_object2);
// console.log('combined object3:', combined_object3);


const fruit = {
    name: 'banana',
    price: '40 rs/kg',
    test: 'sweet',
    color: 'yellow',
    otUse: 'teke with milk'
}

// console.log(Object.keys(fruit));
// console.log(Object.values(fruit));
// console.log(Object.entries(fruit));
// console.log(fruit.hasOwnProperty('color'));

/*************  object destructuring *******************/

const userDetails = {
    name: 'Tikam Singh',
    email: 'tikam@google.com',
    password: '#123abc',
    isLoggedIn: true
}

// const name = userDetails.name;
// const email = userDetails.email;
// const password = userDetails.password;

const {
    userId = '0294518',
    name: fullName,
    email: loginEmail,
    password: loginPassword = 123456789,
    isLoggedIn
} = userDetails;


// console.log(userId);
// console.log(fullName);
// console.log(loginEmail);
// console.log(loginPassword);
// console.log(isLoggedIn);

const { name, email, ...rest } = userDetails;
console.log(name, "\n", email, "\n", rest);


/************* JSON  ***********/
// {
//     "id":"001234"
//     "name":"tikam",
//     "age":30,
// }

[
    {},
    {},
    {}
]