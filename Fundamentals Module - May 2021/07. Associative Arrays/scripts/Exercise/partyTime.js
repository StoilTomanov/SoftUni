function partyTime(array) {
    // create a VIP object and a REGULAR object
    let vip = {};
    let regular = {};
    let invitedGuests = [];
    let attendees = [];
    let isFinished = false;
    let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    /* insert all the invited guests before and after the command "PARTY" in a separate arrays
        - iterate through the array and insert guest in an array until received "PARTY"
        - the rest of the elements that are after the command "PARTY" insert in a separate array
    */
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'PARTY') {
            i++
            for (let y = i; y <= array.length; y++) {
                if (array[y] === undefined) {
                    isFinished = true;
                } else {
                    attendees.push(array[y]);
                }
            }
        } else {
            invitedGuests.push(array[i]);
        }
        if (isFinished) {
            break;
        }
    }
    /* check all the guests after the PARTY command if they exists in the already created array that has all invited guests with nested loop
        - use a nested loop to check if each of the attendees exists in the invited
        - whomever is included is attendee and whomever is not included is absent
        - put all the absent in the dedicated object (VIP or REGULAR); if its number start with a digit its a VIP else REGULAR
    */
    let counter = 0;
    for (let i = 0; i < invitedGuests.length; i++) {
        if (!attendees.includes(invitedGuests[i])) {

            let currentElement = invitedGuests[i].split('')
            if (digits.includes(currentElement[0])) {
                let vipGuest = invitedGuests[i]
                vip[vipGuest] = 0;
                counter++;
            } else {
                let regularGuest = invitedGuests[i]
                regular[regularGuest] = 0;
                counter++;
            }
        } else {
            attendees.splice(attendees.indexOf(invitedGuests[i]), 1);
        }
    }

    // print the count of the absent guests and their numbers; VIP must be printed first
    console.log(counter);
    for (key in vip) {
        console.log(key);
    }
    for (key in regular) {
        console.log(key);
    }

}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
console.log('--------------------------')
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);