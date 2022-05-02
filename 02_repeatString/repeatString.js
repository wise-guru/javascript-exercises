function repeatString(userString, loopNumber) {
let repeatedString = ("");
    if (loopNumber < 0) return 'ERROR';

    while (loopNumber > 0) {
        repeatedString += userString;
        loopNumber--;
    } 
    return repeatedString; 


}

// Do not edit below this line
module.exports = repeatString;
