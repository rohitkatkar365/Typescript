
let s1 : number | string;

s1 = 1;
s1 = "String";

console.log(s1);

type a1 = {
    name : string;
}
type a2 = {
    age : number;
}
let a3 : a1 | a2;

a3 = {name:"Ram"};
a3 = {age:22};
// a3 = {name:"Rockey",age:22}; error
console.log(a3);

