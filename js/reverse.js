function revString(inputString) 
{	
	var newString = "";
	for (i = inputString.length; i > 0; i--)
	{
		newString += inputString.charAt(i-1);
		
	}
	console.log(newString);
	document.write("<br><br>Input String is " + inputString + "<br>");
	document.write("Output String is " + newString);
}

revString("123456");
