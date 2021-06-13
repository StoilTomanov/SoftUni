function newHouse(input) {
    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0.0;
    let moneyLeft = 0.0;

    switch (flowerType) {
        case "Roses":
            if (quantity > 80) {
                price = (quantity * 5) * 0.90;
            } else {
                price = quantity * 5;
            }
            if (price <= budget) {
                moneyLeft = budget - price;
                console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyLeft = Math.abs(price - budget);
                console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                price = (quantity * 3.80) * 0.85;
            } else {
                price = quantity * 3.80;
            }
            if (price <= budget) {
                moneyLeft = budget - price;
                console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyLeft = Math.abs(price - budget);
                console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                price = (quantity * 2.80) * 0.85;
            } else {
                price = quantity * 2.80;
            }
            if (price <= budget) {
                moneyLeft = budget - price;
                console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyLeft = Math.abs(price - budget);
                console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                price = (quantity * 3);
                price = price + (price * 0.15);
            } else {
                price = quantity * 3;
            }
            if (price <= budget) {
                moneyLeft = budget - price;
                console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyLeft = Math.abs(price - budget);
                console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                price = (quantity * 2.50);
                price = price + (price * 0.20);
            } else {
                price = quantity * 2.50;
            }
            if (price <= budget) {
                moneyLeft = budget - price;
                console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyLeft = Math.abs(price - budget);
                console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
            }
            break;
        default:
            console.log("Invalid input!!!");
    }
}
newHouse(["Narcissus", "119", "360"]);

// Checked in Judge; score = 100/100