// non primitive  -> array, object ,functiuon
function sayHi (param) {         // dont need to speicfy thw data type of param 
    console.log("Hello from sayHi");
    console.log("param received ", param);
}
sayHi(10);   // calling an funcxtion with different input 

sayHi("hello");   // calling an funcxtion with different input 


function learnreturn (inputDo) {
    return "returned from learnreturn ";
}
let ret = learnreturn([1,2,3,4,5,6]);
console.log("return value is ", ret);  // you can use ternarny operator and can retrun different types value 
 // if(ret > 56 ? true : "return string ");