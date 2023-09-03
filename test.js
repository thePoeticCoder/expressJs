// function help (...argu){
//         console.log(this.arg,argu);
// }
// help.apply({arg:1},[2,3,4,5,6]);

function one (){
  var mult = 2;
  return function (val){
    mult = mult *val;
    return mult ;
  }
}

var two = one();
console.log(two(3));
console.log(two(4));

