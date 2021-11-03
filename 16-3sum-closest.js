/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length - 1];

    nums.sort((a, b) => a - b);

    for (let current = 0; current < nums.length - 2; current++) {
        let start = current + 1, end = nums.length - 1;
        while (start < end) {
            let sum = nums[current] + nums[start] + nums[end];

            if (sum > target) {
                end--;
            } else {
                start++;
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }

    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));//2
console.log(threeSumClosest([0, 0, 0], 1));//0
console.log(threeSumClosest([7, 8, 9, -1], 13)); // 14
console.log(threeSumClosest([0, 1, 2], 3)); // 3
console.log(threeSumClosest([0, 1, 2], 0)); // 3
console.log(threeSumClosest([1, 1, 1, 0], 100));//3
console.log(threeSumClosest([0, 2, 1, -3], 1));//0
console.log(threeSumClosest([-3, -2, -5, 3, -4], -1));//-2
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));//82