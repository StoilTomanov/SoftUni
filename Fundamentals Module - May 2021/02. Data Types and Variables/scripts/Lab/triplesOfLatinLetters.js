function triplesOfLatinLetters(n) {

    let letterA = '';
    let letterB = '';
    let letterC = '';

    for (let a = 0; a < n; a++) {
        let letterA = String.fromCharCode(97 + a)
        for (let b = 0; b < n; b++) {
            let letterB = String.fromCharCode(97 + b)
            for (let c = 0; c < n; c++) {
                let letterC = String.fromCharCode(97 + c)
                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }
}
triplesOfLatinLetters(3);

// tested in Judge = 100/100