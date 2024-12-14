"use strict";
// You can also use same as javascript(Typescript is superset of javascript).
// 1 way
let person = {
    name: "Rohit",
    age: 22,
    isStudent: false,
    Company: "Microsoft",
    address: {
        city: "Pune",
        country: "India"
    }
};
console.log(person);
// How to access value
console.log(person["name"]);
console.log(person["address"]["city"]);
// console.log(person.address.city);
// Updation in object
// person.address.city = "Mumbai";
console.log(person);
// 2way
let person1 = {
    name: "Ram",
    age: 22
};
console.log(person1);
