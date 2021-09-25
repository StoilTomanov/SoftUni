function extract(arr) {
    let output = [arr[0]];
    let reducer = ((a, b) => b >= a ? output.push(b) : a = a);

    arr.reduce(reducer);

    for (let i = 0; i < output.length; i++) {
        if (output[i] <= output[i + 1]) {
            continue;
        } else {
            output.splice(i + 1, i - 1);
        }
    }

    return output;

}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);