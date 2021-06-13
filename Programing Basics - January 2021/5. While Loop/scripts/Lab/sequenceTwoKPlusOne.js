function sequenceTwoKPlusOne(input) {
    let sequenceNum = Number(input[0]);
    let counter = 1;

    while (counter <= sequenceNum) {
        let currentNumber = counter;
        console.log(currentNumber);
        counter = (counter * 2) + 1;
    }
}
sequenceTwoKPlusOne(["31"]);

// Checked in Judge; score = 100/100