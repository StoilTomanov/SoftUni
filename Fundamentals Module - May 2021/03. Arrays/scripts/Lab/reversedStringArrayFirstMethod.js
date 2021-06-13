function reversedStringArray(array) {

    let reversed = '';
    // iterate through the array
    // reverse the array elements
    for (let i = array.length - 1; i >= 0; i--) {
        reversed = reversed + ' ' + array[i];
    }
    // print the elements
    console.log(reversed);

}
reversedStringArray(['a', 'b', 'c', 'd', 'e']);
console.log('---------------------------');
reversedStringArray(['abc', 'def', 'hig', 'klm', 'nop']);
console.log('---------------------------');
reversedStringArray(['33', '123', '0', 'dd']);

// tested in Judge = 100/100