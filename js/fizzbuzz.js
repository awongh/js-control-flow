var fizzBuzz = function() {
	for (num=1;num<101;num++){
		if (num%3==0&&num%5==0){
			console.log("fizzBuzz");
		}else if(num%3==0){
			console.log("fizz");
		}else if(num%5==0){
			console.log("buzz");
		}else{
			console.log(num);
		}
	}
}

fizzBuzz();