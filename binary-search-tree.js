/**
 * 
 * @param {number[]} arr
 * @param {number} target 
 * @return {number} index of target in array
 */
function binarySearch(arr, target) {
    const n = arr.length;
    let beg = 0;
    let end = n - 1;
    let result = -1;
    let mid = null;
    while (beg < end) {
        mid = Math.floor((beg + end) / 2);
        if (arr[mid] <= target) {
            beg = mid + 1;
            result = mid;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

console.log(binarySearch([1, 2, 3, 4], 3));