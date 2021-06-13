function rounded(num, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let fixedPrecision = num.toFixed(precision);
    let numWithoutZero = parseFloat(fixedPrecision);

    console.log(numWithoutZero);

}
rounded(3.1415926535897932384626433832795, 2);
rounded(10.5, 3);

// tested in Judge = 100/100;