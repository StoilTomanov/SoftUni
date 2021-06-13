function histogram(input) {
    let numbersCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            p3++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${((p1 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p4 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p5 / numbersCount) * 100).toFixed(2)}%`);
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);

// Checked in Judge; score = 100/100