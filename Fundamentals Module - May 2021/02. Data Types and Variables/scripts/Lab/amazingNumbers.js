function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;

    for (let digit of num) {
        sum += Number(digit);
    }
    let sumToStr = sum.toString();
    let currentString = ''
    let hasNine = false;
    for (let i = 0; i <= sumToStr.length - 1; i++) {
        currentString = sumToStr[i];
        if (currentString === '9') {
            hasNine = true;
            break;
        } else {
            continue;
        }
    }

    console.log(hasNine ? `${num} Amazing? True` : `${num} Amazing? False`)

}
amazingNumbers(1233);
console.log('-----------');
amazingNumbers(999);

// tested in Judge = 100/100;