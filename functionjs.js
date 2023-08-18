// types of functions 
//1 definition 
function sayhello(parameter) // no need to decalere the data type of parameter 
{
    console.log("hello");
}
sayhello(); // for this if we are not 
//passing the parameter  undefined will be the passing parameter
let rval =sayhello();
console.log("rval ,rval"); // o/p ==rval undefined 
// finction are treated as variable 
//  function  are first class citizen



// functiomn expression 
let funContainer =function fn(){
    console.log("I am Expression");
}
funContainer();


// if you are not giving the name than function will be anonymopus function 
let anpnymousFn  =function ();
anpnymousFn();


// IIFE --> Immediately Invoked function
//they will already called after they defined 
(function fn(){
    console.log("I am already called ");
})();
///


//Arrow Function --> Syntax ,react , this 
let fn =(num) => {
    return num*num;
}
console.log(fn(5));


//callback

// First class citizens 
//1. assignment -> fn expression 
// 2. variable can be passed as a parameter 
function sayHello(param)
{
    console.log("hello",param);
    param();
    return "sttsrfbj";
}
function smaller ()
{
    console.log("hello i am smaller ");
}
let rval = sayHello(smaller)
console.log(rval);

function outer ()
{
    console.log("I am Inner ");
    return function (){

    }
}
let rval =outer();
console.log("rval",rval);
rval();

functoin fn(){
    console.log ("hello from functoin ");
}
fn.prop ="property from function ";
fn.myfn =function fn(){
    console.log("i am method of function fn");
}
// call can be 
fn();
fn.myfn();