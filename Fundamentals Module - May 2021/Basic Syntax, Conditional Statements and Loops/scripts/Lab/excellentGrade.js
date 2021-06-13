function excellentGrade(grade) {
    let input = grade;

    if (input >= 5.50 && input <= 6) {
        console.log('Excellent');
    } else if (input < 5.50) {
        console.log('Not excellent');
    } else if (input < 1 || input > 6) {
        console.log('Invalid grade');
    }

}
//excellentGrade(5.50);
//excellentGrade(4.35);
excellentGrade(7.12);

// tested in Judge = 100/100;