
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

are yu there?
You18:09
u r on mute
Swapnil Shingole18:28
console.log(..."paras")
Swapnil Shingole18:29
let a = [1,2,3]
let d = {...a}
Swapnil Shingole18:31
const Obj = {name: "ABC"}
obj.name = "PQR"
Swapnil Shingole18:32
obj = 12
You18:33
spread
Swapnil Shingole18:33
rest
Swapnil Shingole18:35
event.preventDefault
Swapnil Shingole18:41
let arr = [1,1,1,,2,2,3,4,3]
output = {1:1, 2:0, 3:0, 4:1}
You19:00
select top 1  from  (select top 2 from salary  order by desc  ==4,3 ) order by asc 3,4