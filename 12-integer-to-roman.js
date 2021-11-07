/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const precedence = {
        "1": { t: "I", v: 1 },
        "5": { t: "V", v: 5 },
        "10": { t: "X", v: 10 },
        "50": { t: "L", v: 50 },
        "100": { t: "C", v: 100 },
        "500": { t: "D", v: 500 },
        "1000": { t: "M", v: 1000 },
    };
    const precedenceArr = [
        { t: "I", v: 1 },
        { t: "V", v: 5 },
        { t: "X", v: 10 },
        { t: "L", v: 50 },
        { t: "C", v: 100 },
        { t: "D", v: 500 },
        { t: "M", v: 1000 },
    ];

    const numStr = num + "";
    let result = "";
    for (let i = 0; i <= numStr.length - 1; i++) {
        console.log(numStr[i]);
        if (i === 0) {
            for (let j = 1; j <= numStr[i]; j++) {
                result += "M";
            }
        } else if (i === 1) {
            let c = numStr[i];
            if (parseInt(numStr[i]) / 5 > 1) {
                result += "D";
                c -= 5;
            } 
            for (let j = 1; j <= c; j++) {
                result += "C";
            }
        }
    }
    return result;
};

function test(num, expected) {
    const actual = intToRoman(num);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

test(1100, "M");
test(3800, "MMM");
// test(12, "XII");