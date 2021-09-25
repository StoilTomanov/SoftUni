function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let poped = arr.pop();
        arr.unshift(poped);
    }

    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2);
console.log('-----');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);