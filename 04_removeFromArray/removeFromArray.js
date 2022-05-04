const removeFromArray = function(...orig) {
    const array = orig[0];

    const newArray = [];

    array.forEach((item) => {
        if (!orig.includes(item)) {
            newArray.push(item)
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
