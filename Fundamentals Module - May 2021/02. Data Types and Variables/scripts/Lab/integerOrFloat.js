function integerOrFloat(numOne, numTwo, numThree) {

    let sum = numOne + numTwo + numThree;
    sum % 1 === 0 ? sum = `${sum} - Integer` : sum = `${sum} - Float`

    console.log(sum);

}
integerOrFloat(9, 100, 1.1);
console.log('--------------------');
integerOrFloat(100, 200, 303);

// tested in Judge = 100/100;