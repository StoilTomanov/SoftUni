function greening(input) {
    let pricePerSqMeter = 7.61;
    let area = Number(input[0]);
    let totalSum = Number(area * pricePerSqMeter);
    let discount = Number(totalSum * 0.18)
    let finalSum = Number(totalSum - discount);

    console.log(finalSum);
    console.log(discount);

}
greening(["550"]);

// Checked in Judge; score = 100/100