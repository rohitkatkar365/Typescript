type Person1 ={
    name: string;
    age: number;
}

type Employee ={
    employeeId: number;
}

let employee: Person1 & Employee = { 
    name: "Alice", 
    age: 30, 
    employeeId: 1234 
};  // Must have both Person and Employee properties


console.log(employee);
