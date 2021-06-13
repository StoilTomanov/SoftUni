function rightPlace(str, char, strFull) {

    let currentLetter = '';
    let strToCheck = '';

    for (let i = 0; i <= strFull.length - 1; i++) {
        currentLetter = str[i];
        if (currentLetter === '_') {
            strToCheck += char;
        } else {
            strToCheck += currentLetter;
        }
    }

    if (strToCheck === strFull) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
console.log('---------------------');
rightPlace('Str_ng', 'i', 'String');

// tested in Judge = 100/100;