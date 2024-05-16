"use strict"

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// Practice A 
console.log(`Practice A_______________________________________`)
let arrayCart = cart.map((dog) => {
    return dog.item;
})

console.log(arrayCart)

cart.forEach((butter)=>{
    console.log(butter.item);
})

// Practice B 
console.log(`Practice B _______________________________________`)

let cartPrice = cart.reduce((total, price) => {

    return total += price.price
}, 0)
console.log(cartPrice)





// Practice C
console.log(`Practice C_______________________________________`)
let listArray = (a, b) => {

    const itemA = a.item.toUpperCase();
    const itemB = b.item.toUpperCase();

    if (itemA < itemB) {
        return -1;
    }
    if (itemA > itemB){
        return 1;
    }
    return 0

}

console.log(cart.sort(listArray))



// let someArray = [

//     {name: "eric", kids: ["sam", "pam", "cam"]},
//     {name: "Chanda", kids: ["jim", "kim", "tim"]},

// ]

// someArray.forEach((someValue) => {

//     console.log(`${someValue.name} has these kids:`)

//     someValue.kids.forEach((value) => {
//         console.log(value);
//     })

//     console.log("--------------------")

// })