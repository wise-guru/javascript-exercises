const reverseString = function(str) {

    let splitString = str.split("");

    let reverseArray = splitString.reverse("");

    let finalString = reverseArray.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
