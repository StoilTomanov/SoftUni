function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let readLine = '';
        for (let j = 1; j <= i; j++) {
            readLine += ` ${i}`;
        }
        console.log(readLine);

    }

}
triangleOfNumbers(3);
console.log('--------------');
triangleOfNumbers(5);
console.log('--------------');
triangleOfNumbers(6);

// tested in Judge = 100/100;