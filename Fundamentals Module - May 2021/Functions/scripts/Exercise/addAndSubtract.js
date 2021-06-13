function addAndSubtract(numOne, numTwo, numThree) {

    function sum(numOne, numTwo) {
        let result = numOne + numTwo;
        return result;
    }

    function subtract(numThree) {
        let result = sum() - numThree;
        return result;
    }

    let result = subtract();
    return result;

}
console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));