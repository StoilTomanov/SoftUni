function addAndRemove(commands) {

    let counter = 0;
    let numbers = []

    for (let command of commands) {
        counter++;
        if (command == 'add') {
            numbers.push(counter);
        } else {
            numbers.pop();
        }
    }

    if (numbers.length === 0) {
        console.log('Empty');
    } else {
        for (let num of numbers) {
            console.log(num);
        }
    }

}
addAndRemove(['add', 'add', 'add', 'add']);
console.log('-----');
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('-----');
addAndRemove(['remove', 'remove', 'remove']);