type PersonInfo = [string,number,boolean];

const Person1 : PersonInfo = ["Rohit",22,true];

console.log(Person1[0]);

const displayinfo = (person:PersonInfo) :void=>{
    const [name,age,hasDriverLic] = person;
    console.log(name,age,hasDriverLic);
} 
displayinfo(Person1)

// Readonly Tuple
type p1 = readonly [number];

const p2 : p1 = [1];
// p2[0] = 10; error : readonly tuple
console.log(p2[0]);
Person1[0] = "Ram"
console.log(Person1);


