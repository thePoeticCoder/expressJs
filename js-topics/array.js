

//let arr =[1,2,3,4,5,6,7,8];
//arr.push(7);
// arr.shift();
//arr.unshift(1)
//arr.pop();
//arr.slice(3,5) o/p => 4,5
//console.log(arr.splice(3,3)); => [ 4, 5, 6 ]
//arr[95] =100;
// array.indexOf();
// array.contain();

/*function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);*/

const arr=[5,1,2,3,6];

// const doblearr=arr.map((val) => {
//     return val*2;
// });
//console.log(doblearr); //[ 10, 2, 4, 6, 12 ]

//const oddarr=arr.filter((x)=> x%2==0);
//console.log(oddarr); //[2,6]


//spread operator
// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const updateMyVehicle = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }

// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//rest parameters  ...theArgs
// function sum(...theArgs) {
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// // Expected output: 6

// console.log(sum(1, 2, 3, 4));



/*charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	Returns two or more joined strings
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces




// output = {1:1, 2:0, 3:0, 4:1}

function test(arr){

	var output = {};

	for(var i=0; i<arr.length; i++){
		if(output.length>0 && output[arr[i]] ){
			if(output[arr[i]]==0){
				output[arr[i]] =1;
			}else {
				output[arr[i]] =0;
			}
		}else{
			output[arr[i]] = 0;
		}
	}

	return output;

}

let arr = [1,1,1,,2,2,3,4,3]
console.log(test(arr));

