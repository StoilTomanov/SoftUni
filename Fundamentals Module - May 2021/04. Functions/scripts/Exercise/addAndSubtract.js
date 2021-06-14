// create a function that receives the initial parameters
function addAndSubtract(numOne, numTwo, numThree) {
    // create a nested functions calculating the sum and of add and subtract operations
    function add(numOne, numTwo) {
        let result = numOne + numTwo;
        return result;
    }

    function subtract(numSum, numThree) {
        let result = numSum - numThree;
        return result;
    }

    // call the functions in order and return the result 
    let numSum = add(numOne, numTwo);
    let result = subtract(numSum, numThree);
    return result;

}
// print the result
let result = addAndSubtract(23, 6, 10);
console.log(result);

//addAndSubtract(1, 17, 30)
//addAndSubtract(42, 58, 100)

// tested in Judge = 100/100