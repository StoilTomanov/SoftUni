function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let price = 0.0;
    let total = 0.0;
    let studio = 0.0;
    let apartment = 0.0;

    if (month === "May" || month === "October") {
        if (numberOfNights > 14) { // apartment
            price = 65;
            total = (numberOfNights * price) * 0.90;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        } else {
            price = 65;
            total = numberOfNights * price;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        }
        if (numberOfNights > 7 && numberOfNights <= 14) { // studio
            price = 50;
            total = (numberOfNights * price) * 0.95;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        } else if (numberOfNights > 14) {
            price = 50;
            total = (numberOfNights * price) * 0.70;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        } else {
            price = 50;
            total = numberOfNights * price;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        }
    }
    if (month === "June" || month === "September") {
        if (numberOfNights > 14) { // apartment
            price = 68.70;
            total = (numberOfNights * price) * 0.90;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        } else {
            price = 68.70;
            total = numberOfNights * price;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        }
        if (numberOfNights > 14) { // studio
            price = 75.20;
            total = (numberOfNights * price) * 0.80;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        } else {
            price = 75.20;
            total = numberOfNights * price;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        }
    }
    if (month === "July" || month === "August") {
        if (numberOfNights > 14) { // apartment
            price = 77;
            total = (numberOfNights * price) * 0.90;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        } else {
            price = 77;
            total = numberOfNights * price;
            console.log(`Apartment: ${total.toFixed(2)} lv.`);
        }
        if (numberOfNights > 0) {
            price = 76;
            total = numberOfNights * price;
            console.log(`Studio: ${total.toFixed(2)} lv.`);
        }
    }
}
hotelRoom(["August", "20"]);

// Checked in Judge; score = 100/100