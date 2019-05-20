/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            var numI = nums[i]
            var numJ = nums[j]
            if ((numI + numJ) === target) {
                result = [i, j]
            }
        }
        if (result.length === 2)
            break;
    }
    
    return result
};