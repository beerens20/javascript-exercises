const reverseString = function(string) {
    let output = "";
    if (string == " ") {
        output = "";
    } else {
        let newString = "";
        for (let i = string.length - 1; i >= 0; i--) {
            newString += string[i];
        }
        output = newString;
    };
    return output;
};

// Do not edit below this line
module.exports = reverseString;
