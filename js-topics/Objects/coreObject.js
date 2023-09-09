// const users= [
//     { f:'a',l:'b',a:23},
//     { f:'b',l:'c',a:29},
//     { f:'j',l:'h',a:2},
//     { f:'q',l:'m',a:29},
//     { f:'z',l:'c',a:28},
//     { f:'s',l:'f',a:23}
// ];

// const fullName=users.map((user)=>user.f+" "+user.l);
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

const students = [
  {
    name: 'Student A',
    marks: [{ sub1: 75 }, { sub2: 59 }, { sub3: 84 }]
  },
  {
    name: 'Student B',
    marks: [{ sub1: 25 }, { sub2: 19 }, { sub3: 35 }]
  },
  {
    
    name: 'Student C',
    marks: [{ sub1: 56 }, { sub2: 90 }, { sub3: 34 }]
  }
];

function findStudentsWithSumGreaterThan150(students) {
  const result = [];
  
  for (const student of students) {
    const totalMarks = student.marks.reduce((sum, markObj) => {
      // Extract the mark value from each object and add it to the sum
      const markValue = Object.values(markObj)[0];
      return sum + markValue;
    },0);

    if (totalMarks > 150) {
      // Add the student's name and total marks to the result array
      result.push({ [student.name]: totalMarks });
    }
  }

  return result;
}

const studentsWithSumGreaterThan150 = findStudentsWithSumGreaterThan150(students);
// console.log(studentsWithSumGreaterThan150);

//It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
]

const peopleGroupedByAge = people.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})
console.log(peopleGroupedByAge)
/*
  {
    26: [{ name: 'Kyle', age: 26 }],
    31: [{ name: 'John', age: 31 }],
    42: [
      { name: 'Sally', age: 42 },
      { name: 'Jill', age: 42 }
    ]
  }
*/


