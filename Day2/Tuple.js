"use strict";
const Person1 = ["Rohit", 22, true];
console.log(Person1[0]);
const displayinfo = (person) => {
    const [name, age, hasDriverLic] = person;
    console.log(name, age, hasDriverLic);
};
displayinfo(Person1);
const p2 = [1];
// p2[0] = 10; error : readonly tuple
console.log(p2[0]);
Person1[0] = "Ram";
console.log(Person1);
