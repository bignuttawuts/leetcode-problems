function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.ceil((Y - X) / D);
}

function test(X, Y, D, expected) {
    const actual = solution(X, Y, D, expected);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

test(10, 85, 30, 3);
test(0, 100, 10, 10);
test(0, 101, 10, 11);
test(100, 100, 10, 0);

//1..1,000,000,000