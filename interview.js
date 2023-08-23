//array of numbers second largest in array 
//console.log(a); o/p=undefined
//var a=2;
//console.log(a); // 2
// console.log(a); // cannot acces a before initialization 
 //let a=2;
//console.log(a);  // 2
//console.log(a); // cannot acces a before initialization 
//const a=2;
//console.log(a);  // 2
//a=5;
//console.log(a); // type error 
//console.log(undefined+5); op=nan
// console.log(5+undefined);  op=nan
//console.log(null+5); o/p=5;
//console.log(5+null) o/p=5;
//console.log('a'+'b'+'c'); o/p=abc
//console.log('a'+'b'+ +'c'+'d'); o/p =abNaNd

/*var obj= {
    a:1,
    b:2,
    c:3

}*/
//console.log(obj); o/p = { a: 1, b: 2, c: 3 }

//console.log(obj && obj.a); o/p =1

//console.log(obj || obj.a); o/p={ a: 1, b: 2, c: 3 }

/*const arr=[5,1,2,3,6];
function doublearr(x){
    return x*2;
}
const doblear=arr.map(doublearr);
//console.log(doblear);
const oddarr=arr.filter((x)=> x%2==0);
//console.log(oddarr);

const sum =arr.reduce(function(acc,curr)
{
    acc=acc+curr;
    return acc;

},0)
//console.log(sum);*/

/*const users= [
    { f:'a',l:'b',a:23},
    { f:'b',l:'c',a:29},
    { f:'j',l:'h',a:2},
    { f:'q',l:'m',a:29},
    { f:'z',l:'c',a:28},
    { f:'s',l:'f',a:23}
];*/

//const fullname=users.map((user)=>user.f+" "+user.l);
//console.log(fullname);
// count of people of same age
/*const report=users.reduce((acc,curr)=>{
    if(acc[curr.a]){
        acc[curr.a]= ++ acc[curr.a];
    }else {
        acc[curr.a]=1;
    }
},{});
console.log(report);*/

////check prime 
//var n =5;

var ans=greatestCommonDivisor(13,39);
console.log(ans);
function greatestCommonDivisor(a, b){
    var divisor = 2, 
        greatestDivisor = 1;
  
    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
       return 1;
    
    while(a >= divisor && b >= divisor){
     if(a %divisor == 0 && b% divisor ==0){
        greatestDivisor = divisor;      
      }
     divisor++;
    }
    return greatestDivisor;
  }
  // remove duplicates 
  rd();
  function rd(){
var arr=[1,2,3,4,5,6,78,4,3,5,7,3,2,5,6,7,4,4,3,3,5,6,7,7,77,8,8,666,6,7,7,5,5];
var ex={};
var result=[];

for (let i =0; i<arr.length; i++)
   {
    var curr=arr[i];
    if(!ex[curr]){
        result.push(curr);
        ex[curr]=true;
    }
  }
  console.log(result);
  }

/*charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	Returns two or more joined strings
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
valueOf()*/
//merge two sorted arra
/*merge();
function merge(){
    var a1=[1,3,5,7,9];
    var a2=[2,4,6,8]
}
//console.log('helo');
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined')); //a defined? false
  console.log("b defined? " + (typeof b !== 'undefined'));//b defined? true
  //a defined? false
//b defined? true

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);  //"outer func:  this.foo = " bar
        console.log("outer func:  self.foo = " + self.foo);//outer func:  self.foo = bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo);//inner func:  this.foo = undefined
            console.log("inner func:  self.foo = " + self.foo);//inner func:  self.foo = bar
        }());
    }
};
myObject.func();
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
    hel:"hello"
  };
}
console.log(foo1());//{ bar: 'hello' }
console.log(foo2());//undefined here a semicolon will inserted after return word  
console.log(0.1 + 0.2);// 0.3
console.log(0.1 + 0.2 == 0.3); //false

var arr1 = "john".split('');

var arr2 = arr1.reverse();

var arr3 = "jones".split('');

arr2.push(arr3);
console.log(arr1);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
[ 'n', 'h', 'o', 'j', [ 'j', 'o', 'n', 'e', 's' ] ]
array 1: length=5 last=j,o,n,e,s
array 2: length=5 last=j,o,n,e,s 


console.log("0 || 1 = "+(0 || 1)); //1
console.log("1 || 2 = "+(1 || 2));//1
console.log("0 && 1 = "+(0 && 1));//0
console.log("1 && 2 = "+(1 && 2));//2
console.log(false == '0') //true
console.log(false === '0') //false
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);//456 a["[object,object]"]
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1); //1
a=10;
console.log(a);
let a;*/


/*
  const arr = [1,2,3,4,5,6,7,7,8,6,10];
const findDupes = (arr) => {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }
  
  return false;
}
console.log(findDupes(arr)); // Returns 7 


/*const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


 function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);




console.log("welcome");
