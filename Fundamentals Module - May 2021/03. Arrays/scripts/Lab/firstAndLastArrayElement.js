function firstAndLastArrayElement(element) {

    let first = element[0];
    let last = element[element.length - 1];
    let result = first + last
    console.log(result);

}
firstAndLastArrayElement([20, 30, 40]);
firstAndLastArrayElement([10, 17, 22, 33]);
firstAndLastArrayElement([11, 58, 69]);

// tested in Judge = 100/100