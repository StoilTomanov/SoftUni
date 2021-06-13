function numbersFromNToM(n, m) {
    let numOne = n;
    let numTwo = m;

    while (numOne >= numTwo) {
        console.log(numOne);
        numOne--;
    }

}
numbersFromNToM(6, 2);
//numbersFromNToM(4, 1);

// tested in Judge = 100/100;