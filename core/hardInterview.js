// for (var i =0 ; i<6; i++){
// 	setTimeout(()=>{
// console.log(i);
// 	},1000);
// }

// console.log("loop done");

//o/p loop done 6 6 6 6 6 6 

/******************************************************/
//we can fixed this with scope also 

// for ( var i =1; i<6; i++){
// 	function time(){
// 		var k =i;
// 		setTimeout(()=>{
// 			console.log(k);
// 		},1000)
// 	}
// 	time();
// }
// console.log("loop done 2"); 
//o/p => loop done 2 ..... 1 2 3 4 5

// we can fix this using let also because let is block scope and will make 5 i entries in memory 

// for (let i =0 ; i<6; i++){
// 	setTimeout(()=>{
// 			console.log(i);
// 	},1000)
// }
// console.log("loop done 3");

//o/p =>  loop done3 1 2 3 4 5

//still we need to fixed this loop done text;

function loopDone(){
	console.log("loop done 4");
}

for (let i =1; i<6; i++){
	setTimeout(()=>{

		console.log(i);
			if(i===5){
		loopDone();
	}
	},1000);

}

/*setTimeout(() => {
    console.log('timeout');
  }, 0);
  
  setImmediate(() => {
    console.log('immediate');
  });

  //output is timeout immidiete

  setImmediate(() => {
    console.log('immediate');
  }); 
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  //output is dimmidiete timeout*/


//#########################################################################
//below code will output 0 as output. delete operator is used to delete a property from an object. 
//Here x is not an object it’s local variable. delete operator doesn’t affect local variable.
var output = (function (x){
	delete x;
	return x;

})(0);
console.log(output);
//delete word also dont delete from prototype 
//ex:
var Emp = {
	company :"xyz"
}
var emp1 = Object.create(Emp);
delete emp1.company;
console.log(emp1.company);
//o/p ==> xyz
//###########################################################################3

// console.log('A');
// setTimeout(() => {
//   console.log('B');
// }, 0);

// setImmediate(() => {
//   console.log('C');
// });

// process.nextTick(() => {
//   console.log('D');
// });

// console.log('E');

// // // A
// // // E
// // // C
// // // D
// // // B

// console.log('A');
// setInterval(() => {
//   console.log('B');
// }, 1000);

// setTimeout(() => {
//   console.log('C');
// }, 5000);








