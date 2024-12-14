interface Person2{
    readonly name :string,
    age : number
}

const p3 : Person2 = {
    name : "Ram",
    age:12
}

interface Person3 {
    name: string;
    age: number;
}

interface Employee1 extends Person3 {
    employeeId: number;
}

const employee1: Employee1 = {
    name: "Alice",
    age: 30,
    employeeId: 12345
};

console.log(employee1);

console.log(p3);
