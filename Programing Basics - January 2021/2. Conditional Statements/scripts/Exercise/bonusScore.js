function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0.0;
    let total = num + bonus;
    if (num <= 100) {
        bonus = 5;
        total = bonus + num;
    } else if (num > 1000) {
        bonus = num * 0.10;
        total = bonus + num;
    } else {
        bonus = num * 0.20;
        total = bonus + num
    }

    if (num % 2 === 0) {
        bonus = bonus + 1;
        total = bonus + num;
    } else if (num % 10 === 5) {
        bonus = bonus + 2;
        total = bonus + num;
    }
    console.log(bonus);
    console.log(total);
}
bonusScore(["20"]);

// Checked in Judge; score = 100/100