// let a="hello";
// let b = [1,2,3,4];
//console.log(a) //hello
//console.log(...a);//h e l l o
//console.log(2*a); Nan
//console.log('2'+ +'4'); 24
//console.log(2*b); //  Nan
//console.log(b.indexOf(2),b.length,); //1 3
//console.log(c); //undefined
// var c =1;
//console.log(c); //1

// console.log(d); //ReferenceError: Cannot access 'd' before initialization
// let d=2;

// console.log(e); //ReferenceError: Cannot access 'e' before initialization
// const e =3;

//console.log(undefined+5); //Nan

//console.log(5+undefined); //Nan
//console.log(undefined+Nan); //ReferenceError: Nan is not defined

//console.log(null+5) || console.log(5+null) //5

//console.log('a'+'b' + + 'c'+'d'); //abNanD

// var obj  = {
// 	a:1,
// 	b:2,
// 	c:3
// }

//console.log(obj && obj.a); //1
//console.log(obj || obj.a); //{ a: 1, b: 2, c: 3 
    // var g = h= 3;
//console.log('5' * 2); // 10


//console.log("g defined? " + (typeof g));
//console.log("h defined? " + (typeof h ));//true g defined? number h defined? number

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//     hel:"hello"
//   };
// }


// console.log(foo1());//{ bar: 'hello' }
// console.log(foo2());//undefined here a semicolon will inserted after return word 


// console.log(0.1 + 0.2);// 0.3
// console.log(0.1 + 0.2 == 0.3); //false
//console.log("0 || 1 = "+(0 || 1)); //0 || 1 = 1
 //console.log("1 || 2 = "+(1 || 2));//1 || 2 = 1
// console.log("0 && 1 = "+(0 && 1));//0
// console.log("1 && 2 = "+(1 && 2));//2
// console.log(false == '0') //true
// console.log(false === '0') //false
console.log(++[[]][+[]] + [+[]])//10
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

 console.log(a[b]);//456 a["[object,object]"]







