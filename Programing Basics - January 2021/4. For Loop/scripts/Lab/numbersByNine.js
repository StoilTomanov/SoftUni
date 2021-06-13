function numbersByNine(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let sum = 0.0;
    let allNumbers = "";

    for (let i = numA; i <= numB; i++) {
        if (i % 9 == 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = numA; i < numB; i++) {
        if (i % 9 == 0) {
            console.log(i);
        }
    }
}
numbersByNine(["100", "200"]);

// Checked in Judge; score = 100/100