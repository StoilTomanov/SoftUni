function factorialDivision(num, divisor) {
    let result = 0;
    let sumNum = 1;
    let sumDivisor = 1;

    for (let i = 1; i <= num; i++) {
        sumNum *= i;
    }

    for (let i = 1; i <= divisor; i++) {
        sumDivisor *= i;
    }

    result = sumNum / sumDivisor;

    console.log(result.toFixed(2));

}
factorialDivision(5, 2);
factorialDivision(6, 2);

// tested in Judge = 100/100