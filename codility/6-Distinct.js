function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A.sort((a, b) => a - b);

    let distinct = [], i = 0;
    while (i < A.length) {
        if (A[i] !== distinct[distinct.length - 1]) {
            distinct.push(A[i]);
        }

        i++;
    }
    return distinct.length;
}

function test(A, expected) {
    const actual = solution(A, expected);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

test([2, 1, 1, 2, 3, 1], 3);
test([-1000000, -102, -1, 1, 2, 3, 1, 1000000], 7);
