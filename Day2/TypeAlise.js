"use strict";
let p1 = {
    name: "Ram",
    age: 29,
    isStudent: false,
    Company: "Amazon",
    address: {
        city: "Hyderabad",
        country: "India"
    }
};
let p2 = {
    name: "Krish",
    age: 35,
    isStudent: true,
    Company: "NA",
    address: {
        city: "Hyderabad",
        country: "India"
    },
};
console.log(p1);
console.log(p2);
function F1(person1) {
    return person1.name;
}
console.log(F1(p2));
