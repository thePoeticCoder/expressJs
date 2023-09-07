// //create a task that mimcs async operation
// function simulateAsyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         resolve(`Task completed : ${randomNumber}`);
//       } else {
//         reject(`Task failed : ${randomNumber}`);
//       }
//     }, 2000); // Simulate a 2-second delay
//   });
// }

// console.log('Starting the asynchronous task...');
// simulateAsyncTask()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// console.log('Async task initiated, but not completed yet.');

function mimicAsyncTask(){
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			const randomNumber = Math.random();

			if(randomNumber>1){
				resolve(`task completed value :${randomNumber}`)

			}else{
					reject(`task incomplete value :${randomNumber}`);
			}

		},2000)

	})
}

console.log("starting async task");

mimicAsyncTask()
.then((result)=>{
	console.log(result);
})
.catch((error)=>{
	console.log(error);
});