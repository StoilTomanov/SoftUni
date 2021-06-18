function train(array) {
    // array[0] will be the wagons with passengers
    // array[1] will be the max capacity of each wagon
    // rest of the array are commands

    let wagons = array[0].split(' ');
    let maxCapacity = Number(array[1]);
    let command = array.slice(2, array.length);

    for (let i = 0; i < command.length; i++) {
        let currentCommand = command[i].split(' ')
        if (currentCommand[0] === 'Add') {
            wagons.push(currentCommand[1]);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(currentCommand[0]) + Number(wagons[j]) <= maxCapacity) {
                    wagons[j] = Number(currentCommand[0]) + Number(wagons[j]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
console.log('-----------------------------------');
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);