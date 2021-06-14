function charactersInRange(charOne, charTwo) {
    // convert the letters to digits using ASCII
    let startChar = charOne.charCodeAt(0);
    let endChar = charTwo.charCodeAt(0);
    let readLine = '';

    /* the inputs might be in oposite order thus
    check which of the two inputs is bigger ascii position */
    if (startChar > endChar) {
        startChar = charTwo.charCodeAt(0);
        endChar = charOne.charCodeAt(0);
    }

    // print the codes in between the range converted in to characters again
    for (let i = startChar + 1; i < endChar; i++) {
        let codeToChar = String.fromCharCode(i);
        readLine += ' ' + codeToChar;
    }

    console.log(readLine);


}
charactersInRange('a', 'd');
console.log('------------------------------------------------------------------------------------------');
charactersInRange('#', ':');
console.log('------------------------------------------------------------------------------------------');
charactersInRange('C', '#');

// tested in Judge = 100/100