const users= [
    { f:'a',l:'b',a:23},
    { f:'b',l:'c',a:29},
    { f:'j',l:'h',a:2},
    { f:'q',l:'m',a:29},
    { f:'z',l:'c',a:28},
    { f:'s',l:'f',a:23}
];

const fullName=users.map((user)=>user.f+" "+user.l);
/********************************************* */


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);
console.log(kv)

/*********************************************** */

let amount = +0,
   volume = -0;
console.log(Object.is(amount, volume)); //false
objectName ?. propertyName
objectName ?. [expression] //optional chaining property
//console.log(fullName);//[ 'a b', 'b c', 'j h', 'q m', 'z c', 's f' ]

//for objects 
//Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)

//Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

// Javascript has two types of values: primitive values and reference values.
// You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
// Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
// Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.

// program to create a two dimensional array

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
			const max = 100;
			const min =1;
   			let rand = Math.random();
			rand = Math.floor( rand * max-min) +min;
            arr[i][j] = rand;
        }
    }
    return arr;
}

const x = 2;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result);


const awards = [ 
{ 
name: 'James Peebles', 
category: 'Physics', 
research: 'Theoretical discoveries in physical cosmology', 
year: 2019, 
}, 
{ 
name: 'Michel Mayor', 
category: 'Physics', 
research: 'Discovery of an exoplanet orbiting a solar-type star', 
year: 2019, 
}, 
{ 
name: 'Didier Queloz', 
category: 'Physics', 
research: 'Discovery of an exoplanet orbiting a solar-type star', 
year: 2019, 
}, 
{
name: 'John B. Goodenough', 
category: 'Chemistry', 
research: 'Development of lithium-ion batteries', 
year: 2019, 
}, 
{ 
name: 'M. Stanley Whittingham', 
category: 'Chemistry', 
research: 'Development of lithium-ion batteries', 
year: 2019, 
}, 
{ 
name: 'Akira Yoshino', 
category: 'Chemistry', 
research: 'Development of lithium-ion batteries', 
year: 2019, 
}, 
{ 
name: 'Arthur Ashkin', 
category: 'Physics', 
research: 'Optical tweezers and their application to biological systems', year: 2018, 
}, 
{ 
name: 'Gerard Mourou', 
category: 'Physics', 
research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, 
}, 
{ 
name: 'Donna Strickland', 
category: 'Physics', 
research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, }, 
{ 
name: 'Frances H. Arnold', 
category: 'Chemistry', 
research: 'Directed evolution of enzymes', 
year: 2018, 
}, 
{ 
name: 'George P. Smith', 
category: 'Chemistry', 
research: 'Phage display of peptides and antibodies.', 
year: 2018, 
}, 
{ 
name: 'Sir Gregory P. Winter', 
category: 'Chemistry', 
research: 'Phage display of peptides and antibodies.', 
year: 2018, 
}, 
];

function transformAwards(awards) {
  const groupedAwards = {};

  awards.forEach(award => {
    const { year, category, ...rest } = award;

    if (!groupedAwards[year]) {
      groupedAwards[year] = {};
    }

    if (!groupedAwards[year][category]) {
      groupedAwards[year][category] = [];
    }

    groupedAwards[year][category].push(rest);
  });

  const prizes = [];

  for (const year in groupedAwards) {
    for (const category in groupedAwards[year]) {
      const winners = calculateShares(groupedAwards[year][category]);
      prizes.push({ category, year: parseInt(year), winners });
    }
  }

  return prizes;
}


function calculateShares(winners) {
  const totalWinners = winners.length;
  const share = 1 / totalWinners;

  return winners.map(winner => ({ ...winner, share }));
}

const output = transformAwards(awards);
console.log(JSON.stringify(output, null, 2));


// // const shareholder = [ 
// // {stock: 'AAPL',name:['Steve','Bill','Tim'],count:3}, 
// // {stock:'MSFT',name:['Steve','Bill'],count:2},
// // {stock: 'FB',name:['Mark'],count:1}, 
// // ]; 
// const portfolio =[ 
// {name: 'Mark',stock: 'FB'}, 
// {name: 'Steve',stock: 'AAPL'}, 
// {name: 'Tim',stock: 'AAPL'}, 
// {name: 'Steve',stock: 'MSFT'}, 
// {name: 'Bill',stock: 'MSFT'}, 
// {name: 'Bill',stock: 'AAPL'}, 
// ]; 



// function transformPortfolio(portfolio) {
//   const shareholderMap = {};

//   portfolio.forEach(entry => {
//     const { name, stock } = entry;

//     if (!shareholderMap[stock]) {
//       shareholderMap[stock] = { stock, name: [], count: 0 };
//     }

//     if (!shareholderMap[stock].name.includes(name)) {
//       shareholderMap[stock].name.push(name);
//       shareholderMap[stock].count++;
//     }
//   });

//   const shareholder = Object.values(shareholderMap);
//   return shareholder;
// }

// const output = transformPortfolio(portfolio);
// console.log(JSON.stringify(output, null, 2));

// const a = [1, 3, 5, 7, 8]; 
// const b = [9, 3, 2]; 
// Expected result: [1, 2, 3, 3, 5, 7, 8, 9] 

// const merge = (a, b) => { 
// // Write code here. 

// 		let i=0;
// 		let j=b.length-1;
// 		const res =[];

// 		while(i<a.length && j>=0){
// 			if(a[i]<= b[j]){
// 				//a have smaller entery 
// 				res.push(a[i]);
// 				i++;
				
// 			}else {
// 					res.push(b[j]);
// 					j--;
// 			}


// 		}

// 		while(i < a.length){
// 			res.push(a[i]);
// 			i++;
// 		}
// 		while(j >= 0){
// 			res.push(b[j]);
// 			j--;
// 		}
// 		return res;
		
// }; 
// console.log(merge(a,b));


const a = [1, 3, 6, 4, 7, 8, 7];

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sortedArray = bubbleSort(a);
console.log(sortedArray);

const inputArray = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];

function flattenArray(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursively flatten nested arrays
    } else {
      result.push(item);
    }
  });

  return result;
}

const outputArray = flattenArray(inputArray);
console.log(outputArray);


//super array of objects
// Example data
const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]
const superAob = (data, victim) => {

    const obj = {};
  
    data.forEach((data) => {
        if(data.hasOwnProperty(victim)){
            if(obj[data[victim]]){
                obj[data[victim]]++;
            }
            else{
                obj[data[victim]] = 1;
            }
        }
    })
  
    let superArrayOfObjects = [];
  
    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }
  
    return superArrayOfObjects;
}

console.log(superAob(aob, 'framework'));

// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]








