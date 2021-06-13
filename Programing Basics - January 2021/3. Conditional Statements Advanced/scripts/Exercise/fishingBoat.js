function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishmen = input[2];
    let totalRent = 0.0;
    let shipRentSpring = 3000;
    let shipRentSummer = 4200;
    let shipRentAutumn = 4200;
    let shipRentWinter = 2600;

    switch (season) {
        case "Summer":
            if (numberOfFishmen <= 6) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSummer * 0.90) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSummer * 0.90;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen > 6 && numberOfFishmen <= 11) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSummer * 0.85) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSummer * 0.85;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen >= 12) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSummer * 0.75) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSummer * 0.75;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            break;
        case "Spring":
            if (numberOfFishmen <= 6) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSpring * 0.90) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSpring * 0.90;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen > 6 && numberOfFishmen <= 11) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSpring * 0.85) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSpring * 0.85;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen >= 12) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentSpring * 0.75) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentSpring * 0.75;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            break;
        case "Autumn":
            if (numberOfFishmen <= 6) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentAutumn * 0.90) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentAutumn * 0.90;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen > 6 && numberOfFishmen <= 11) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentAutumn * 0.85) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentAutumn * 0.85;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen >= 12) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentAutumn * 0.75) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentAutumn * 0.75;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            break;
        case "Winter":
            if (numberOfFishmen <= 6) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentWinter * 0.90) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentWinter * 0.90;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen > 6 && numberOfFishmen <= 11) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentWinter * 0.85) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentWinter * 0.85;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            if (numberOfFishmen >= 12) {
                if (numberOfFishmen % 2 === 0 && season !== "Autumn") {
                    totalRent = (shipRentWinter * 0.75) * 0.95;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                } else {
                    totalRent = shipRentWinter * 0.75;
                    if (totalRent <= budget) {
                        console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
                    } else {
                        console.log(`Not enough money! You need ${Math.abs(budget - totalRent).toFixed(2)} leva.`);
                    }
                }
            }
            break;
    }
}
fishingBoat(["2000", "Winter", "13"]);

// Checked in Judge; score = 100/100