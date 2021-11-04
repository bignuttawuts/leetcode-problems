// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const map = A.map((val, i) => { return { val, i } }); //.sort((a, b) => a.val - b.val);
//     for (const obj of map) {
//         console.log('val: ' + obj['val'] + ', i: ' + obj['i']);
//     }
//     return map;
// }

// function test(A, expected) {
//     const actual = solution(A, expected);
//     console.log(`actual: ${actual}, expected: ${expected}`);
// }

// test([10, 2, 5, 1, 8, 20], 1);