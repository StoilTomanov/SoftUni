function sumNumbers(input) {
    let totalNumber = Number(input[0]);
    let index = 1;
    let sumOfNum = 0;

    while (sumOfNum < totalNumber) {
        let currentNumber = Number(input[index]);
        sumOfNum += currentNumber;
        index++;
    }
    console.log(sumOfNum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);

// Checked in Judge; score = 100/100