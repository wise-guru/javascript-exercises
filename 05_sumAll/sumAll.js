/* Implement a function that takes 2 integers and returns the sum of every number between(and including) them 

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

*/


const sumAll = function(min, max) {
    let finalSum = 0;
    let n = 0;

    if (!Number.isInteger(min) || !Number.isInteger(max)) return ("ERROR"); 
    if (min < 0 || max < 0) return ("ERROR");
    if (min > max) {
        const result = min;
        min = max;
        max = result;
    }

    while (n < max) {
        n++
        finalSum += n
    }   return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
