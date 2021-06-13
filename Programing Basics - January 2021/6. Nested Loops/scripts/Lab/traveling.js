function traveling(input) {
    let index = 0;
    let inputLine = input[index++];

    while (inputLine !== "End") {
        let minBudgetNeeded = Number(input[index++]);
        let savedSum = 0;

        for (let i = index; i < minBudgetNeeded; i++) {
            let currentSavedSum = Number(input[index++]);
            savedSum += currentSavedSum;

            if (savedSum >= minBudgetNeeded) {
                console.log(`Going to ${inputLine}!`);
                break;
            } else {}
        }
        inputLine = input[index++];
    }
}
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);;

// Checked in Judge; score = 100/100