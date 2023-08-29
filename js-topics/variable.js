console.log("hello js"); // to print the 
let a ; // decalarev a  variable
a=10; //defined not a specific type mof variable  
a="Hello I am a String"; // String
a ='Hello  i am  also a String'; // also A string
console.log(a);
//#######################################################################
//let 
console.log("hello");
console.log("line 2",varname);
let varname ;
console.log("line 4",varname);
varname=10;
varname=20;
console.log("line 7 ", varname);
// Cannot access 'varname' before initialization
//cant reassign 
// cant re declare
/*##########################################################*/

let fruits ="apple";
console.log(fruits);
{
    console.log(fruits); // this line is tempral deadzone bcz 
    let fruits ;//fruits is defines outside yhe block or below the line 
   
    fruits="orange";
    console.log(fruits);

}
console.log(fruits);

