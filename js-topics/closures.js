
//closures are defined as inner functions that have access to
// variables and parameters of outer function even after the outer function has returned. 
//The below examples show the practical use of closures:
// Define the closure
  
// Use the closure

function sunFn(initialValue){
  var sum = initialValue;
  return function (val){
    sum = sum +val;
    return sum;
  }
}
const addition = sumFn(0);
console.log(addition(2)(3)(4));
    

function createSum(initialValue) {
  let sum = initialValue;

  return function add(value) {
    sum += value;
    return add;
  };
}
const sum = createSum(0);

sum(5)(10)(15); // Add values incrementally
const total = sum(20); // Calculate the total sum
console.log(total); // Output: 50


function one (val) {

  let res = 2;
  return function two(){

    res = res*val;
     return res;

  }

}

const three = one(2);
console.log(three());
console.log(three(2));
console.log(three(2));