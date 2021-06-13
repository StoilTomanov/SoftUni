function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0.0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                totalPrice = quantity * 0.50;
                console.log(totalPrice);
                break;
            case "water":
                totalPrice = quantity * 0.80;
                console.log(totalPrice);
                break;
            case "beer":
                totalPrice = quantity * 1.20;
                console.log(totalPrice);
                break;
            case "sweets":
                totalPrice = quantity * 1.45;
                console.log(totalPrice);
                break;
            case "peanuts":
                totalPrice = quantity * 1.60;
                console.log(totalPrice);
                break;
        }
    }
    if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                totalPrice = quantity * 0.40;
                console.log(totalPrice);
                break;
            case "water":
                totalPrice = quantity * 0.70;
                console.log(totalPrice);
                break;
            case "beer":
                totalPrice = quantity * 1.15;
                console.log(totalPrice);
                break;
            case "sweets":
                totalPrice = quantity * 1.30;
                console.log(totalPrice);
                break;
            case "peanuts":
                totalPrice = quantity * 1.50;
                console.log(totalPrice);
                break;
        }
    }
    if (city === "Varna") {
        switch (product) {
            case "coffee":
                totalPrice = quantity * 0.45;
                console.log(totalPrice);
                break;
            case "water":
                totalPrice = quantity * 0.70;
                console.log(totalPrice);
                break;
            case "beer":
                totalPrice = quantity * 1.10;
                console.log(totalPrice);
                break;
            case "sweets":
                totalPrice = quantity * 1.35;
                console.log(totalPrice);
                break;
            case "peanuts":
                totalPrice = quantity * 1.55;
                console.log(totalPrice);
                break;
        }
    }
}
smallShop(["beer", "Sofia", "6"]);

// Checked in Judge; score = 100/100