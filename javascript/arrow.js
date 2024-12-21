/*const displayInfo=()=>//Arrow function definition
{
    console.log("displayInfo function")
}

displayInfo();//function calling
function rest(a,b)
{
    var sum=a+b;
    return sum;
}
console.log(rest(10,20));*/
function rest(...args)
{
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
    }
    console.log("Result is="+result)
}
rest(10,20,30,40,50);