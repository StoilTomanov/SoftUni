function bookList(input) {
    let pagesQuantity = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hourToComplete = pagesQuantity / pagesPerHour;

    let hoursPerDays = hourToComplete / days;

    console.log(hoursPerDays);
}
bookList(["212", "20", "2"]);

// Checked in Judge; score = 100/100