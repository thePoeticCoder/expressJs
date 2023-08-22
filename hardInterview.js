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
