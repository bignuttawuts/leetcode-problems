/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const str = x + "";
  let bStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bStr += str[i];
  }
  return bStr === str;
};
console.log(isPalindrome(-1));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
