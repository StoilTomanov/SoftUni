function sameNumbers(number) {

    number += '';
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {

        if (number[i] === number[i + 1]) {
            sum += Number(number[i]);

        } else {
            if (number[i + 1] === undefined) {
                sum += Number(number[i]);
                break;
            } else {
                sum += Number(number[i]);
                isSame = false;
            }
        }

    }

    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234);