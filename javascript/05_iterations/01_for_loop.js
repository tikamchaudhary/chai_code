/********* for ************/

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        // console.log('5 is the best number.');
    } else {
        // console.log(i);
    }
}

// console.log(i);

/*________________________________________________________________*/

for (let i = 1; i <= 2; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 2; j++) {
        // console.log(`inner loop value: ${j} and outer loop: ${i}`);
    }
}


/*___________________________________________________________________*/

// table print

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i}*${j}= ${i*j}`);
    }
}



const tables = [];

for (let i = 1; i <= 30; i++) {
    const table = [];
    for (let j = 1; j <= 10; j++) {
        table.push(i * j);
    }
    tables.push(table);
}
// console.log(tables);
// console.table(tables);


/*___________________________________________________________________*/

const fruits = ['apple', 'mango', 'banana'];

for (let index = 0; index < fruits.length; index++) {
    // console.log(fruits[index]);
}


/*___________________________________________________________________*/


// break and continue

for(let i=1;i<=10;i++){
    if(i===5){
        // console.log('Detected: 5.');
        break;
    }
    // console.log(`value of i: ${i}`);
}

for(let i=1;i<=10;i++){
    if(i===5){
        console.log('scaped: 5.');
        continue;
    }
    console.log(`value of i: ${i}`);
}
