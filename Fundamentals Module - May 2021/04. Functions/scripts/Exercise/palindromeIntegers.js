function palindromeChecker(array) {
    let backwardStr = '';
    // iterate through the array

    for (let i = 0; i < array.length; i++) {
        // parse each elemen to string
        let elementToStr = String(array[i]);
        // create a second loop to iterate through the string backwards
        for (let j = elementToStr.length - 1; j >= 0; j--) {
            backwardStr += elementToStr[j];
        }

        // check if palindrome and print
        if (elementToStr === backwardStr) {
            backwardStr = '';
            console.log(true);
        } else {
            backwardStr = '';
            console.log(false);
        }
    }
}
// TODO: Try re-writing the code but split each element into a new arra. Join it and reverse it, then check if palindrome.
palindromeChecker([123, 323, 421, 121]);
console.log('----------------');
palindromeChecker([32, 2, 232, 1010]);

// tested in Judge = 100/100