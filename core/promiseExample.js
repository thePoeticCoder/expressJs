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
function help(a,b){

  const promise1 = new Promise ((resolve,reject)=>{

    if (a+b>=5){
      resolve("its resolved");
    }else {
      reject(new Error("its reject"));
    }

  })
}
console.log(help(7,1));