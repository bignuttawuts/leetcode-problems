/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let start = 0;
    let stop = needle.length;
    let substr = "";

    while (start <= haystack.length && stop <= haystack.length) {
        substr = "";
        for (let i = start; i < stop; i++) {
            substr += haystack[i];
        }
        if (substr === needle) {
            break;
        }

        start++;
        stop++;
    }
    return substr === needle ? start : -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('a', 'a'));