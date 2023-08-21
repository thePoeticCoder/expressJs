let array =[1,2,3,4,5,6];
console.log(array);
// define array  let arr =[];
console.log(array.length);
let i =0;
while(i<array.length)
{
    console.log("ele", array[i]);
    i++;
}
const arr =[1,2,3,4,56,];
arr.push(10);
console.log(arr);
arr=4; // error will be occured
arr.shift();
console.log(arr);
arr[95] =100;
console.log(arr); // output will be 1,2 ,3,4,5, <undeifned till 94> ,100
//6 primitive type -->  number , string,bolean ,under=fined , null,symbol
array.push("last value");
array.unshift("first value");
console.log(array);
array.shift();
array.pop();
let partOfArray = array.slice(2,4) ;   //gives the elements from 2 to 3
array.splice(2,1) // 2 is starting indes %%% 1 is the count of number to be deleted
array.indexOf();
array.contain();

