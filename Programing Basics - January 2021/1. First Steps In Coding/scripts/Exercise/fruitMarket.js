function fruitMarket(input) {

    let berryPrice = Number(input[0]);
    let bananasQuantityInKg = Number(input[1]);
    let orangesQuantityInKg = Number(input[2]);
    let raspberriesQuantityInKg = Number(input[3]);
    let berriesQuantityInKg = Number(input[4]);

    let raspberriesPriceInKg = berryPrice / 2;
    let orangesPriceInKg = raspberriesPriceInKg - (raspberriesPriceInKg * 0.4);
    let bananasPriceInKg = raspberriesPriceInKg - (raspberriesPriceInKg * 0.8);

    let totalRaspberrySum = raspberriesPriceInKg * raspberriesQuantityInKg;
    let totalBananaSum = bananasPriceInKg * bananasQuantityInKg;
    let totalBerrySum = berryPrice * berriesQuantityInKg;
    let totalOrangeSum = orangesPriceInKg * orangesQuantityInKg;

    let totalSum = totalRaspberrySum + totalBananaSum + totalBerrySum + totalOrangeSum;

    console.log(totalSum);

}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);

// Checked in Judge; score = 100/100