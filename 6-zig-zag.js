/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push("");
    }

    let currentRow = 0, goingDown = false;
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] = rows[currentRow].concat(s[i]);
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

function test(s, numRows, expected) {
    const actual = convert(s, numRows);
    console.log(`actual: ${actual}, expected: ${expected}, test: ${actual === expected}`);
}

// test("PAYPALISHIRING", 3, "PAHNAPLSIIGYIR");
// test("PAYPALISHIRING", 4, "PINALSIGYAHRPI");
// test("A", 1, "A");
test("AB", 1, "AB");