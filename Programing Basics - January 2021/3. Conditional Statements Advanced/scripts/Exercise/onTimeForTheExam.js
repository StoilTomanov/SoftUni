function onTimeForTheExam(input) {
    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);
    let calculateMins = 0.0;
    let calculateHours = 0.0;

    // LATE
    if (hourOfArrival >= hourOfExam && minuteOfExam !== minuteOfArrival && calculateMins <= 59) { // Minutes late
        if (hourOfArrival === hourOfExam) {
            calculateMins = minuteOfArrival - minuteOfExam;
            console.log("Late");
            console.log(`${calculateMins} minutes after the start`);
        } else if (hourOfArrival >= hourOfExam && minuteOfExam !== minuteOfArrival && calculateMins <= 59) { // Hours and Minutes late
            if (hourOfArrival > hourOfExam) {
                calculateHours = hourOfArrival - hourOfExam;
                calculateMins = minuteOfArrival + minuteOfExam;
                console.log("Late");
                console.log(`${calculateHours}:${calculateMins} hours after the start`);
            }
            // ON TIME
            // if () {
            //     if () {
            //         calculateMins = minuteOfArrival - minuteOfExam;
            //         console.log("Late");
            //         console.log(`${calculateMins} minutes before the start`);
            //     }
            // }
        }
    }
}
onTimeForTheExam(["11", "30", "12", "29"]);

// https://pastebin.com/nt0Frf4P