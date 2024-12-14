type Callback = (message:string)=>void;

function sample(name:string,callback:Callback)
{
    const message = `Hello ${name}`;
    callback(message);
}

function printmsg(msg:string)
{
    console.log(msg);
}

sample("Alice",printmsg);
