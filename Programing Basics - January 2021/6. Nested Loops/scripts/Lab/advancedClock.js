function clock() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            if (h < 10 && m < 10) {
                console.log(`0${h}:0${m}`);
            } else {
                console.log(`${h}:${m}`);
            }
        }
    }
}
clock();

// This is alternative solution of the "Clock" program and it does not require a Judge check;