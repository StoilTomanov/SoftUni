function puppyCare(input) {
    let boughtFoodKg = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    let currentEatenFood = 0;

    while (command !== "Adopted") {
        index++;
        currentEatenFood += Number(command);
        command = input[index];
    }

    if (currentEatenFood >= 0 && currentEatenFood <= boughtFoodKg) {
        let leftovers = boughtFoodKg - currentEatenFood;
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
    } else {
        let leftovers = Math.abs(boughtFoodKg - currentEatenFood);
        console.log(`Food is not enough. You need ${leftovers} grams more.`);
    }

}
puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
])