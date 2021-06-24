function searchForANumber(arrayOne, arrayTwo) {
    let numTake = arrayTwo[0];
    let numDelete = arrayTwo[1];
    let numWanted = arrayTwo[2];
    let count = 0;
    let lookupArr = [];

    if (numDelete > numTake) {
        lookupArr = arrayOne.splice(0, numTake);
    } else {
        lookupArr = arrayOne.splice(numDelete, numTake)
    }

    for (let i = 0; i < lookupArr.length; i++) {
        if (lookupArr[i] === numWanted) {
            count++;
        }
    }

    console.log(`Number ${numWanted} occurs ${count} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 4, 3, 1, 9, 7, 5, 2], [5, 6, 7]);