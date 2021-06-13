function movie(input) {
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let priceForClothes = Number(input[2]);
    let decor = budget * 0.10;
    let totalClothes = extra * priceForClothes;
    let decorClothes = decor + totalClothes;
    let totalSum = budget - decorClothes;

    if (extra > 150) {
        totalClothes = totalClothes - (totalClothes * 0.10);
        decorClothes = decor + totalClothes;
        totalSum = budget - decorClothes
    }

    if (budget < decorClothes) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(decorClothes - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - decorClothes).toFixed(2)} leva left.`);
    }
}
movie(["9587.88", "222", "55.68"]);

// Checked in Judge; score = 100/100