function matrixOfNumber(num) {
    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        console.log(row);
    }
}
//matrixOfNumber(3);
//matrixOfNumber(7);
//matrixOfNumber(2);