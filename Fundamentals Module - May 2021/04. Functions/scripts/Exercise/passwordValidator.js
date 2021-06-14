function passwordValidator(str) {
    /*
    Password must be between 6 and 10 characters
    Password must consist only of letters and digits
    Password must have at least 2 digits
    */
    let digitCounter = 0;
    let isLetter = false;
    let isNumber = false;
    let isBetween = false;
    let isOutOfScope = true;

    // iterate through the password
    for (let i = 0; i < str.length; i++) {
        let elementCodeCheck = str[i].charCodeAt(0);

        // check whether all the conditions are met OR which was not met 
        if (!(elementCodeCheck >= 65 && elementCodeCheck <= 90) && !(elementCodeCheck >= 97 && elementCodeCheck <= 122) && !(elementCodeCheck >= 48 && elementCodeCheck <= 57)) {
            isOutOfScope = false;
        }
        if (str.length >= 6 && str.length <= 10) {
            isBetween = true;
        }
        if (elementCodeCheck >= 65 && elementCodeCheck <= 90) {
            isLetter = true;
        }
        if (elementCodeCheck >= 97 && elementCodeCheck <= 122) {
            isLetter = true;
        }
        if (elementCodeCheck >= 48 && elementCodeCheck <= 57) {
            digitCounter++;
            if (digitCounter >= 2) {
                isNumber = true;
            }
        }
    }

    // print the results
    if (isLetter && isNumber && isBetween && isOutOfScope) {
        return console.log("Password is valid");
    }

    if (!isBetween) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isOutOfScope || !isLetter) {
        console.log("Password must consist only of letters and digits");
    }

    if (!isNumber) {
        console.log("Password must have at least 2 digits");
    }

}
// TODO: Try to optimize the code by re-creating the program using nested functions.
passwordValidator('logIn');
console.log('------------------------------------------------------');
passwordValidator('MyPass123');
console.log('------------------------------------------------------');
passwordValidator('Pa$s$s');

// tested in Judge = 100/100