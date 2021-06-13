function skiTrip(input) {
    let days = Number(input[0]) - 1;
    let typeOfRoom = input[1];
    let feedback = input[2];
    let roomForOnePerson = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35.00;
    let price = 0.0;

    switch (feedback) {
        case "positive":
            switch (typeOfRoom) {
                case "room for one person":
                    if (days < 10) {
                        price = days * roomForOnePerson;
                    } else if (days >= 10 && days <= 15) {
                        price = days * roomForOnePerson;
                    } else if (days > 15) {
                        price = days * roomForOnePerson;
                    }
                    break;
                case "apartment":
                    if (days < 10) {
                        price = (days * apartment) * 0.70;
                    } else if (days >= 10 && days <= 15) {
                        price = (days * apartment) * 0.65;
                    } else if (days > 15) {
                        price = (days * apartment) * 0.50;
                    }
                    break;
                case "president apartment":
                    if (days < 10) {
                        price = (days * presidentApartment) * 0.90;
                    } else if (days >= 10 && days <= 15) {
                        price = (days * presidentApartment) * 0.85;
                    } else if (days > 15) {
                        price = (days * presidentApartment) * 0.80;
                    }
                    break;
            }
            console.log((price = price + (price * 0.25)).toFixed(2));
            break;
        case "negative":
            switch (typeOfRoom) {
                case "room for one person":
                    if (days < 10) {
                        price = days * roomForOnePerson;
                    } else if (days >= 10 && days <= 15) {
                        price = days * roomForOnePerson;
                    } else if (days > 15) {
                        price = days * roomForOnePerson;
                    }
                    break;
                case "apartment":
                    if (days < 10) {
                        price = (days * apartment) * 0.70;
                    } else if (days >= 10 && days <= 15) {
                        price = (days * apartment) * 0.65;
                    } else if (days > 15) {
                        price = (days * apartment) * 0.50;
                    }
                    break;
                case "president apartment":
                    if (days < 10) {
                        price = (days * presidentApartment) * 0.90;
                    } else if (days >= 10 && days <= 15) {
                        price = (days * presidentApartment) * 0.85;
                    } else if (days > 15) {
                        price = (days * presidentApartment) * 0.80;
                    }
                    break;
            }
            console.log((price = price - (price * 0.10)).toFixed(2));
            break;
    }
}
skiTrip(["14", "apartment", "positive"]);

// Checked in Judge; score = 100/100