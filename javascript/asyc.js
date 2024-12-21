async function test(){
    x=await 10+20;
    console.log("Inside of the function")
    return x;
}
let result=test();
console.log("final result is="+result);