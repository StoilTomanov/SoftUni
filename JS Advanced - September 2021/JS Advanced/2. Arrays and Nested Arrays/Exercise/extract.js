function extract(arr) {

    let output = [];
    let isBigger = true;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        for (let y = 0; y < output.length; y++) {
            if (current >= output[y]) {
                isBigger = true;
            } else {
                isBigger = false;
            }
        }

        if (isBigger) {
            output.push(arr[i]);
        }

    }
    return output;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);