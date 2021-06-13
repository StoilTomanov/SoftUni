function specialNumbers(num) {
    // special number = sum of its digits is 5, 7, 11
    // for loop printing the nums
    // the num to be parsed into string

    for (let i = 1; i <= num; i++) {
        if (i === 5 || i === 7) {
            console.log(`${i} -> True`);
        } else if (i < 10) {
            console.log(`${i} -> False`);
        } else {
            i = i.toString();
            let sum = 0;
            for (let digit of i) {
                digit = Number(digit);
                sum += digit;
            }
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        }
    }
}
specialNumbers(15);
console.log('-------------------');
specialNumbers(25);
console.log('-------------------');
specialNumbers(56);

// tested in Judge = 100/100