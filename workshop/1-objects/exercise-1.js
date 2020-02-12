// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// var myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }
let me = {
    name: {first: 'Shai', last: 'Gilboa'},
    age: 31, city: 'Montreal', siblings: 2,
    petName: 'Nanuk', petType: 'dog',
}
// A) console.log() your object.
// B) console.log() a few of the values in the object.
console.log(me)
console.log(me.name.first)
console.log(me.name.last)
console.log(me.city)



//-------------------------------------------------

// Exercise 1.1
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

me.dateOfBirth = '10.02.89';
me.favActivity = 'relaxing';
me.school = 'concordia bootcamps';
me.student = true;

console.log(me);

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise 1.2
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors
let aGoodMovie = {
    stars: ['Anthony LaPaglia', 'Debi Mazar', 'Maxwell Caulfield'],
    title: 'empire records',
    director: 'Allan Moyle',
    yearReleased: 1995,
    rating: 6.7,
    genre: ['comedy', 'drama', 'music'],
    length: 90
}
// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

// var favoriteMovie = {

// }
console.log(aGoodMovie);


//-------------------------------------------------

// Exercise 1.3
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};

console.log(person.age);    // => 26
console.log(person[key]);     // => "Alyssa P. Hacker"


//-------------------------------------------------

// Exercise 1.4
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
    name: {
        first: "Alyssa",
        middle: "P.",
        last: "Hacker"
    },
    age: 26,
};

function fullName(person) {
    let personFullName = '';
    let names = Object.keys(person.name);
    names.forEach(I => personFullName += person.name[I] + " ")
    return personFullName;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise 1.5
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name?

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
    name: {
        first: "Rick",
        last: "Sanchez"
    },
    age: 66,
};

function betterFullName(person) {
    let personFullName = '';
    let names = Object.keys(person.name);
    names.forEach(I => personFullName += person.name[I] + " ")
    return personFullName;
}

console.log(betterFullName(rick)); // => "Rick Sanchez"