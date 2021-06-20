function houseParty(arrOfNames) {
    let guestArray = [];

    // iterate though the array and check if the guest is going or not
    for (let i = 0; i < arrOfNames.length; i++) {
        let status = arrOfNames[i].split(' ');

        if (status[2] === 'going!') { // if going add him to the list
            if (!guestArray.includes(status[0])) {
                guestArray.push(status[0]);
            } else {
                console.log(`${status[0]} is already in the list!`);
            }

        } else if (status[2] === 'not') { // if not going check wiether he wsa already in the list and remove him
            if (guestArray.includes(status[0])) {
                let removeName = guestArray.indexOf(status[0]);
                guestArray.splice(removeName, removeName + 1);
            } else {
                console.log(`${status[0]} is not in the list!`);
            }
        }
    }

    console.log(guestArray.join('\n'));
    // print the list of guest each on a separate line

}
houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])