function calculator(numOne, operator, numTwo) {

    let calculation = eval(`${numOne}${operator}${numTwo}`)
    console.log(calculation.toFixed(2));

}
calculator(5, '+', 10);
console.log('-------');
calculator(25.5, '-', 3);

// tested in Judge = 100/100