function leapYears(input) {
    let leap = Number(input[0]);
    let randomYear = Number(input[1]);

    for (let i = leap; i <= randomYear; i += 4) {
        console.log(i);
    }
}
leapYears(["1584", "1597"]);

// Checked in Judge; score = 100/100