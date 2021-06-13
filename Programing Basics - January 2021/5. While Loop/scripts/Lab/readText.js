function readText(input) {
    let index = 0;

    while (true) {
        let command = input[index];
        if (command === "Stop") {
            break;
        }
        console.log(command);
        index++;
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);

// Checked in Judge; score = 100/100