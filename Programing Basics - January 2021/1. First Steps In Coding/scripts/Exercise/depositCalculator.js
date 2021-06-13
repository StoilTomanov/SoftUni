function depositCalculator(input) {

    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let annualInterest = Number(input[2]);

    let sum = deposit * (annualInterest / 100);
    let interestPerMonth = sum / 12;
    let finalSum = deposit + (term * interestPerMonth);

    console.log(finalSum);

}
depositCalculator(["200", "3", "5.7"]);

// Checked in Judge; score = 100/100