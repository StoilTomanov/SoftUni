function smallestNum(numOne, numTwo, numThree) {

    let array = [numOne, numTwo, numThree];
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
        } else {
            continue;
        }
    }
    console.log(smallestNumber);

}
smallestNum(2, 5, 3);
smallestNum(600, 432, 123);
smallestNum(25, 21, 4);

// tested in Judge = 100/100