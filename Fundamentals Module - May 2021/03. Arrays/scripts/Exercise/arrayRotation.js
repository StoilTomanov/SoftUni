function arrayRotation(array, rotations) {


    // iterate through the array
    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];
        // first index must go at the last place of the array on each rotaion
        for (let j = 0; j < array.length; j++) {
            array[j] = array[j + 1]
        }
        array[array.length - 1] = firstElement;
    }
    // print the result separated by single space
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
console.log('---------');
arrayRotation([32, 21, 61, 1], 4);
console.log('---------');
arrayRotation([2, 4, 15, 31], 5);

// tested in Judge = 100/100