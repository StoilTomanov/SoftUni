function minNumber(input) {
    let numbersCount = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}
minNumber(["2", "100", "99"]);

// Checked in Judge; score = 100/100p