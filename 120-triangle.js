/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};

function test(A, expected) {
    const actual = minimumTotal(A);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

test([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11);
test([[-10]], -10);
test([[-1], [2, 3], [1, -1, -3]], -1);

// module.exports = { minimumTotal };