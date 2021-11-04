function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);

    let result = null;
    let i = 0;
    while (i < A.length) {
        const first = A[i];
        const second = A[i + 1];

        if (first !== second) {
            result = first;
            break;
        } else {
            i += 2;
        }
    }

    return result;
}

function test(A, expected) {
    const actual = solution(A);
    console.log(`actual: ${actual}, expected: ${expected}`);
}
// 1,1,2,9,9
test([9, 3, 9, 3, 9, 7, 9], 7);
test([9, 1, 1, 9, 2], 2);
test([3, 123, 555, 33, 91, 3, 5, 4, 31, 123, 33, 5, 91, 3, 31, 555, 3], 4);
test([5, 5, 7, 9, 7, 11, 9], 11);