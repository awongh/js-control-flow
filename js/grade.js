var grade = function(score){
	switch(true){
		case score>80&&score<=100:
		console.log("A");
		break;
		case score<=80&&score>50:
		console.log("Pass");
		break;
		default:
		console.log("Fail");
	}
}