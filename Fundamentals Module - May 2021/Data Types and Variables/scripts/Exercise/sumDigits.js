function sumDigits(number) {
    let n = number.toString()
    let sum = 0;

    for (let digit of n) {
        sum += Number(digit);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);

// tested in Judge = 100/100