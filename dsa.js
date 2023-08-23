isprime(7);
function isprime(n){
    var count=0;
    if(n==1 || n==2){
        console.log("prime")
        return;
    }
    for(let i=2; i*i<n; i++)
    {
        if(n%i==0){
            count++;
            break;
        }
    }
    if(count>0){
        console.log("not prime");
    }else{
        console.log("prime")
    }
}
//##############################################################################################
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

//################################################################################
const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];
const returnMultipleDupesArray = (arr) => {
  let observed = {};
  let dupesArray = [];
  
  for(let i = 0; i < arr.length; i++) {
 
    if(observed[arr[i]]) {
      if(observed[arr[i]] === 1) {
        dupesArray.push(arr[i]);
      }
      
      observed[arr[i]] = observed[arr[i]] + 1;
    } else {
      observed[arr[i]] = 1;
    }
  }
  
  return dupesArray;
}
console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]*/
//#################################################################
  const arr1 = [1,2,3,4,5,6,7,7,8,6,10];
const findDupes = (arr1) => {
  const observed = {};
  for(let i = 0; i < arr1.length; i++) {
    if(observed[arr[i]]) {
      return arr1[i]
    } else {
      observed[arr1[i]] = arr1[i];
    }
  }
  
  return false;
}
console.log(findDupes(arr)); // Returns 7 
//####################################################################################