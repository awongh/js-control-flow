
function maxOfThree(num1,num2,num3)
{
	var testArray = [num1 ,num2, num3];
	var maxNum = 0;

	for (i = 0; i < 3; i++)
	{
		if (testArray[i] >= maxNum)
		{
			maxNum = testArray[i];
		}
	}
	document.write("The three numbers are " + num1 + num2 + num3 + "<br>");
	document.write("Biggest number is " + maxNum);

}

//test function
maxOfThree(1,2,3);