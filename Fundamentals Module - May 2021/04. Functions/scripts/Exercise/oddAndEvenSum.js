function sumOddAndEven(num) {
    // parse the input into string
    let numToStr = String(num);
    let evenSum = 0;
    let oddSum = 0;

    // iterate through the string
    for (let i = 0; i < numToStr.length; i++) {
        // prase each element back to num and check if odd or even
        let strToNum = Number(numToStr[i]);
        if (strToNum % 2 === 0) {
            // sum even nums
            evenSum += strToNum;
        } else {
            // sum odd nums
            oddSum += strToNum;
        }
    }

    // print both even and odd sums
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
sumOddAndEven(1000435);
sumOddAndEven(3495892137259234);