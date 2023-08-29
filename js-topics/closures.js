
//closures are defined as inner functions that have access to
// variables and parameters of outer function even after the outer function has returned. 
//The below examples show the practical use of closures:
// Define the closure
function multFn() {
  var mult = 9;
  return function(val) {
    mult = mult * val;
    return mult;
  }
}
  
// Use the closure
var mult = multFn();
console.log(mult(18));

//out put 162 we can use private variables and methods using closures

//333333333333333333333333333333333


(function() {
  
  var multFn = function multiply() {
    // This variable is local to
    // the closure and holds
    // its value inbetween
    // multiple calls
   var mult = 9;
   return function(val) {
     mult = mult * val;
     return mult;
   }
  };
  
  var mult = multFn();
    
  // Call the method
  // multiple times
  console.log(mult(2));
  console.log(mult(3));
  console.log(mult(5));
}());

// output 18
// 54
// 270

function one (){
  var mult = 2;
  return function two (val){
    mult= mult*val;
    return mult;
  }
}

var three = one();
three(3);
console.log(three(4));