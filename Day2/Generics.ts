function greet<T>(arg:T):T{
    return arg;
}

console.log(greet<number>(1));
console.log(greet<string>("Hello"));