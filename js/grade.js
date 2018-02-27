var grades = 95;

switch (true) {
	case (grades > 90.0):
		console.log("You got an A.");
		break;

	case (grades > 80.0):
		console.log("You got a B.");
		break;

	case (grades > 70.0):
		console.log("You got a C.");
		break;

	case (grades > 60.0):
		console.log("You got a D.");
		break;

	default:
		console.log("You got an F");
}