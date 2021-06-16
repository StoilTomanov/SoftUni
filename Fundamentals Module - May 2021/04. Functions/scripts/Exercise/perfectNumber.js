function perfectNumber(num) {
    let sum = 0;
    let isPerfect = false;

    // run a loop that checks if each number is a proper divisor
    for (let i = 1; i < num; i++) {
        if (num % i === 0) { // checks if the current digit is a proper positive divisor
            sum += i;
            if (sum === num) { // print the relevant message when perfect number is found
                console.log('We have a perfect number!');
                isPerfect = true;
                break;
            }
        }
    }
    // if perfect number is not found print the relevant message
    if (!isPerfect) {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6);
console.log('-----------');
perfectNumber(28);
console.log('-----------');
perfectNumber(1236498);

// tested in Judge = 100/100