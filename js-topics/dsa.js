// isprime(7);
// function isprime(n){
//     var count=0;
//     if(n==1 || n==2){
//         console.log("prime")
//         return;
//     }
//     for(let i=2; i*i<n; i++)
//     {
//         if(n%i==0){
//             count++;
//             break;
//         }
//     }
//     if(count>0){
//         console.log("not prime");
//     }else{
//         console.log("prime")
//     }
// }
// //##############################################################################################
// var firstWord = "Mary";
// var secondWord = "Army";

// isAnagram(firstWord, secondWord); // true

// function isAnagram(first, second) {
//   // For case insensitivity, change both words to lowercase.
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();

//   // Sort the strings, and join the resulting array to a string. Compare the results
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");

//   return a === b;
// }

// //################################################################################
// const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];
// const returnMultipleDupesArray = (arr) => {
//   let observed = {};
//   let dupesArray = [];
  
//   for(let i = 0; i < arr.length; i++) {
 
//     if(observed[arr[i]]) {
//       if(observed[arr[i]] === 1) {
//         dupesArray.push(arr[i]);
//       }
      
//       observed[arr[i]] = observed[arr[i]] + 1;
//     } else {
//       observed[arr[i]] = 1;
//     }
//   }
  
//   return dupesArray;
// }
// console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]*/
// //#################################################################
//   const arr1 = [1,2,3,4,5,6,7,7,8,6,10];
// const findDupes = (arr1) => {
//   const observed = {};
//   for(let i = 0; i < arr1.length; i++) {
//     if(observed[arr[i]]) {
//       return arr1[i]
//     } else {
//       observed[arr1[i]] = arr1[i];
//     }
//   }
  
//   return false;
// }
// console.log(findDupes(arr)); // Returns 7 
// //####################################################################################
// var ans=greatestCommonDivisor(13,39);
// console.log(ans);
// function greatestCommonDivisor(a, b){
//     var divisor = 2, 
//         greatestDivisor = 1;
  
//     //if u pass a -ve number this will not work. fix it dude!!
//     if (a < 2 || b < 2)
//        return 1;
    
//     while(a >= divisor && b >= divisor){
//      if(a %divisor == 0 && b% divisor ==0){
//         greatestDivisor = divisor;      
//       }
//      divisor++;
//     }
//     return greatestDivisor;
//   }

//   //########################################################################################
// rd();
// function rd(){
// var arr=[1,2,3,4,5,6,78,4,3,5,7,3,2,5,6,7,4,4,3,3,5,6,7,7,77,8,8,666,6,7,7,5,5];
// var ex={};
// var result=[];

// for (let i =0; i<arr.length; i++)
//    {
//     var curr=arr[i];
//     if(!ex[curr]){
//         result.push(curr);
//         ex[curr]=true;
//     }
//   }
//   console.log(result);
//   }
//   //#######################################################################################
  

  const arr = [1,2,3,4,5,1,2,3,2,3,4,2,2,3,4,5,2];
//0 odd
//1 even
  //result {
  //   1:0 
  // }

  function help(arr){
      var count = {};
      arr.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
      return count ;

 
   
  };

  console.log(help(arr));