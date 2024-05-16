"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
// pratice 1
console.log(`___________________________`)
let mem1 = academyMembers.find((cat) => {
    if (cat.memID === 187) {
        return true
    }
    return false


})
console.log(`${mem1.name} has ID of 187`)

// pratice 2
console.log(`___________________________`)

let films3 = academyMembers.filter((dog) => {

    if (dog.films.length >= 3) {
        return true
    }
    return false
})

films3.forEach(tomato => {
    console.log(tomato.name)

});


// pratcie 3
console.log(`___________________________`)

let nameBob = academyMembers.filter((mice) => {

    if (mice.name.indexOf("Bob") !== -1) {
        return true
    }
    return false
})

console.log(nameBob)

// practice 4
console.log(`___________________________`)



let startA = academyMembers.filter((cheese) => {

    for (let i = 0; i < cheese.films.length; i++) {

        if (cheese.films[i].indexOf("A") === 0) {

            return true
        }
        return false;
    }

})

console.log(startA)



