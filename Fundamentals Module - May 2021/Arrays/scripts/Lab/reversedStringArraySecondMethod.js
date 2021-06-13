function reversedStringArray(array) {

    let newArray = [];
    let reversed = '';
    // iterate through the array
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    // reverse the array elements
    reversed = newArray.join(' ');
    // print the elements
    console.log(reversed);

}
reversedStringArray(['a', 'b', 'c', 'd', 'e']);
console.log('---------------------------');
reversedStringArray(['abc', 'def', 'hig', 'klm', 'nop']);
console.log('---------------------------');
reversedStringArray(['33', '123', '0', 'dd']);

// tested in Judge = 100/100