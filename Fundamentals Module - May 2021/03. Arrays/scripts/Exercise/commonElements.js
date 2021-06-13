function commonElements(arrayOne, arrayTwo) {

    let commonElement = '';

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (arrayOne[i] === arrayTwo[j]) {
                commonElement = arrayOne[i];
                console.log(commonElement);
            } else {
                continue;
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log('----------------');
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);

// tested in Judge = 100/100