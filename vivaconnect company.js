
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

