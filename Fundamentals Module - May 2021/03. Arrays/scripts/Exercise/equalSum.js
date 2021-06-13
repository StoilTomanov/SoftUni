function equalSum(array) {

    let leftSum = 0;
    let rightSum = 0;
    let arrayLength = array.length;
    let leftCounter = 0;
    let rightCounter = 0;
    let isFound = false;

    // iterate through the array up to its length
    for (let i = 0; i < array.length; i++) { // left side
        rightSum = 0;
        rightCounter++;
        leftSum += array[i];
        leftCounter = 0;
        // iterate through the array down to 0
        // nested loop
        for (let j = array.length - 1; j >= 0; j--) { // right side
            rightSum += array[j];
            leftCounter++;
            // check if the sum from the right side equal the sum of the left side
            if (leftSum == rightSum) {
                if ((leftCounter + rightCounter) - arrayLength == 1) {
                    // if YES = print the index in between
                    console.log(i);
                    isFound = true;
                    break;
                }
            }
        }
    }

    // if NO = print 'no'
    if (!isFound) {
        console.log('no');
    }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

// tested in Judge = 100/100