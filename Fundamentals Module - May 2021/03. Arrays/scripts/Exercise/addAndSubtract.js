function addAndSubtract(array) {

    let newArray = [];
    let sumOld = 0;
    let sumNew = 0;

    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // find the even and the odds
        if (array[i] % 2 === 0) { // even
            // if even add the index value to it
            sumOld += array[i];
            array[i] += i;
            newArray.push(array[i]);
            //find sum of old and new array
            sumNew += array[i];
        } else { // odd
            // if odd subtract its index value
            sumOld += array[i];
            array[i] -= i;
            newArray.push(array[i]);
            //find sum of old and new 
            sumNew += array[i];
        }
    }

    console.log(newArray);
    console.log(sumOld);
    console.log(sumNew);

}
addAndSubtract([5, 15, 23, 56, 35]);
console.log('-----------------');
addAndSubtract([-5, 11, 3, 0, 2]);

// tested in Judge = 100/100