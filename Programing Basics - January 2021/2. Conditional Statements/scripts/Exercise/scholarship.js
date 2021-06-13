function scholarship(input) {
    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScholarship = minSalary * 0.35;
    let excellentScholarship = averageGrade * 25;

    if (income < minSalary && averageGrade > 4.50 && socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (averageGrade >= 5.50 && excellentScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship(["380", "4.60", "450.00"]);

// Checked in Judge; score = 93/100