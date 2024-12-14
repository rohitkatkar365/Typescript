type Person = {
    name:string;
    age : number;
    isStudent : boolean;
    Company : string;
    address : {
        city : string;
        country : string;
    }
};

let p1 : Person ={
    name : "Ram",
    age : 29,
    isStudent : false,
    Company:"Amazon",
    address :{
        city : "Hyderabad",
        country:"India"
    }
}

let p2 : Person ={
    name : "Krish",
    age : 35,
    isStudent : true,
    Company:"NA",
    address :{
        city : "Hyderabad",
        country:"India"
    },
}

console.log(p1);
console.log(p2);

function F1(person1:Person)
{
    return person1.name;
}
console.log(F1(p2));
