function divisibleByThree() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        } else {
            continue;
        }
    }

}
divisibleByThree();

// tested in Judge = 100/100;