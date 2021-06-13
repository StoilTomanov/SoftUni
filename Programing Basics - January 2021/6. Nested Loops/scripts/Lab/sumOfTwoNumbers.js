function sumOfTwoNumbers(input) {
    let i1 = Number(input[0]);
    let i2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCounter = 0;
    let isFound = false;

    for (let x = i1; x <= i2; x++) {
        for (y = i1; y <= i2; y++) {
            if (x + y === magicNumber) {
                isFound = true;
                combinationsCounter++;
                break;
            }
            combinationsCounter++;
        }
        if (isFound) {
            console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${magicNumber})`);
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);

// Checked in Judge; score = 100/100