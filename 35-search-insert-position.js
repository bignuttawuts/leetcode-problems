/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let stop = nums.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (nums[middle] !== target && start <= stop) {
    if (target < nums[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }

  return nums[middle] !== target ? start : middle;
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0));

console.log(searchInsert([1, 3, 5, 6, 7, 8, 9, 10, 13], 10));
