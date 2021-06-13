function degreesConverter(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
degreesConverter(["3.1416"]);

// Checked in Judge; score = 100/100