function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if(sum <= 5){
      resolve("Let's go!!")
    } else {
      reject(new Error('Oops!.. Number must be less than 5'))
    }
  })

  return customPromise
}


const data =  getSumNum(1,2);
console.log(data);



const P1 =  Promise.resolve ("first promise");
const P2 = 30;
const P3 = new Promise((resolve,reject) => {
	const a =2;
	if(a>1){
		resolve ("nice hero");
	}else {
		reject ("bfjsadgfdsa");
	}

})

const P4 = new Promise ((resolve , reject)=>{

	setTimeout(resolve,1000,'Success');

})

Promise.all([P1,P2,P3,P4]).then((values) => {
	console.log(values);
})