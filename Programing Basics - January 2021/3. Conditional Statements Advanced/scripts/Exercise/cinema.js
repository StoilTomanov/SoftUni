function cinema(input) {
    let premiere = 12.00;
    let normal = 7.50;
    let discount = 5.00;
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let totalSeats = 0.0;
    let totalIncome = 0.0;

    switch (type) {
        case "Premiere":
            totalSeats = r * c;
            totalIncome = totalSeats * premiere;
            console.log(`${totalIncome.toFixed(2)} leva`);
            break;
        case "Normal":
            totalSeats = r * c;
            totalIncome = totalSeats * normal;
            console.log(`${totalIncome.toFixed(2)} leva`);
            break;
        case "Discount":
            totalSeats = r * c;
            totalIncome = totalSeats * discount;
            console.log(`${totalIncome.toFixed(2)} leva`);
            break;
        default:
            console.log("Invalid input");
    }
}
cinema(["Discount", "12", "30"]);

// Checked in Judge; score = 100/100