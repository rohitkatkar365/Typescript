function add<T, U>(a: T, b: U): void {
    console.log(a + b);
}

function add<T>(a:T):void{
    console.log(a);
}
add<number,number>(1, 2); 
add<number>(1);
