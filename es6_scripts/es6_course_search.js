"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


// pratice 1
console.log("___________________Practice 1___________________________________")
function matchPROG200(someValue) {
    if (someValue.CourseId === "PROG200") {
        return true;
    }
    else {
        return false
    }
}



let match = courses.find(matchPROG200);

console.log(match.StartDate)

// practice 2
console.log("_________________________Practice 2___________________________")
function matchPROG500(someValue) {
    if (someValue.Title === "Introduction to Angular") {
        return true
    }
    else {
        return false
    }

}

let matchTitle = courses.find(matchPROG500);

console.log(matchTitle.Title)


// practice 3
console.log("______________Practice 3______________________________________")
let matchLess50 = courses.filter(function (Title) {
    if (Title.Fee >"50") {
        return true;
    }
    return false;
})

console.log(matchLess50);


// let products = [
//     {product: "Gummy Worms", price: 5.79},
//     {product: "Plain M&Ms", price: 2.89},
//     {product: "Peanut M&Ms", price: 2.89},
//     {product: "Swedish Fish", price: 3.79},
//     {product: "Giant Chewy Nerds", price: 6.00},
//     {product: "Snickers Bar", price: 1.89},
//     {product: "Mounds Bar", price: 1.50},
//     {product: "Sour Patch Kids", price: 3.79},
//     {product: "Everlasting Gobstopper", price: .99},
//     {product: "Ring Pop", price: 1.79}
//  ];

//  let filteredProducts = products.filter(function(product){
//     if(product.price < 2){
//         return true;
//     }
//     return false;
//  })

//  console.log(filteredProducts);


// practice 4
console.log("_______________Practice 4_____________________________________")
function bat(someValue) {
    if (someValue.Location ==="Classroom 1") {
        return true
    }
    else {
        return false
    }

}

let classmeet1 = courses.filter(bat);

console.log(classmeet1)

