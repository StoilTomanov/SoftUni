function multiplicationTable() {
    for (let y = 1; y <= 100; y++) {
        for (let x = 1; x <= 100; x++) {
            console.log(`${y} * ${x} = ${y*x}`);
        }
    }
}
multiplicationTable();

// This is alternative solution of the "Clock" program and it does not require a Judge check;