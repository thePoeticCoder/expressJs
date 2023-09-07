// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Expected output: Array [3, 42, "foo"]

console.time();
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 1 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 4 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
  console.timeEnd();
});

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

//Promise.allSettled();
