"use strict"

let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

// practice 1 
let under4 = cart.filter((product) => {

    if (product.price < 4) {
        return true;
    }
    return false;

    // simplier way to return it 
    //  return product.price < 4

})
console.log(under4)

// practice 2

let candy1 = cart.filter((product) => {

    if (product.product.indexOf("M&Ms") !== -1) {
        return true
    }



})
console.log(candy1)

// practice 3 

let sweedish = cart.find((product) => {

    if (product.product === "Sweedish Fish") {
        return true
    }
    return false

})

console.log(sweedish)
