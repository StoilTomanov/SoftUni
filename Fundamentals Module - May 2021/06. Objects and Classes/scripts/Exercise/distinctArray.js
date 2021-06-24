function distinctArray(array) {
    // remove each repeating numbers from the given array
    // make an empty array
    let newArray = [];

    // iterate with a loop through each  and check if the current is already included
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) { // if included = skip
            continue;
        } else { // if not included push to the empty array
            newArray.push(array[i]);
        }
    }

    // print the new array joined with a ' '
    console.log(newArray.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);