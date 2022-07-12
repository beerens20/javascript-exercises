const removeFromArray = function(array, num) {
    target = num - 1;
    removed = array.splice(target, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
