function mergeArrays(firstArray, secondArray) {

    let thirdArray = [];

    // iterate throught the arrays
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            // if index is even sum both elements for the two arrays
            let result = Number(firstArray[i]) + Number(secondArray[i]);
            // merge both arrays into third
            thirdArray.push(result);
        } else {
            // if index is odd concatenate the two elements of the two arrays
            let result = firstArray[i] + secondArray[i];
            // merge both arrays into third
            thirdArray.push(result);
        }
    }

    console.log(thirdArray.join(' - '));
    // print the third array each element separated with ' - '
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
console.log('-----------------');
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

// tested in Judge = 100/100