console.log("line number 1",varName);
var varName =10;
function b() {
    console.log("line number 8", varName);
} // here varname will be printed ==10
//that is knownn A LEXICAL SCOPING


console.log("line number 3",varName);
function fn (){
    console.log("line number 5" ,varName);
var varName =20;

b();
console.log(varName);
}
fn();
