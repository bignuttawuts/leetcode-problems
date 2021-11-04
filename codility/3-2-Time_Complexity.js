// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let result = null;
//     for (let i = 0; i < A.length; i++) {
//         if (parseInt(A[i]) !== (i + 2)) {
//             result = i + 2;
//             break;
//         }
//     }
//     return result;
// }

// function test(A, expected) {
//     const actual = solution(A, expected);
//     console.log(`actual: ${actual}, expected: ${expected}`);
// }

// test(["2", 3, 1, 5], 4);
// test([2, 3, 4, 5, 6, 7, 8, 1], 9);
// test([2, 0], 3);
// test([2, 3, 4, 5, 1], 6);
// test(["1", 3, 4, 5], 2);