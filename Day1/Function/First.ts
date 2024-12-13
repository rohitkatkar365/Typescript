// Function is block of code that perform specific task

// Normal Function
function greet(a:string)
{
    console.log(a);
}

greet("Hello Ram");

// Function with return type
function greet1(a:string):string{
    return a;
}
console.log(greet1("Hello Krishna"));

// Arrow function
const app = (a:string) :string =>{
    return a;
}

console.log(app("Hello"));

// Optional Parameter
function sample(a?:number)
{
    console.log(a);
}

sample(1);

// Default parameter:
function sample1(a:number=2)
{
    console.log(a);
}
sample1();