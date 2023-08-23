function one (){
	var a = 2;
	return function two (b){
		a = a*b;
		return a;
	}
}

const three = one();
console.log(three(3));