function printAndSum(numStart, numEnd) {

    let sumNums = 0;
    let readLine = '';

    for (let i = numStart; i <= numEnd; i++) {
        sumNums += i;
        readLine += i + ' ';
    }

    console.log(readLine);
    console.log(`Sum: ${sumNums}`);

}
printAndSum(5, 10);
console.log('---------------------------------');
printAndSum(0, 26);
console.log('---------------------------------');
printAndSum(50, 60);

// tested in Judge = 100/100;