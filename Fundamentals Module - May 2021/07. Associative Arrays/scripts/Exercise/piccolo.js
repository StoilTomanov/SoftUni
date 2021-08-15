function piccolo(array) {
    let carPlates = {}

    // iterate through the array and split each element into new array
    for (let i = 0; i < array.length; i++) {
        let currentPlate = array[i].split(', ');

        // if the status ot plate is "IN" add it to the object
        if (currentPlate[0] === 'IN') {
            carPlates[currentPlate[1]] = 0;
        } else { // check if the same plate exists and remove it if YES
            if (carPlates.hasOwnProperty(currentPlate[1])) {
                delete carPlates[currentPlate[1]];
            }
        }
    }
    // print
    if (Object.keys(carPlates).length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        // sort the values of the object by asceding order
        let sortedCarPlates = Object.keys(carPlates).sort();
        for (plate of sortedCarPlates) {
            console.log(plate);
        }
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('--------------------');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])