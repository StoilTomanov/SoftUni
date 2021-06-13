function testOne() {

    let num = 2.123000;
    let fixed = num.toFixed(6);
    let numbered = parseFloat(fixed);

    console.log(numbered);


}

function testTwo() {

    for (let i = 2; i <= 1000; i++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0 || i === 2 || i === 3 || i === 5 || i === 7) {
            console.log(i);
        }
    }

    // this function solve the issue with the Prime numbers. It print all the prime numbers from i till N; be carefull not each number is checked if it is Prime so double check if needed; 

}
testTwo();