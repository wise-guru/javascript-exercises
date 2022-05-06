const ftoc = function(fNum) {

let result = ([fNum] - 32) * (5/9);
let celsiusConversion = Math.round(result * 10) / 10;
return celsiusConversion;
};

const ctof = function(cNum) {
let result = [cNum] * (9/5) + 32;

let farenheitConversion = Math.round(result * 10) / 10;
return farenheitConversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
