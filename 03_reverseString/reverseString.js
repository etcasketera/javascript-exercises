const reverseString = function(str) {
    let output = "";
    let len = str.length - 1;
    console.log(len)
    for (i = len; i >= 0; i--) {
        console.log(str[i])
        output += str[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
