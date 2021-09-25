function sortingNumbers(nums) {
    let biggest = nums.slice();
    let smallest = nums.slice();
    biggest.sort((a, b) => b - a);
    smallest.sort((a, b) => a - b);

    const output = [];

    for (let i = 0; i < nums.length; i++) {

        if (!(nums.length === output.length)) {
            output.push(smallest[i]);
            if (!(nums.length === output.length)) {
                output.push(biggest[i]);
            }

        } else {
            break;
        }
    }


    return output;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));