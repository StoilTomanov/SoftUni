function maxNumber(array) {

    let topInteger = [0];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (topInteger <= array[i]) {
            topInteger = array[i]
            counter = i
        } else {
            continue;
        }
    }

    for (let j = counter; j < array.length; j++) {
        if (array[j] > array[j + 1] || array[j] >= array[array.length - 1]) {
            newArray.push(array[j]);
        }
    }
    console.log(newArray.join(' '));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

// tested in Judge = 100/100