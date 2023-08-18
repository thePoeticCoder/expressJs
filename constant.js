const arr =[1,2,3,4,56,];
arr.push(10);
console.log(arr);
arr=4; // error will be occured
arr.shift();
console.log(arr);
arr[95] =100;
console.log(arr); // output will be 1,2 ,3,4,5, <undeifned till 94> ,100
//6 primitive type -->  number , string,bolean ,under=fined , null,symbol