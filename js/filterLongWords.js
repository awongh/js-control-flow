const exampleData = ["super", "hyper", "mathematical", "thisisalongword", "thisisalongerword", "standard", "forvalhalla"];
const maxLength = 9;

function filterLongWords(arr, maxLength) {
    if (typeof(maxLength) != "number" || parseInt(maxLength) != maxLength || maxLength < 0) {console.error("Need a positive number for max length!"); return};
    let result = [];
    arr.map((currentWord) => {if (currentWord.length < maxLength) {result.push(currentWord)}});
    console.log(maxLength);
    return result;
}

filterLongWords(exampleData, maxLength);
