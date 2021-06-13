function evenAndOddSubtraction(nums) {

    let even = 0;
    let odd = 0;

    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { // even
            // find the sum of even nums
            even += nums[i];
        } else { // odd
            // find the sum of odd nums
            odd += nums[i];
            // this doens't work with else if (nums[i] % 2 === 1) construction - it does not cover the negative numbers
        }
    }
    // keep the results in variables
    // find the difference between the sum
    let result = even - odd;

    console.log(result);

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
console.log('-------------');
evenAndOddSubtraction([3, 5, 7, 9]);
console.log('-------------');
evenAndOddSubtraction([2, 4, 6, 8, 10]);

// tested in Judge = 100/100