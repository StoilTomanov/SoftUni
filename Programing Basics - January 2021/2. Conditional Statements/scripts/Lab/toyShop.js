function toyShop(input) {
    let puzzle = 2.60;
    let doll = 3;
    let tedyBear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let vacantionPrice = Number(input[0]);
    let puzzleQuantity = Number(input[1]);
    let dollsQuantity = Number(input[2]);
    let tedyBearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);

    let totalQuantity = puzzleQuantity + dollsQuantity + tedyBearsQuantity + minionsQuantity + trucksQuantity;

    let totalSum = ((puzzleQuantity * puzzle) + (dollsQuantity * doll) + (tedyBearsQuantity * tedyBear) + (minionsQuantity * minion) + (trucksQuantity * truck))

    if (totalQuantity >= 50) {
        totalSum = totalSum - (totalSum * 0.25);
    }

    totalSum = totalSum - (totalSum * 0.10);

    if (totalSum >= vacantionPrice) {
        console.log(`Yes! ${(totalSum - vacantionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacantionPrice - totalSum).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);

// Checked in Judge; score = 100/100