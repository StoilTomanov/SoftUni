function personalTitle(input) {
    let age = Number(input[0]);
    let sex = input[1];
    if (age >= 16) {
        switch (sex) {
            case "f":
                console.log("Ms.");
                break;
            case "m":
                console.log("Mr.");
                break;
        }
    }
    if (age < 16) {
        switch (sex) {
            case "f":
                console.log("Miss");
                break;
            case "m":
                console.log("Master");
                break;
        }
    }
}
personalTitle(["13.5", "m"]);

// Checked in Judge; score = 100/100