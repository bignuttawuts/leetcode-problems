/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const precedence = {
    I: { v: 1 },
    V: { v: 5 },
    X: { v: 10 },
    L: { v: 50 },
    C: { v: 100 },
    D: { v: 500 },
    M: { v: 1000 },
  };
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currChar = s[i];
    const currNumMap = precedence[currChar];

    const prevChar = i !== s.length - 1 ? s[i + 1] : null;
    let isCurrSmallest = false;
    if (prevChar) {
      const prevNumMap = precedence[prevChar];
      isCurrSmallest = currNumMap.v < prevNumMap.v;
    }

    if (!isCurrSmallest) {
      result += currNumMap.v;
    } else {
      result -= currNumMap.v;
    }
  }
  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LIV"));
