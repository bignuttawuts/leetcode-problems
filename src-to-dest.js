/**
 * @param {number} target
 * @param {number[]} from
 * @param {number[]} to
 * @return {number}
 */
var srcToDest = function (target, fromArr, toArr) {

    // find start
    let mapA = {}, startIndex = 0;
    let startValue = fromArr[startIndex];
    for (let i = 0; i < fromArr.length; i++) {
        if (fromArr[i] <= startValue) {
            startValue = fromArr[i];
            startIndex = i;
        }
        mapA[fromArr[i]] = i;
    }

    let travelCount = 0;
    let nextIndex = startIndex;
    let valTo = toArr[startIndex];
    let resultIndex = null;

    while (valTo !== target && nextIndex !== undefined) {
        if (nextIndex !== undefined) {
            resultIndex = nextIndex;
        }

        valTo = toArr[nextIndex];
        nextIndex = mapA[valTo];
        travelCount++;
    }

    // end value : valB
    // end index : resultIndex
    // console.log('valB', valTo);
    // console.log('C', target);
    // console.log('resultIndex', resultIndex);
    return valTo === target;
}

function test(C, A, B, expected) {
    const actual = srcToDest(C, A, B);
    console.log(`actual: ${actual}, expected: ${expected}`);
}

test(15, [9, 5, 3, 10], [10, 9, 5, 15], true);

test(15, [9, 5, 10, 3], [10, 7, 15, 5], false);

test(7, [9, 5, 10, 3], [10, 7, 15, 5], true);