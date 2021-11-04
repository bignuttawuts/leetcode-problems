// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let middle = -(K % A.length);
    const first = A.slice(0, middle);
    const second = A.slice(middle, A.length);
    return second.concat(first);
}

///////////////////////////////////////////
function test(A, K, expected) {
    const actual = solution(A, K);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

//    0  1
test([5, -1000], 0, [5, -1000]);
test([5, -1000], 1, [-1000, 5]);
test([5, -1000], 2, [5, -1000]);

test([3, 8, 9, 7, 6], 1, [6, 3, 8, 9, 7]);
test([3, 8, 9, 7, 6], 2, [7, 6, 3, 8, 9]);
test([3, 8, 9, 7, 6], 3, [9, 7, 6, 3, 8]);

test([1, 1, 2, 3, 5], 5, [1, 1, 2, 3, 5]);
test([1, 1, 2, 3, 5], 7, [3, 5, 1, 1, 2]);
test([1, 1, 2, 3, 5], 9, [1, 2, 3, 5, 1]);