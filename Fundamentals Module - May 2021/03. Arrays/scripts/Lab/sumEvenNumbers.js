function sumEvenNumbers(nums) {

    // iterate through the array
    // parse each number to Number with for loop
    // sum the parsed number and print result

    let parsed = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        parsed = Number(nums[i]);
        if (parsed % 2 === 0) {
            sum += parsed;
        }
    }

    console.log(sum);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
console.log('------------');
sumEvenNumbers(['3', '5', '7', '9']);
console.log('------------');
sumEvenNumbers(['2', '4', '6', '8', '10']);

// tested in Judge = 100/100