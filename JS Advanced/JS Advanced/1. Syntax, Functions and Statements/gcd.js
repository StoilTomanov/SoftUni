function gcd(num1, num2) {

    if (num1 == 0) {
        return num2;
    }

    while (num2 != 0) {
        if (num1 > num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
    }

    return num1;

}
console.log(gcd(15, 5));
console.log(gcd(2154, 458));