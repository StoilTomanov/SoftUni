function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0.0;
    let moneySpent = 0.0;
    let typeOfPlaceSummer = ""
    let typeOfPlaceWinter = ""

    if (budget <= 100) { // Bulgaria
        switch (season) {
            case "summer":
                let typeOfPlaceSummer = "Camp"
                price = budget * 0.70;
                moneySpent = budget - price;
                console.log("Somewhere in Bulgaria");
                console.log(`${typeOfPlaceSummer} - ${moneySpent.toFixed(2)}`);
                break;
            case "winter":
                let typeOfPlaceWinter = "Hotel"
                price = budget * 0.30;
                moneySpent = budget - price;
                console.log("Somewhere in Bulgaria");
                console.log(`${typeOfPlaceWinter} - ${moneySpent.toFixed(2)}`);
                break;
            default:
                console.log("Invalid input");
        }
    } else if (budget <= 1000) { // Balkans
        switch (season) {
            case "summer":
                let typeOfPlaceSummer = "Camp"
                price = budget * 0.60;
                moneySpent = budget - price;
                console.log("Somewhere in Balkans");
                console.log(`${typeOfPlaceSummer} - ${moneySpent.toFixed(2)}`);
                break;
            case "winter":
                let typeOfPlaceWinter = "Hotel"
                price = budget * 0.20;
                moneySpent = budget - price;
                console.log("Somewhere in Balkans");
                console.log(`${typeOfPlaceWinter} - ${moneySpent.toFixed(2)}`);
                break;
            default:
                console.log("Invalid input");
        }
    } else { // Europe
        switch (season) {
            case "summer":
                let typeOfPlaceWinter = "Hotel"
                price = budget * 0.10;
                moneySpent = budget - price;
                console.log("Somewhere in Europe");
                console.log(`${typeOfPlaceWinter} - ${moneySpent.toFixed(2)}`);
                break;
            default:
                console.log("Invalid input");
        }
    }
}
journey(["1500", "summer"]);

// Checked in Judge; score = 72/100