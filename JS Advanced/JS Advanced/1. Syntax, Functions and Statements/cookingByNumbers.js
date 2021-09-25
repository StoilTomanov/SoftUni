function cookingByNumbers(numAsStr, op1, op2, op3, op4, op5) {
    let number = Number(numAsStr);
    // TODO: write five fucntions, one for reach operation (5 in total) doing what is described in the problem
    let operations = [op1, op2, op3, op4, op5];

    function chop(num) {
        return num = num / 2;
    };

    function dice(num) {
        return num = Math.sqrt(num);
    };

    function spice(num) {
        return num = num + 1;
    };

    function bake(num) {
        return num = num * 3;
    };

    function fillet(num) {
        return num = num * 0.80;
    };

    for (op of operations) {
        if (op == 'chop') {
            console.log(chop(number));
            number = chop(number)
        } else if (op == 'dice') {
            console.log(dice(number));
            number = dice(number)
        } else if (op == 'spice') {
            console.log(spice(number));
            number = spice(number)
        } else if (op == 'bake') {
            console.log(bake(number));
            number = bake(number)
        } else if (op == 'fillet') {
            console.log(fillet(number));
            number = fillet(number)
        }
    }


}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');