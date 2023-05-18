/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var transformedArray = [];

    for ( var i = 0; i < arr.length; i++){
        transformedArray.push(fn(arr[i], i));
    }
    
    return transformedArray;
};
