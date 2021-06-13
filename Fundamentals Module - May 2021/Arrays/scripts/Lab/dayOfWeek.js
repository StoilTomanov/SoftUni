function dayOfWeek(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        console.log(days[num - 1]);
    }

}
dayOfWeek(3);
dayOfWeek(5);
dayOfWeek(32);

// tested in Judge = 100/100