function invalidNumber(input) {
    let number = Number(input[0]);
    if (number < 100 || number > 200) {
        if (number !== 0) {
            console.log("invalid");
        } else {
            console.log();
        }
    }
}
invalidNumber(["1500"]);

// Checked in Judge; score = 100/100