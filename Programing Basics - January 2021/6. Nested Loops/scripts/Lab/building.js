function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f >= 1; f--) {
        let result = ""
        for (let r = 0; r < rooms; r++) {
            if (f === floors) {
                result += "L" + f + r + " ";
            } else if (f % 2 === 0) {
                result += "O" + f + r + " ";
            } else {
                result += "A" + f + r + " ";
            }
        }

        console.log(result);
    }
}
building(["9", "5"]);

// Checked in Judge; score = 100/100