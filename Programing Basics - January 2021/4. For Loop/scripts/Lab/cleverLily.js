function cleverLily(input) {
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let toy = 0;
    let collectedMoney = 0;
    let cashFromToys = 0;
    let currentMoney = 10;

    for (let years = 1; years <= age; years++) {
        if (years % 2 === 0) { // receive money
            collectedMoney += currentMoney;
            collectedMoney -= 1;
            currentMoney += 10;
        } else { // receive toy
            toy++;
        }
    }
    cashFromToys = toy * pricePerToy;
    collectedMoney += cashFromToys;
    if (collectedMoney >= washingMashinePrice) {
        console.log(`Yes! ${(collectedMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(Math.abs(collectedMoney - washingMashinePrice)).toFixed(2)}`);
    }
}
cleverLily(["10", "170", "6"]);

// Checked in Judge; score = 100/100