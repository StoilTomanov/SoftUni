function sorting(array) {

    let sortedNums = [];
    // copies of the original array
    let ascArr = array.slice();
    let dscArr = array.slice();

    // create a compare functions for the ascending and descending order
    function compareAsc(a, b) {
        return a - b;
    }

    function compareDsc(a, b) {
        return b - a;
    }
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        let numbers;
        // check the elements by its even and odd position
        if (i % 2 === 0) {
            dscArr.sort(compareDsc);
            numbers = Math.max(...dscArr);
            // shift the first element of the copied array
            dscArr.shift()
        } else {
            ascArr.sort(compareAsc);
            numbers = Math.min(...ascArr);
            // shift the first element of the copied array
            ascArr.shift()
        }
        // push the taken element in the new array
        sortedNums.push(numbers);
    }
    // print the new array
    console.log(sortedNums.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([13, 1, 43, 5, 72, 85, 31, 12, 18]);
sorting([31, 7, 23, 5]);