// reduce()

const nums = [1, 2, 3, 4, 5,]
let initialValue = 0;

const total = nums.reduce(function (accumulator, currentValue, currentIndex, arr) {
    // console.log(
    //     `accumulator: ${accumulator}
    //     currentValue: ${currentValue}
    //     currentIndex: ${currentIndex}
    //     base_array: ${arr}`
    // );
    return (accumulator + currentValue);
}, initialValue)

// console.log('initialValue:', initialValue);
// console.log('total:', total);

const total2 = nums.reduce((acc, currentValue) => acc + currentValue, 0)
// console.log('total2:', total2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log('priceToPay:', priceToPay);