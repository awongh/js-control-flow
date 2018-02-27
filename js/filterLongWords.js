var array_of_words = ["Cat", "Dog", "Pikachu", "Grass"];
maxLength = 4;
new_array = [];

for (var i = 0; i < array_of_words.length; i ++) {
	if (array_of_words[i].length < maxLength) {
		new_array.push(array_of_words[i])
	}
	console.log(new_array.length);
};
