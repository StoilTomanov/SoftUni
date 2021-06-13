function catFood(input) {
    let cats = Number(input[0]);
    let foodPerCat = Number(input[1]);
    let smallCats = 0;
    let mediumCats = 0;
    let bigCats = 0;
    let totalFood = 0
    let pricePerKg = 12.45;


    for (let i = 1; i <= cats; i++) {
        let currentCat = Number(input[i]);
        totalFood += currentCat / 1000;
        if (currentCat >= 100 && currentCat < 200) {
            smallCats++;
        } else if (currentCat < 100 && currentCat >= 0) {
            smallCats++;
        } else if (currentCat >= 200 && currentCat < 300) {
            mediumCats++;
        } else if (currentCat >= 300 && currentCat < 400) {
            bigCats++;
        } else {
            bigCats++;
        }
    }

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${mediumCats} cats.`);
    console.log(`Group 3: ${bigCats} cats.`);
    console.log(`Price for food per day: ${(totalFood * pricePerKg).toFixed(2)} lv.`);

}
catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"
]);

// 50 mis 90/100