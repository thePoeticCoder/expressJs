// non primitive  -> array, object ,functiuon
function sayHi (param) {         // dont need to speicfy thw data type of param 
    console.log("Hello from sayHi");
    console.log("param received ", param);
}
sayHi(10);   // calling an funcxtion with different input 

sayHi("hello");   // calling an funcxtion with different input 

function add(x, y) {
    return x + y;
}

console.log(add.length); // 2
console.log(add.prototype); // Object{}


function learnreturn (inputDo) {
    return "returned from learnreturn ";
}
let ret = learnreturn([1,2,3,4,5,6]);
console.log("return value is ", ret);  // you can use ternarny operator and can retrun different types value 
 // if(ret > 56 ? true : "return string ");

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
let raaval = sayHello(smaller)
console.log(rval);

function outer ()
{
    console.log("I am Inner ");
    return function (){

    }
}
let raval =outer();
console.log("rval",rval);
rval();

function fn(){
    console.log ("hello from functoin ");
}
fn.prop ="property from function ";
fn.myfn =function fn(){
    console.log("i am method of function fn");
}
// call can be 
fn();
fn.myfn();