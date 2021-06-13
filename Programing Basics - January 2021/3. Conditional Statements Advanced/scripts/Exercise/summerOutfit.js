function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayTime = input[1];

    switch (dayTime) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Sweatshirt"
                let shoes = "Sneakers"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees > 18 && degrees <= 24) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees >= 25) {
                let outfit = "T-Shirt"
                let shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees > 18 && degrees <= 24) {
                let outfit = "T-Shirt"
                let shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees >= 25) {
                let outfit = "Swim Suit"
                let shoes = "Barefoot"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees > 18 && degrees <= 24) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            if (degrees >= 25) {
                let outfit = "Shirt"
                let shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
        default:
            console.log("Not a valid input!!!");
    }
}
summerOutfit(["16", "Afternoon"]);

// Checked in Judge; score = 100/100