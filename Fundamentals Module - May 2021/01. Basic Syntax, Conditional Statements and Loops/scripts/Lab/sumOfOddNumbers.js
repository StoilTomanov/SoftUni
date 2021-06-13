function sumOfOddNumbers(n) {

    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
            counter++;
            sum += i;
            console.log(i);
            if (counter === n) {
                break;
            } else {
                continue;
            }
        }
    }

    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5);
//sumOfOddNumbers(3);

// tested in Judge = 100/100;