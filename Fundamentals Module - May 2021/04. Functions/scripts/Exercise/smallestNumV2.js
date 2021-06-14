function findSmallestNum(numOne, numTwo, numThree) {

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
findSmallestNum(2, 5, 3);
findSmallestNum(600, 432, 123);
findSmallestNum(25, 21, 4);

// tested in Judge = 100/100