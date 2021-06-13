function oldBooks(input) {
    let favBook = input[0];
    let index = 1;
    let checkedBooks = 0;

    while (true) {
        let currentBook = input[index];

        if (currentBook !== "No More Books") {
            if (currentBook === favBook) {
                checkedBooks += index - 1;
                console.log(`You checked ${checkedBooks} books and found it.`);
                break;
            }
        } else {
            checkedBooks += index - 1;
            console.log("The book you search is not here!");
            console.log(`You checked ${checkedBooks} books.`);
            break;
        }
        index++;
    }
}
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);

// Checked in Judge; score = 100/100