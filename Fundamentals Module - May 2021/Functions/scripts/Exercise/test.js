function test() {
    let pi = Math.PI
    return Number(pi.toFixed(2))

}

function multiplyNum(num) {
    let result = num * test();
    return result;

}
console.log(multiplyNum(2));