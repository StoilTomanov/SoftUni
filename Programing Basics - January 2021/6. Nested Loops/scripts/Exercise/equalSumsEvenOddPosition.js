function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";

    for (let y = firstNum; y <= secondNum; y++) {
        let currentNum = "" + y;
        let even = 0;
        let odd = 0;

        for (let x = 0; x <= currentNum.length; x++) {
            let currentDigit = Number(currentNum.charAt(x));
            if (x % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (odd === even) {
            printLine += `${y} `
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["299900", "300000"]);