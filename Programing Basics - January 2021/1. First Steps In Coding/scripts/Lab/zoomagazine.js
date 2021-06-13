function zoomagazine(input) {
    let dogsCount = Number(input[0]);
    let animalsCount = Number(input[1]);
    let pricePerDog = 2.50;
    let pricePerAnimals = 4.00;

    let totalSum = (dogsCount * pricePerDog) + (animalsCount * pricePerAnimals);

    console.log(totalSum);
}
zoomagazine(["13", "9"]);

// Checked in Judge; score = 100/100