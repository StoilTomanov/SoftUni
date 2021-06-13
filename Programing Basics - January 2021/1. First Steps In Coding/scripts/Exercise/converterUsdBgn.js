function currencyConverter(input) {

    let fixedExchangeRate = 1.79549;
    let usdInput = Number(input[0]);
    let bgnOutput = Number(usdInput * fixedExchangeRate);

    console.log(bgnOutput);
}
currencyConverter(["22"]);

// Checked in Judge; score = 100/100