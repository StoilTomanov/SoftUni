function reversedNumArray(n, array) {
    let str = '';
    for (let j = n - 1; j >= 0; j--) {
        str += array[j] + ' ';
    }
    console.log(str);

}
reversedNumArray(3, [10, 20, 30, 40, 50]);
console.log('------------');
reversedNumArray(4, [-1, 20, 99, 5]);
console.log('------------');
reversedNumArray(2, [66, 43, 75, 89, 47]);

// tested in Judge = 100/100