function party(input) {

    let hallRent = Number(input[0]);
    let cake = hallRent * 0.2;
    let drinks = cake - (cake * 0.45);
    let animator = hallRent / 3;

    let totalPrice = hallRent + cake + drinks + animator;

    console.log(totalPrice);

}
party(["2250"]);

// Checked in Judge; score = 100/100