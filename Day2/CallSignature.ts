type Addfn = {
    (x:number,y:number):number; //Call Signature
};

const add : Addfn = (x:number,y:number) => x+y;

console.log(add(1,2));

