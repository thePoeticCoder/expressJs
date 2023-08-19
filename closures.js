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