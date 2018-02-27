const exampleData = ["super", "hyper", "mathematical", "thisisalongword", "thisisalongerword", "standard", "forvalhalla"];
const maxLength = 9;

function filterLongWords(arr, maxLength) {
    if (typeof(maxLength) != "number" || parseInt(maxLength) != maxLength || maxLength < 0) {console.error("Need a positive number for max length!"); return};
    console.log(maxLength);
    return arr.filter(word => word.length > maxLength)
}

filterLongWords(exampleData, maxLength);
