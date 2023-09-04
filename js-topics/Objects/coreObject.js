// const users= [
//     { f:'a',l:'b',a:23},
//     { f:'b',l:'c',a:29},
//     { f:'j',l:'h',a:2},
//     { f:'q',l:'m',a:29},
//     { f:'z',l:'c',a:28},
//     { f:'s',l:'f',a:23}
// ];

// const fullName=users.map((user)=>user.f+" "+user.l);
// // console.log(fullName);
// /**************************************************** */
// const ssn = Symbol('ssn');
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     [ssn]: '123-345-789'
// };

// const kv = Object.entries(person);

// // console.log(kv);
// /************************************************************************** */
// let amount = -0,volume = +0;
// //console.log(Object.is(amount, volume)); //false

const aob = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]

// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]

console.log(help(aob,'framework'));

function help (aob,fw){
	const res = {};
	
	aob.forEach(element => {

		if(aob.hasOwnProperty(fw)){
		if(res[element[fw]]){
			res[element[fw]]++;
		}else{
			res[element[fw]] =1;
		}
	}
	});

	    let superArrayOfObjects = [];
  
    for (const key in res) {
        superArrayOfObjects = [...superArrayOfObjects, { fw: key, count: res[key]}];
    }

	return superArrayOfObjects;


	

	
}



