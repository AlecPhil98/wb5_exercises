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

// used a function with only within 
let matchLess50 = courses.filter(function (dog) {
    if (dog.Fee <= 50) {
        return true;
    }
    return false;
})

console.log(matchLess50);

// old way to log with for loop
for(let i = 0 ; i<matchLess50.length; i++){
    console.log(`${matchLess50[i].Title}`)
}

// New way to log with the "=>" function 
matchLess50.forEach((dog)=>{
    console.log(`${dog.Title} is 50 or less`)
})



// practice 4
console.log("_______________Practice 4_____________________________________")
function bat(someValue) {
    if (someValue.Location === "Classroom 1") {
        return true
    }
    else {
        return false
    }

}

let classmeet1 = courses.filter(bat);

console.log(classmeet1)

classmeet1.forEach((someValue)=>{
    console.log(`${someValue.Title} is at location of classroom 1`)
})

