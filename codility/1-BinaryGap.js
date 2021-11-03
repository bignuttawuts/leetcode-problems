function toBin(dec) {
    return (dec >>> 0).toString(2);
}
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N === null || N === undefined) return 0;
    if (isNaN(N)) return 0;

    const binaryString = toBin(N);

    let longestGap = 0;

    const endOfSurrounded = binaryString.lastIndexOf("1");
    const ignoreLast = endOfSurrounded < binaryString.length;
    const arr = binaryString.split("1");
    const arrLen = ignoreLast ? arr.length - 1 : arr.length - 2;

    for (let i = 0; i < arrLen; i++) {
        const a = arr[i];
        if (a && longestGap < a.length) {
            longestGap = a.length;
        }
    }
    return longestGap;
}
console.log(solution("328"))